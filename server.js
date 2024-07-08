const net=require('net')
const Parser= require('redis-parser')

const storage={}
const server=net.createServer(conn=>{

    console.log("Welcome to Redis Server")
    
    conn.on('data',data=>{
        console.log("data")
        const parser=new Parser({
            returnReply:(reply)=>{
                const com= reply[0].toUpperCase();
                switch(com){
                    case'PING':{
                        const val='pong';
                        conn.write(`$${val.length}\r\n${val}\r\n`)
                        break;
                    }
                    case 'ECHO':{
                        const val=reply[1]
                        console.log("val",val)
                        conn.write(`$${val.length}\r\n${val}\r\n`)
                        break;

                    }
                    case'SET':{
                        const key= reply[1];
                        const val=reply[2];
                        storage[key]=val;
                        conn.write('+OK\r\n')
                        break;

                    }
                    case 'GET':{
                        const key=reply[1];
                        const val=storage[key]
                        if(!val){
                            conn.write('$-1\n\r')
                        }else{
                            conn.write(`$${val.length}\r\n${val}\r\n`)
                        }
                        break;
                    }
                }
                console.log('=>',reply)
            },
            returnError:(err)=>{
                console.log('=>',err)
            }
        })
        parser.execute(data)
       
    })

})

server.listen(8080,()=>console.log("This is redis on port 8080"))