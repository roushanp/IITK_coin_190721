const express = require('express');
const http = require('http');

const hostname = 'localhost';
const port = 8080;

const app = express();

const dict={"190721":23,"190722":24,"190723":25,"190724":26,"190725":27,"190726":28,"190727":29};

app.use(express.json());

app.route('/:coins')

.post((req,res)=>{
    const coins={
            coins : dict[req.body.rollno]
    }
    res.send(coins)
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});