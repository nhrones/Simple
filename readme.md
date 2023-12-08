
# Simple Deno Server Example

Used as a dev tool for running static html sites.     

This simple html server will serve an index.html file and any requests that it generates (style.css, app.js, ...).
It will automaticaly launch your default browser with the index.html content.

## Usage

This simple server will server index.html and files it requests.

## You could also run the server from Github
Open any folder in vscode that contains an `index.html` file.     
Then, in the vscode terminal, enter or (copy-paste) the following: 
```
deno run -A --unstable https://raw.githubusercontent.com/nhrones/SimpleServer/master/mod.ts
```
Your browser will open and display index.html at `http://localhost:8000`

Or, if you installed locally as detailed below, simply enter `serve` on the commandline.

## commandline options:

Assuming you've installed locally (`see below`) as `serve`:    

arg[0] = port number or target folder    
if arg[0] is target folder, port number defaults to 80
```
// use port 8080
serve 8080
// serve the folder named `public`
serve public
```
arg[1] = target folder (if arg[0] is port number)
```
// serve the folder named `public` from port 8080
serve 8080 public
```
`
## Install a local copy
Copy the command below, then paste it in any commandline, and press enter. 
```
deno install --allow-net --allow-read --allow-run -f -n serve https://raw.githubusercontent.com/nhrones/SimpleServer/master/mod.ts

```
This will install a command file locally in the .deno folder.
You then simply type `serve` on the commandline in a folder with an index.html file.