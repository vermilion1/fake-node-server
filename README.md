Fake Server
===========


The server with a set of endpoints that could be used for test purposes.  
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

- [/echo/:json](http://localhost:3030/echo/%7B%22prop%22:%22value%22%7D)  
  Returns passed JSON. Example:  
    
        fetch('http://localhost:3030/echo/' + encodeURIComponent(JSON.stringify({prop: 'value'})))
          .then(function (response) { return response.json(); })
          .then(function (data) { console.log(data); }) // prints {prop: 'value'}
