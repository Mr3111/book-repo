# Book Repo
### This is a project to provide a fully functional book buying portal and also has payment gateway flow included
### The project can be run by either using Docker or using Node to run it in dev mode

#### The
****
# Prerequisites for Docker RUN
Use [Docker](https://docs.docker.com/get-docker/)
## DOCKER COMMANDS

To build and create a container to directly run using docker and just avoid using a IDE/ Code editor:  
`docker build -t book-repo .` (the . at end is required)  
`docker run --name rpg -p 3000:80 -d book-repo`
***

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


# Prerequisites for running using Node
Use [Node v12](https://nodejs.org/en/blog/release/v12.13.0/)

### `npm i`

To install required dependencies
***
### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

>The page will reload if you make edits.  
>You will also see any lint errors in the console.
***
