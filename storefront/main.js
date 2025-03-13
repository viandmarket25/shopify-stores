const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

// MIME types for different file extensions
const mimeTypes = {
  '.bmp': 'image/bmp',
  '.webp': 'image/webp',
  '.tiff': 'image/tiff',
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

console.log('dir\n',__dirname)
/*
let files = fs.readdirSync(__dirname, {withFileTypes: true})
.map(item => item.name)
console.log('root dir: >>>',files)
let webF = fs.readdirSync(__dirname+'/web', {withFileTypes: true})
.map(item => item.name)
console.log('web dir: >>>',webF)
let distF = fs.readdirSync(__dirname+'/web/dist', {withFileTypes: true})
.map(item => item.name)

console.log('dist dir: >>>',distF)
*/

let webpage ='';
let resourceBytes ={ }

const setWebpage = async ( filePath ) =>{
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.log('Error :\n', err);
    } else {
      webpage = data;
    }
  });
}

  const serveFile = (pathname, ext, res) => {
   //console.time('⏰ >>')
    const filePath = pathname;
    if( ext === '.html'){
      console.log('serving webpage ...')
      //console.log( 'webpage: ',webpage )
      res.writeHead(200, { "Content-Type": mimeTypes[ext] });
      res.end(webpage);
    }else{
  
      // :::::::: check if file is in memory,
      // :::::::: if its in memory, load it else get from disk and load into memory
      let resourceKey = filePath.split('/').join('::')
      if( typeof resourceBytes[resourceKey] !=='undefined' ){
        // :::::::: load from memory
        //console.log('\nresource exist ✅')
        res.writeHead(200, { "Content-Type": mimeTypes[ext] });
        res.end( resourceBytes[resourceKey] );
  
      }else{
        //console.log('\nresource does not exist ❗️ ')
        // :::::::: load from disk
        //console.log('request resourse: path > ',filePath)
        fs.readFile(filePath, (err, data) => {
          if (err) {
            console.log(err);
            // If the file is not found, return a 404 error
            if (err.code === "ENOENT") {
              fs.readFile(path.join(__dirname, "404.html"), (err, data) => {
                if (err) {
                  res.writeHead(500, { "Content-Type": "text/plain" });
                  res.end("Internal Server Error");
                } else {
                  res.writeHead(404, { "Content-Type": "text/html" });
                  res.end(data);
                }
              });
            } else {
              res.writeHead(500, { "Content-Type": "text/plain" });
              res.end("Internal Server Error");
            }
          } else {
            // If the file is found, set the appropriate MIME type and serve it
            res.writeHead(200, { "Content-Type": mimeTypes[ext] });
            res.end(data);
            resourceBytes[resourceKey] = data
          }
        });
        // :::::::: add resource to memory
      }
    }
  
    //console.timeEnd('⏰ >>')
    //console.log(pathname)
  
  };
  
  


// Create a server
const server = http.createServer((req, res) => {
  // Parse the request URL
  const parsedUrl = url.parse(req.url, true);
  // Get the path of the requested URL
  let pathname = parsedUrl.pathname;
  //console.log('url: ',parsedUrl)
  let ext = path.parse(pathname).ext;

  let pathPrefix = __dirname+'/web/dist'
  //console.log (pathPrefix + pathname, '\next: ', ext,'\n')

  // Check the requested URL and serve appropriate content
  if (pathname === '/') {
    // Serve landing page
    serveFile ( pathPrefix + '/index.html', '.html',  res ) ;
    
  } else if (pathname === '/admin') {
    // Serve admin page
    //serveFile ( 'frontend/dist/index.html', ext,  res ) ;

  } else if (pathname.startsWith('/api')) {
    // Handle API requests
    
  } else {
    // Handle other paths
    switch (ext){
        case '.ico':
            ext = '.ico'
            serveFile ( pathPrefix + pathname, ext,  res ) ;
            break;
        case '.json':
            ext = '.json'
            serveFile ( pathPrefix + pathname, ext,  res ) ;
            break;
        case '.otf':
            ext = '.otf'
            serveFile ( pathPrefix + pathname, ext,  res ) ;
            break;
        case '.woff':
            ext = '.woff2'
            serveFile ( pathPrefix + pathname, ext,  res ) ;
            break;
        case '.gif':
            ext = '.gif'
            serveFile ( pathPrefix + pathname, ext,  res ) ;
            break;
        case '.ttf':
            ext = '.ttf'
            serveFile ( pathPrefix + pathname, ext,  res ) ;
            break;
        case '.jpg':
            ext = '.jpg'
            serveFile ( pathPrefix + pathname, ext,  res ) ;
            break;
        case '.png':
            ext = '.png'
            serveFile ( pathPrefix + pathname, ext,  res ) ;
            break;
        case '.css':
            ext = '.css'
            serveFile ( pathPrefix + pathname, ext,  res ) ;
            break;
        case '':
            console.log('possible html fille detected !', pathname )
            ext = '.html'
            pathname = 'index.html'

            // ::::::::::::: handle unknown routes for not found
            serveFile ( pathPrefix + pathname, ext,  res ) ;
            break;
        case '.js':
            ext = '.js'
            serveFile ( pathPrefix + pathname, ext,  res ) ;
            break;
        default:
            console.log('asset path not being handled!')
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
const PORT = process.env.PORT || 3005;

( async ()=>{
  await setWebpage( __dirname + "/web/dist/index.html" )
})()


// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
