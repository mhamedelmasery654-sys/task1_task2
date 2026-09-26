const http = require('http');

const server = http.createServer((req, res) => 
    
    
    
    
    {

    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/' && req.method === 'GET') 
        
        
        
        {

        res.statusCode = 200;
        res.end(JSON.stringify({ 
            message: "Welcome to Home Page" 
        }));

    } 
    
    else if (req.url === '/users' && req.method === 'GET') 
        
        
        
        {

        const users = [
            { id: 1, name: 'John Doe' },
            { id: 2, name: 'Jane Smith' }
        ];

        res.statusCode = 200;
        res.end(JSON.stringify(users));

    } 
    
    else if (req.url === '/products' && req.method === 'GET') 
        
        
        
        {

        const products = [
            { id: 101, name: 'Laptop', price: 1000 },
            { id: 102, name: 'Mouse', price: 20 }
        ];

        res.statusCode = 200;
        res.end(JSON.stringify(products));

    } 
    
    else if (req.url === '/add-data' && req.method === 'POST') 
        
        
        
        {

        let body = '';

        req.on('data', (chunk) => 
            
            
            {

            body = body + chunk.toString();

        });

        req.on('end', () => 
            
            
            {

            const data = JSON.parse(body);

            res.statusCode = 201;
            res.end(JSON.stringify({
                message: "Data received and stored successfully",
                savedData: data
            }));

        });

    } 
    
    else 
        
        
        {

        res.statusCode = 404;
        res.end(JSON.stringify({ 
            error: "Page not found" 
        }));

    }

});

const PORT = 3000;

server.listen(PORT, () => 
    
    
    
    {

    console.log(`Server is running on http://localhost:${PORT}`);

});

