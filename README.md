Fake Server
===========


The server with a set of endpoints that could be used for test purposes.  
Cross Origin Resource Sharing (CORS) is enabled by default.  
Feel free to add endpoints for your needs.


Run the server
--------------

    npm install
    npm start


Endpoints
---------

- [/delay](http://localhost:3030/delay)  
  Fails within some time due to timeout error.  

- [/delay/:amount](http://localhost:3030/delay/1000)  
  Returns empty JSON object right after passed `amount` of milliseconds. 

- [/echo](http://localhost:3030/echo)  
  Returns empty response.

- [/echo/json](http://localhost:3030/echo/json)  
  Returns empty JSON response.
  
- [/echo/json/:value](http://localhost:3030/echo/json/%7B%22prop%22:%22value%22%7D)  
  Returns passed JSON `value`. Example:  
    
        fetch('http://localhost:3030/echo/json/' + encodeURIComponent(JSON.stringify({prop: 'value'})))
          .then(function (response) { return response.json(); })
          .then(function (data) { console.log(data); }) // prints {prop: 'value'}

- [/echo/xml](http://localhost:3030/echo/xml)  
  Returns empty XML response.

- [/echo/xml/:value](http://localhost:3030/echo/xml/%3Chey%20%2F%3E)  
  Returns passed XML `value`. Example:  
    
        fetch('http://localhost:3030/echo/xml/' + encodeURIComponent('<hey />'))
          .then(function (response) { return response.text(); })
          .then(function (data) { console.log(data); }) // prints <hey />

- [/echo/html](http://localhost:3030/echo/html)  
  Returns empty HTML response.

- [/echo/html/:value](http://localhost:3030/echo/html/%3Cbutton%3Ehey%3C%2Fbutton%3E)  
  Returns passed HTML `value`. Example:  
    
        fetch('http://localhost:3030/echo/html/' + encodeURIComponent('<button>hey</button>'))
          .then(function (response) { return response.text(); })
          .then(function (data) { console.log(data); }) // prints <button>hey</button>
