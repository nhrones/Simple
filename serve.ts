
import { openWebsite, join, serveFile } from "./deps.ts";

import { folder, port } from './config.ts'


// Start the server -> routes all requests to the handler below
Deno.serve({ port: port }, handleRequest )

// Handle all HTTP requests
async function handleRequest(request: Request): Promise<Response> {

   // Get and adjust the requested path name
   let { pathname } = new URL(request.url);
   if (pathname === '/') pathname = '/index.html';
   // determin the requested full-path
   const fullPath = (folder.length > 0)
      ? join(Deno.cwd() + '\\' + folder + pathname)
      : join(Deno.cwd() + '.' + pathname);

   console.log(`Serving ${fullPath}`); // show what was requested
   // find the file -> get the content -> return it in a response
   const resp = await serveFile(request, fullPath)
   resp.headers.append("Cache-Control", "no-store")
   return resp  
}

// Trigger browser start
await openWebsite(`http://localhost:${port}`)
