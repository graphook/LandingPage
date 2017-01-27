
const sections = {
  Tutorial: {
    getAccount: 'Get Your Developer Account',
    httpRequests: 'Understanding HTTP Requests',
    json: 'Understanding JSON',
    requestTool: 'Using Zenow’s Request Tool',
    getSet: 'Get a Set',
    getItems: 'Get Items in a Set',
    searchItems: 'Search Items in a Set',
    createSet: 'Create your own Set',
    addItems: 'Add Items to a Set',
    otherSet: 'Other Set Operations',
    createType: 'Create a Type'
  },
  Authentication: {
    userInfo: 'GET /v1/user – Retrieve User Information',
    updateUser: 'PUT /v1/user – Update a User',
    updatePassword: 'PUT /v1/user/password – Update a User’s Password',
    generateNewKey: 'PUT /v1/user/key – Generate new User Key'
  },
  Set: {
    basicSearch: 'GET /v1/set – Basic Search of Sets',
    getSet: 'GET /v1/set/:setId – Retrieve a Specific Set',
    advancedSearch: 'POST /v1/set/search – Advanced Search of Sets',
    createSet: 'POST /v1/set – Create a Set',
    updateSet: 'PUT /v1/set/:setId – Update a Set',
    starSet: 'PUT /v1/set/:setId/star – Star a Set',
    unstarSet: 'PUT /v1/set/:setId/unstar – Unstar a Set',
    deleteSet: 'DELETE /v1/set/:setId – Delete a Set',
    getItem: 'GET /v1/set/:setId/item/:itemId – Retrieve a Specific Item in a Set',
    itemAdvancedSearch: 'POST /v1/set/:setId/item/search – Avanced Search of Items in a Set',
    addItem: 'POST /v1/set/:setId/item/:itemId – Add an Item to a Set',
    deleteItem: 'DELETE /v1/set/:setId/item – Remove an Item from a Set'
  },
  Type: {
    basicSearch: 'GET /v1/type - Basic Search of Types',
    getType: 'GET /v1/type/:id - Retrieve a Specific Type',
    createType: 'POST /v1/type - Create a Type',
    updateType: 'PUT /v1/type/:id - Update a Type'
  }
};

export default sections;
