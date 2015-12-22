Fake Server
===========

The server with a set of endpoints that could be used for test purposes.  
Feel free to add endpoints for your needs.

Endpoints
---------

- [/delay](http://localhost:3030/delay)  
  Requested resource will fail within some time due to timeout error.  
    
- [/delay/:amount](http://localhost:3030/delay/1000)  
  Requested resource will be returned in JSON format right after passed `amount` of milliseconds. 
