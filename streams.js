const fs = require('fs');
const server =  require('http').createServer();

server.on('request',(req,res)=>{

    // //* SOLUTION ONE 
    // fs.readFile('largeTXT.txt',(err,data) =>{
    //     if(err != null ){
    //         console.log('There are an error about reading the file.');
    //     }
    //     res.end(data);
    // });


    // //* SOLUTION 2 STREAMS AND STREAM EVENTS 
    //! STREAMS EVENT COZUMUNDE EGER DOSYA BROWSERIN HANDLE EDEBİLECEGİNDEN HIZLI OKUNURSA BACK PRESSURE A
    //! ADINI VERDIGIMIZ SORUN MEYDANA GELEBILIR 
    // const readable = fs.createReadStream('largeTXT.txt');
    // readable.on('data',(chunk) => {
    //     console.log('there are not any error something disgusting'); 
    //     //! res.end(chunk);
    //     res.write(chunk);
    // });
    // readable.on('end',()=>{
    //     console.log('event is end ');
    // });
    // readable.on('error',(error) => {
    //     console.log(`thre are some error like ${error}`);
    //     res.statusCode = 500;
    //     res.end(error.join(''));
    // })


    //* SOLUTION THREE
    //* PIPE METHODU ILE YAPILAN COZUM BACK PRESSURE E SEBEP OLMAZ UYGULANABILECEK EN IYI COZUMDUR
    const readable = fs.createReadStream('largeTXT.txt');
    readable.pipe(res);
    //* readableSource.pipe(writableDestimation);
    
});

server.listen(8000,'127.0.0.1');





