
export default const docData = [
  {
    category: 'overview',
    content: [
      {
        element: 'p',
        content: 'Welcome to Zenow, the platform for creating and sharing data.'
      },
      {
        element: 'p',
        content: 'The primary way to interact with information on Zenow is through http requests to our RESTful API (Application Programming Interface). Integrating your project can be done in just a few steps.'
      },
      {
        element: 'header',
        content: 'Get your Developer Account'
      },
      {
        element: 'signUpDocPrompt'
      },
      {
        element: 'header',
        content: 'Each user is provided with a unique API Key. This key allows you make requests to Zenow. You can find your API Key by going to the “profile” page.'
      },
      {
        element: 'img',
        content: {
          src: 'TODO insert'
        }
      },
      {
        element: 'header',
        content: 'Understanding HTTP Requests'
      },
      {
        element: 'p',
        content: 'HTTP (Hypertext Transfer Protocol) is one of the most popular standards for sending messages between computers on the internet. It’s what allows you to send requests to Zenow and receive information from it.'
      },
      {
        element: 'p',
        content: 'There is a large variety of libraries to help you make an HTTP request. A few are listed below. Choose the library that best fits your project.'
      },
      {
        element: 'ul',
        content: [
          'NodeJS: <a href="https://github.com/visionmedia/superagent">SuperAgent</a>, <a href="https://nodejs.org/api/http.html">Native HTTP (less recommended)</a>',
          'PHP: <a href="http://php.net/manual/en/function.stream-context-create.php">stream context create</a>',
          'Ruby on Rails:  <a href="https://github.com/httprb/http">HTTP Gem</a>, <a href="http://ruby-doc.org/stdlib-2.4.0/libdoc/net/http/rdoc/index.html">Native HTTP (less recommended)</a>',
          'ASP.net: <a href="https://msdn.microsoft.com/en-us/library/456dfw4f(v=vs.110).aspx">Web Request</a>'
          'DJango: <a href="http://www.django-rest-framework.org/tutorial/2-requests-and-responses/">DJango REST Framework</a>'
          '<a href="http://docs.python-requests.org/en/latest/user/quickstart/">Flask: Requests Module</a>'
          'Java: <a href="http://docs.oracle.com/javase/7/docs/api/java/net/HttpURLConnection.html">HttpURLConnection</a>'
        ]
      },
      {
        element: 'p',
        content: ''
      },
    ]
  }
  {
    category: 'set',
    content: [
      {
        type:
      }
    ]
  },
  {
    category: 'type'
  },
  {
    category: 'auth'
  }
]
