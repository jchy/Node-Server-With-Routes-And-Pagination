const http = require('http');
const { getAllUsers, getUser, addUser, getUserDetails } = require('./app/api/users/');

const server = http.createServer((req, res) => {
        try{
            console.log(req.method ,req.url);
            const link = req.url;
            console.log(link)
            if(link.startsWith('/users/id') ){
                const [url, query] = req.url.split("/id:");
                if(req.method === 'GET'){
                    // const q = new URLSearchParams(`/id:${query}`);
                    console.log(req.method ,req.url)
                    // const id = req.url ?? 1;
                    const [link,id] = req.url.split(":");
                    res.writeHead(201, {'Content-Type' : 'application/json'});
                    res.end(JSON.stringify(getUserDetails(Number(id))));
                }
            }
            else if(link.startsWith('/users') ){
                const [url, query] = req.url.split("?");
                console.log(query,"query");
                if(req.method === 'GET'){
                    const q = new URLSearchParams(`?${query}`);
                    console.log(q)
                    const page = q.get('page') ?? 1;
                    res.writeHead(201, {'Content-Type' : 'application/json'});
                    res.end(JSON.stringify(getAllUsers(Number(page))));
                }
                else if(req.method === 'POST'){
                    console.log(url, query);
                    const q = new URLSearchParams(`?${query}`);
                    const name = q.get('name');
                    addUser(name);
                    console.log(q.get("name"), "is added to the database");
                    res.writeHead(201, {'Content-Type' : 'application/json'});
                    res.end(JSON.stringify(getAllUsers()));
                }
            }
            else if(url.startsWith('/users/')){
                const index = Number(url.split('/')[2]);
                req.writeHead(201, {'Content-Type' : 'application/json'});
                res.end(JSON.stringify(getUser(index)))
            }
            else{
                throw new Error('Din not understand your query')
            }
        }
        catch(err){
            res.writeHead(500,{'Content-Type' : 'application/json'});
            res.end(JSON.stringify({
                data : 'Error, '+ err.message
            }));
        }
})

// our server is listening on port 3001 we can change it
server.listen(3000,()=>{
    console.log('listening on port 3000');
})
