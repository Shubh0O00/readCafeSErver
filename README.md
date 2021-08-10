# Read Cafe Server
A server to connect read_cafe website to database at mongodb atlas    

## Description
This is nodejs project to create a backend that connects with cluster in mongodb atlas  
Using mongoose to connect with mongodb atlast and create models for the data to GET or POST  
Using Express.js to create routes and handle the GET and POST requests.  

## Getting Started

### Dependencies
- nodejs v14.x+
- mongosh
- npm

### Installing
- Create a folder to clone the project
- Clone the project in the folder
- run npm init && npm install
- Create a .env file in the project folder 
    - Add this line => CONNECTION_URL = 'Enter the connection url from the mongodb database named readWriteDatabase OR change the name in the index.js file'

### Executing program
- Ensure the connection url is correct in .env file and set the desired port in index.js
- Run the program by:
  - ```npm start ```

## Help
- If start does not work, try running ```node index.js```
  - If this helps, it means that nodemon is not installed.
  - Try running ```npm install``` once again.

## Authors

Shubham Pandit  
- [shubhampandit00](https://www.linkedin.com/in/shubhampandit00/)

## Acknowledgments

Inspiration, code snippets, etc.
* [awesome-readme](https://github.com/matiassingers/awesome-readme)
* [JavaScript Mastery](https://youtu.be/ngc9gnGgUdA?list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu)
