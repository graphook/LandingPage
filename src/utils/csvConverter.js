

function exploreObject(obj, keyMap, path, index) {
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'object') {
      exploreObject(obj[key], keyMap, path.concat([key]), index);
    } else {
      let mapKey = path.concat([key]).join('.')
      if (keyMap[mapKey] == null) {
        keyMap[mapKey] = Array(index);
      }
      keyMap[mapKey].push(obj[key]);
    }
  })
}

export function jsonToCsv(json) {
  let keyMap = {};
  json.forEach((item, index) => {
    exploreObject(item, keyMap, [], index);
    Object.keys(keyMap).forEach((key) => {
      if (keyMap[key].length !== index + 1) {
        keyMap[key].push(undefined);
      }
    });
  });
  let keys = Object.keys(keyMap);
  let str = keys.join(',') + '\n';
  for (let i = 0; i < json.length; i++) {
    keys.forEach((key) => {
      str += (keyMap[key][i] || '') + ',';
    })
    str += '\n';
  }
  return str;
}

function buildTypeFromHeader(fields, index, rows, allHeaders) {
  if (fields.reduce((isLastItem, val) => isLastItem && val.length === index, true)) {
    let isBool = true;
    let isNum = true;
    rows.forEach((row) => {
      fields.forEach((field) => {
        const val = row[allHeaders.indexOf(field.join('.'))];
        if (val != null && val !== '' && val !== 'true' && val !== 'false') {
          isBool = false;
        }
        if (val != null && val !== '' && isNaN(val)) {
          isNum = false;
        }
      })
    });
    if (isBool) {
      return { type: 'boolean' }
    } else if (isNum) {
      return { type: 'number' }
    } else {
      return { type: 'string' }
    }
  }
  let isArray = true;
  const fieldMap = {};
  fields.forEach((field) => {
    if (isNaN(field[index])) {
      isArray = false;
    }
    fieldMap[field[index]] = fieldMap[field[index]] || [];
    fieldMap[field[index]].push(field);
  });
  if (isArray) {
    return {
      type: 'array',
      length: Object.keys(fieldMap).length,
      items: buildTypeFromHeader(
        fields,
        index + 1,
        rows,
        allHeaders)
    };
  } else {
    const obj = {
      type: 'object',
      fields: {}
    };
    fields.forEach((field) => {
      obj.fields[field[index]] = buildTypeFromHeader(
        fieldMap[field[index]],
        index + 1,
        rows,
        allHeaders);
    })
    return obj;
  }
}

function buildObject(row, type, header, path) {
  let val;
  switch (type.type) {
    case 'object':
      let obj = {};
      Object.keys(type.fields).forEach((field) => {
        let built = buildObject(row, type.fields[field], header, path + '.' + field);
        if (built != null) {
          obj[field] = built;
        }
      });
      return (Object.keys(obj).lenth === 0) ? null : obj;
    case 'array':
      let arr = [];
      for (let i = 0; i < type.length; i++) {
        let built = buildObject(row, type.items, header, path + '.' + i);
        if (built != null) {
          arr[i] = built;
        }
      }
      return (arr.length === 0) ? null : arr;
    case 'number':
      return parseFloat(row[header.indexOf(path.slice(1, path.length))]) || null;
    case 'boolean':
      val = row[header.indexOf(path.slice(1, path.length))];
      if (val === 'true') {
        return true;
      } else if (val === 'false') {
        return false;
      } else {
        return null;
      }
    case 'string':
      val = row[header.indexOf(path.slice(1, path.length))];
      return (val !== '') ? val : null;
  }
}

export function csvToJson(csv) {
  const objArr = [];
  let rows = csv.split('\n');
  const header = rows.splice(0, 1)[0].split(',');
  rows = rows.map(row => row.split(','));

  // Deduce a type for the csv
  const headerFields = header.map(field => field.split('.'));
  const headerType = buildTypeFromHeader(headerFields, 0, rows, header);
  rows.forEach((row) => {
    objArr.push(buildObject(row, headerType, header, ''));
  });
  return objArr;
}
