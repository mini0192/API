const express = require('express');
const app = express();

port = 3000;

var cors = require('cors');
app.use(cors());


app.listen(port, () => {
    console.log( `Listening on port ${ port }` );
});

app.get('/user/:name', (req, res) => {
    const { name } = req.params;
    
    if(name == "dog") {
        res.send( {sound: "멍멍" } );
    } else {
        res.send( { sound: "none" } );
    };
});