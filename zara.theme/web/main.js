const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');


// MIME types for different file extensions
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'application/font-woff',
  '.woff2': 'application/font-woff2',
  '.ttf': 'application/font-sfnt',
  '.otf': 'application/font-sfnt',
  '.eot': 'application/vnd.ms-fontobject'
  // Add more MIME types as needed
};

const serveFile = (pathname, ext, res) => {
   // const filePath = path.join(__dirname, 'frontend', 'dist', pathname);
    
   console.log('serving:::: \npath: ',pathname,'ext:', ext)

    const filePath = pathname
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.log(err)
        // If the file is not found, return a 404 error
        if (err.code === 'ENOENT') {
          fs.readFile(path.join(__dirname, '404.html'), (err, data) => {
            if (err) {
              res.writeHead(500, { 'Content-Type': 'text/plain' });
              res.end('Internal Server Error');
            } else {
              res.writeHead(404, { 'Content-Type': 'text/html' });
              res.end(data);
            }
          });
        } else {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
        }
      } else {
        // If the file is found, set the appropriate MIME type and serve it
        res.writeHead(200, { 'Content-Type': mimeTypes[ext] });
        res.end(data);
      }
    });
  };

  


// Create a server
const server = http.createServer((req, res) => {
  // Parse the request URL
  const parsedUrl = url.parse(req.url, true);
  // Get the path of the requested URL
  let pathname = parsedUrl.pathname;
  //console.log('url: ',parsedUrl)
  let ext = path.parse(pathname).ext;

  let pathPrefix = 'frontend/dist/'
  console.log (pathPrefix + pathname, '\next: ', ext )
  // Check the requested URL and serve appropriate content
  if (pathname === '/') {
    // Serve landing page
    serveFile ( pathPrefix + 'index.html', '.html',  res ) ;
    

  } else if (pathname === '/admin') {
    // Serve admin page
    //serveFile ( 'frontend/dist/index.html', ext,  res ) ;

  } else if (pathname.startsWith('/api')) {
    // Handle API requests
    
    
  } else {
    // Handle other paths

    switch (ext){
        case '.css':
            ext = '.css'
            serveFile ( pathPrefix + pathname, ext,  res ) ;
            break;
        case '':
            ext = '.html'
            pathname = 'index.html'
            break;
        case '.js':
            ext = '.js'
            serveFile ( pathPrefix + pathname, ext,  res ) ;
            break;
        default:
            console.log('asset path path not being handled!')
            // ::::::::: not found
            fs.readFile('404.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
            });

            break;
    }
    
    


  }
});

// Define the port to listen on
const PORT = process.env.PORT || 3000;

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
