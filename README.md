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
  Returns passed JSON `value`.
  
- [/echo/json/:value/:delay](http://localhost:3030/echo/json/%7B%22prop%22:%22value%22%7D/1000)  
  Returns passed JSON `value` right after specified `delay`.

- [/echo/xml](http://localhost:3030/echo/xml)  
  Returns empty XML response.

- [/echo/xml/:value](http://localhost:3030/echo/xml/%3Chey%20%2F%3E)  
  Returns passed XML `value`.

- [/echo/xml/:value/:delay](http://localhost:3030/echo/xml/%3Chey%20%2F%3E/1000)  
  Returns passed XML `value` right after specified `delay`.

- [/echo/html](http://localhost:3030/echo/html)  
  Returns empty HTML response.

- [/echo/html/:value](http://localhost:3030/echo/html/%3Cbutton%3Ehey%3C%2Fbutton%3E)  
  Returns passed HTML `value`.

- [/echo/html/:value/:delay](http://localhost:3030/echo/html/%3Cbutton%3Ehey%3C%2Fbutton%3E/1000)  
  Returns passed HTML `value` right after specified `delay`.
  
