const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
    // Set the response header content type
    res.setHeader('Content-Type', 'application/json');

    // Define GET endpoint
    if (req.method === 'GET' && req.url === '/getData') {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'This is a GET request' }));
    }

    // Define POST endpoint
    else if (req.method === 'POST' && req.url === '/postData') {
        let body = '';

        // Listen for data
        req.on('data', chunk => {
            body += chunk.toString();
        });

        // End of data
        req.on('end', () => {
            const parsedBody = JSON.parse(body);
            res.statusCode = 200;
            res.end(JSON.stringify({ message: 'Data received', data: parsedBody }));
        });
    }

    // Handle 404 - Not Found
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'Endpoint not found' }));
    }
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
