
const http = require("http");



const host = "localhost";


const port = process.env.PORT || 3000;

const web = http.createServer((req, res) => {
    res.end("This is a tutorial about NodeJS");
});


web.listen(port, () => {
    console.log("http://localhost:" + port);
});