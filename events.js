const EventEmitter = require('events');
const http = require('http');

const myEmitter = new EventEmitter();

class Events extends EventEmitter {
    constructor(){
        super();
    }
}

const myEmitter2 = new Events(); 

myEmitter.on('newSale',()=>{
    console.log('new Sale working');
});

myEmitter.on('newSale',()=>{
    console.log('new sale working 2');
});

myEmitter.on('newSale2',()=>{
    console.log('new sale working on newSale2');
});

myEmitter2.on('myemitterObject',()=>{
    console.log('myemitterObject Working by my emitter object');
});

myEmitter.emit('newSale');
myEmitter.emit('newSale2');
myEmitter2.emit('myemitterObject');

//? ///// SERVER SIDE EVENT STUFF ////////

const server = http.createServer(); 
//* Direk serveri oluşturup sonrasonda gelen requesleri tek tek dinleyip farklı faklı cevaplar dondurebiliriz
//* veya bir server objesi oluşturup sonrasında gelebilecek requestler icin ayrı ayrı senoryalar oluşturabiliriz


server.on('request' ,(req,res)=>{
    console.log('Request is request');
    //res.writeHead(200,{'Content-Type':'text/html'});
    res.end('server on request');
});

server.on('request' ,(req,res)=>{
    console.log('Request is request2');
    //res.writeHead(200,{'Content-Type':'text/html'});
    //res.end('server on request2');
});

server.on('close' ,()=>{
    console.log('Request is close');
    //res.writeHead(200,{'Content-Type':'text/html'});
    //res.end('server on close');
});


server.listen(8000,'127.0.0.1',()=>console.log('server is working on 8000 port number'));


