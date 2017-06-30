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

You may use `GET`, `POST`, `PUT` or `DELETE` method with any of the following endpoints:

#### Common ones

- [/delay](http://localhost:3030/delay)  
  Fails within some time due to timeout error.  

- [/delay/:amount](http://localhost:3030/delay/1000)  
  Ends the request right after passed `amount` of milliseconds with empty response. 

#### JSON

- [/echo/json](http://localhost:3030/echo/json)  
  Returns empty JSON response.
  
- [/echo/json/:value](http://localhost:3030/echo/json/%7B%22prop%22:%22value%22%7D)  
  Returns passed JSON `value`.
  
- [/echo/json/:value/:delay](http://localhost:3030/echo/json/%7B%22prop%22:%22value%22%7D/1000)  
  Returns passed JSON `value` right after specified `delay`.

- [/echo/json/:value/:delay/:status](http://localhost:3030/echo/json/%7B%22prop%22:%22value%22%7D/1000/403)  
  Returns passed JSON `value` right after specified `delay` with a given status.

#### XML

- [/echo/xml](http://localhost:3030/echo/xml)  
  Returns empty XML response.
  
- [/echo/xml/:value](http://localhost:3030/echo/xml/%3Chey%20%2F%3E)
  Returns passed XML `value`.
  
- [/echo/xml/:value/:delay](http://localhost:3030/echo/xml/%3Chey%20%2F%3E/1000)
  Returns passed XML `value` right after specified `delay`.

- [/echo/xml/:value/:delay/:status](http://localhost:3030/echo/xml/%3Chey%20%2F%3E/1000/403)  
  Returns passed XML `value` right after specified `delay` with a given status.

#### HTML

- [/echo/html](http://localhost:3030/echo/html)  
  Returns empty HTML response.
  
- [/echo/html/:value](http://localhost:3030/echo/html/%3Cbutton%3Ehey%3C%2Fbutton%3E)  
  Returns passed HTML `value`.
  
- [/echo/html/:value/:delay](http://localhost:3030/echo/html/%3Cbutton%3Ehey%3C%2Fbutton%3E/1000)
  Returns passed HTML `value` right after specified `delay`.

- [/echo/html/:value/:delay/:status](http://localhost:3030/echo/html/%3Cbutton%3Ehey%3C%2Fbutton%3E/1000/403)  
  Returns passed HTML `value` right after specified `delay` with a given status.
