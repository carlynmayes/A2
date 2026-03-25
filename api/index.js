
const http = require('http');
const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    const filePath = path.join(process.cwd(), 'db.json');

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Server Error' }));
            return;
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(content);

    });

};