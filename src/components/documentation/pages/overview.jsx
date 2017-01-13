import React, {Component, PropTypes} from 'react';

export default Overview extends Component {
  render() {
    return (
      <div>
        <p>Welcome to Zenow, the platform for creating and sharing data.</p>
        <p>The primary way to interact with information on Zenow is through http requests to our RESTful API (Application Programming Interface). Integrating your project can be done in just a few steps.</p>

        <SectionHeader>Get your developer account</SectionHeader>
        <p>Each user is provided with a unique API Key. This key allows you make requests to Zenow. You can find your API Key by going to the “profile” page.</p>
        <img src="palceholder" />

        <SectionHeader>Understanding HTTP Requests</SectionHeader>
        <p>HTTP (Hypertext Transfer Protocol) is one of the most popular standards for sending messages between computers on the internet. It’s what allows you to send requests to Zenow and receive information from it.</p>
        <p>There is a large variety of libraries to help you make an HTTP request. A few are listed below. Choose the library that best fits your project.</p>
        <ul>
          <li>NodeJS: <a href="https://github.com/visionmedia/superagent">SuperAgent</a>, <a href="https://nodejs.org/api/http.html">Native HTTP (less recommended)</a></li>
          <li>PHP: <a href="http://php.net/manual/en/function.stream-context-create.php">stream context create</a></li>
          <li>Ruby on Rails:  <a href="https://github.com/httprb/http">HTTP Gem</a>, <a href="http://ruby-doc.org/stdlib-2.4.0/libdoc/net/http/rdoc/index.html">Native HTTP (less recommended)</a></li>
          <li>ASP.net: <a href="https://msdn.microsoft.com/en-us/library/456dfw4f(v=vs.110).aspx">Web Request</a></li>
          <li>DJango: <a href="http://www.django-rest-framework.org/tutorial/2-requests-and-responses/">DJango REST Framework</a></li>
          <li>Flask: <a href="http://docs.python-requests.org/en/latest/user/quickstart/">Requests Module</a></li>
          Java: <a <li>href="http://docs.oracle.com/javase/7/docs/api/java/net/HttpURLConnection.html">HttpURLConnection</a></li>
        </ul>
        <p>Using HTTP is simple. First you send a <strong>request</strong> to Zenow’s API, and the API will then return a <strong>response</strong>.</p>
        <p>HTTP requests consist of 4 basic components: the Method, the URL, the Headers, and the Body.</p>
        <ul>
          <li>The <strong>Method</strong> defines the purpose of your request. Each request on Zenow can be one of four methods:</li>
          <ul>
            <li><strong>GET</strong>: Request to read some content</li>
            <li><strong>POST</stong>: Request to create some new content</li>
            <li><strong>PUT</strong>: Request to update some content</li>
            <li><strong>DELETE</strong>: Request to remove some content</li>
          </ul>
          <li>The <strong>URL</strong> is defines the location to which you would like to send requests and looks something like this: <code>https://api.zenow.io/v1/set/search?count=10&page=0</code>. This URL is split into 4 sections</li>
          <ul>
            <li><code>https://</code> This is the <strong>protocol</strong>. All Zenow requests use the HTTPS protocol, which is a variation of HTTP with additional security.</li>
            <li><code>/v1/set/search</code> This is the <strong>path</strong>. It defines the location to which you want to send your request within Zenow’s API.</li>
            <li><code>?count=10&page=0</code> These are the <strong>parameters</strong>. They help define special information about the request and are always placed at the end of the URL. The parameter section is preceded by a question mark and all parameters are separated by an ampersand.</li>
          </ul>
          <li>The <strong>Headers</strong> are a collection of meta-data that describe the request itself. Though, Zenow doesn’t require any special headers.</li>
          <li>The <strong>Body</strong> is a collection of data that you wish to send to the server. On Zenow, Bodies are only used in POST and PUT requests as these are the requests that entail you sending content to Zenow. All bodies on Zenow are in the JSON (Javascrpt Object Notation) format which is discussed in the next section.</li>
        </ul>
        <p>HTTP responses consist of 3 basic components: the Status, the Response Headers, and the Response Body.</p>
        <ul>
          <li>The <strong>Status</strong> is a numerical code describing how the request went. You can see all possible status codes here (https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html). Below are some common codes you’ll encounter on Zenow. Don’t worry about memorizing these. The response body usually has enough information to help you figure out what’s going on.</li>
          <ul>
            <li>2XX: Everything’s good! Your request was processed correctly.</li>
            <ul>
              <li>200: General OK</li>
              <li>201: The item was created</li>
            </ul>
            <li>4XX: There was some problem with your request. You might want to consider changing it.</li>
            <ul>
              <li>400: General Problem</li>
              <li>401: You are not authenticated properly. Make sure your API Key is good.</li>
              <li>403: You are authenticated, but your request isn’t proper for your user account.</li>
              <li>404: The resource you’re looking for doesn’t exist.</li>
            </ul>
            <li>5XX: The server has encountered an error. That’s on me. If you keep getting this, please <Link to="/contact">contact me</Link> so that I can fix it.</li>
          </ul>
          <li>The <strong>Response Headers</strong> like the request headers provide metadata for the response.</li>
          <li>The <strong>Response Body</strong> provides you with the information you requested. All response bodies are in JSON which is discussed in the next section.</li>
        </ul>

        <SectionHeader>Understanding JSON</SectionHeader>
        <p>All HTTP request and response bodies (discussed in the previous section) on Zenow are formatted in JSON (JavaScript Object Notation). This is a logical way to represent data as a string of characters, and looks something like this:</p>
        <pre>
        {
          "surname": "Neutron",
          "people": [
            {
              "firstName": "Jimmy",
              "age": 12,
              "isParent": false
            },
            {
              "firstName": "Hugh",
              "age": 40,
              "isParent": true
            },
            {
              "firstName": "Judy",
              "age": 40,
              "isParent": true
            }
          ],
          "lives": [
            "Retroville"
          ]
        }
        </pre>
        <p>JSON consists of various types of information which may or may not contain more types of information. These types are as follows:</p>
        <ul>
          <li><strong>Object</strong>: Objects are denoted by curly brackets <code>{}</code>. Inside these curly brackets are various <strong>keys</strong> which are strings that correspond with <strong>values</strong>. A value can be any of the JSON types. For example in <code>{ “surname”: “Neutron”, “people”: [] }</code> the key “surname” corresponds to the string “Neutron” while the key “people” corresponds with an empty array. Note that keys are surrounded by quotes, keys and values are separated by colons, and there is a comma separating each key-value pair.</li>
          <li><strong>Array</strong>: Arrays are denoted by brackets <code>[]</code>. Inside these brackets is an ordered list of any number of JSON types. For example the array <code>[“Jimmy”, true, {}]</code> contains 3 ordered items: first, the string “Jimmy,” second, the boolean “true,” and third, an empty array. Note that all items in the array are separated by a comma.</li>
          <li><strong>String</strong>: Strings are a collection of characters usually used to create words or sentences. Example: <code>”Neutro”</code>. Note that strings are surrounded by quotes.</li>
          <li><strong>Number</strong>: Numbers are… well numbers. Examples: <code>12</code>, <code>3.1415</code>. Note that numbers should only contain numbers or a decimal point in the case that it’s a decimal.</li>
          <li><strong>Boolean</strong>: Booleans indicate a binary condition and are written in one of two ways: <code>true</code>, <code>false</code></li>
        </ul>

        <SectionHeader>Using Zenow’s Request Tool</SectionHeader>
        <p>This documentation comes with a tool to demonstrate how each request functions. It’s various components are outlined below.</p>
        <img src="diagram of request tool" />
        <ol>
          <li>Method</li>
          <li>URL</li>
          <li>Send Button (Press to send a request)</li>
          <li>Request Body</li>
          <li>Response Status</li>
          <li>Response Body (Initially the response body will be an anticipated result. You can run the request again to see the actual result)</li>
        </ol>

        <SectionHeader>Get a Set</SectionHeader>
        <p>Now that we understand the method by which requests are made, we can start making requests to interact with Zenow.</p>
        <p>For the following sections in this tutorial, we’ll be using data about some cartoon families.</p>
        <p>On Zenow, data is arranged into sets of items. Each set has a unique Id which you can can look up the Id on the (set details page).</p>
        <img src="image of the set detail page" />
        <p>In order to request the metadata about this set we’ll use the path <code>/v1/set/SET’S_ID.</code></p>
        <RequestTool
          initMethod="GET"
          initPath="/v1/set/{insert id}"
          initStatus="200"
          initResponseBody={} />

        <SectionHeader>Get Items in a Set</SectionHeader>
        <p>We’ve been able to receive metadata about the set, but Zenow’s real power comes from getting the set’s actual data. Each set represents a collection of items. To get these items we can request the path <code>/v1/set/SET’S_ID/item?count=10&page=0</code></p>
        <p>Notice that this request has parameters. <code>count</code> represents the number of items you want to receive from your request, and <code>page</code> is the page of items based on your count. For example, if there are 20 items in a set and you send a request with <code>count=10&page=1</code>, you will receive the 11th through 20th item.</p>
        <RequestTool initMethod="GET" initPath="/v1/set/{insert id}/item?count=10&page=0" />

        <SectionHeader>Search Items in a Set</SectionHeader>
        <p>Sometimes you want to find specific items within a set based on parameters. To do this, we can <code>POST</code> a search request and pass our search query through the request body.</p>
        <p>In the example below, we’re looking for all the cartoon families with the surname “Turner”</p>
        <RequestTool
          initMethod="POST"
          initPath="/v1/set/{insert id}/item/search"
          initBody={{
            surname: "Turner"
          }}
          initStatus="200"
          initResponseBody={} />
        <p>This is just one example. For more complex search queries, see the (Advanced Search documentation).</p>

        <SectionHeader>Create your own Set</SectionHeader>
        <p>Before creating a set, we must choose a <strong>type</strong>. Types define the format for every item in the set. Our set of cartoon families will use the (family type) which has the id //insert id//</p>
        <RequestTool
          initMethod="POST"
          initPath="/v1/set"
          initBody={{
          	"title": "Cartoon Families",
          	"description": "A list of cartoon families",
          	"tags": ["cartoon", "family", "character", "fiction"],
          	"type": "584d75e8bba7a42e648ebf54",
          	"items": [
          		{
          			"surname": "Waterson",
          			"people": [
          				{
          					"firstName": "Gumball",
          					"age": 12,
          					"isParent": false
          				},
          				{
          					"firstName": "Darwin",
          					"age": 10,
          					"isParent": false
          				},
          				{
          					"firstName": "Anais",
          					"age": 4,
          					"isParent": false
          				},
          				{
          					"firstName": "Nicole",
          					"age": 38,
          					"isParent": true
          				},
          				{
          					"firstName": "Richard",
          					"age": 38,
          					"isParent": true
          				}
          			],
          			"lives": [
          				"Elmore"
          			]
          		}
          	]
          }} />
        <p>Our request body contains a few fields:</p>
        <ul>
          <li>Title: the title of your set</li>
          <li>Description: the description of your set</li>
          <li>Tags: an array of strings that describe your set. These are useful to help people searching on Zenow find your set.</li>
          <li>Type: the id of the type this set will follow</li>
          <li>Items: an array of items in the set. You can define these items the same way you define them in the “Add Items to a Set” section below.</li>
        </ul>

        <SectionHeader>Add Items to a Set</SectionHeader>
        <p>Items can be added to the set by posting to <code>/v1/set/SET’S_ID/item</code></p>
        <RequestTool
          initMethod="POST"
          initPath="/v1/set/{insert id}/item"
          initBody={[
            {some id},
            {some id},
            {
              "surname": "Neutron",
              "people": [
                {
                  "firstName": "Jimmy",
                  "age": 12,
          				"isParent": false
                },
                {
                  "firstName": "Hugh",
                  "age": 40,
          				"isParent": true
                },
                {
                  "firstName": "Judy",
                  "age": 40,
          				"isParent": true
                }
              ],
              "lives": [
                "Retroville"
              ]
            },
            {
              "surname": "Turner",
              "people": [
                {
                  "firstName": "Timmy",
                  "age": 10,
                  "isParent": false
                },
                {
                  "firstName": "Dad",
                  "age": 42,
                  "isParent": true
                },
                {
                  "firstName": "Mom",
                  "age": 40,
                  "isParent": true
                }
              ],
              "lives": [
                "Dimmsdale"
              ]
            },
            {
              "surname": "Gaang",
              "people": [
                {
                  "firstName": "Aang",
                  "age": 12,
                  "isParent": false
                },
                {
                  "firstName": "Zuko",
                  "age": 16,
                  "isParent": false
                },
                {
                  "firstName": "Katara",
                  "age": 14,
                  "isParent": false
                },
                {
                  "firstName": "Sokka",
                  "age": 15,
                  "isParent": false
                },
                {
                  "firstName": "Toph",
                  "age": 12,
                  "isParent": false
                }
              ],
              "lives": [
                "Water Tribes",
          			"Earth Kingdom",
          			"Fire Nation",
          			"Air Temples"
              ]
            }
          ]} />
        <p>Note that this request accepts an array that contains both JSON objects that follow the set’s type and strings. These strings are the ids of items in other sets the follow the same type.</p>

        <SectionHeader>Other Set Operations</SectionHeader>
        <p>See the REST API documentation for more useful set operations:</p>
        <li>Clone a Set</li>
        <li>Update a Set</li>
        <li>Delete a Set</li>
        <li>Retrieve a Specific Item in a set</li>
        <li>Update an Item in a Set</li>
        <li>Remove an Item from a Set</li>

        <SectionHeader>Create a Type</SectionHeader>
        <p>Often times the types currently available on Zenow won’t fit the type you’d like your set to follow. So, you can create your own types if needed.</p>
        <p>Here we’re making a duplicate of the family type we’ve been using.</p>
        <RequestTool
          initMethod="POST"
          initPath="/v1/type"
          initBody={{
            "title": "Family",
            "description": "Describes a family unit. Usually one that lives in the same house."
            "properties": {
              "surname": {
                "type": "string"
              },
              "people": {
                "type": "array",
                "items": {
                  "type": "object",
                  "properties": {
                    "firstName": {
                      "type": "string"
                    },
                    "age": {
                      "type": "number"
                    },
                    "isParent": {
                      "type": "boolean"
                    }
                  }
                }
              },
              "lives": {
                "type": "array",
                "items": {
                  "type": "string"
                }
              }
            }
          }} />
        <p>The request body requires various fields:</p>
        <ul>
          <li>Title: the title of the type</li>
          <li>Description: the description of the type</li>
          <li>Tags: an array of strings that describe your type. These are useful to help people searching on Zenow find your type.</li>
          <li>Properties: The definition of the structure for items following this type. Each field includes the kind of type that should go in that field. Note that “object” types have “properties” field to define more key values and “array” types have an “items” field to define the type of the items in the array.</li>
        </ul>
      </div>
    )
  }
}
