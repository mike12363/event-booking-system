const fs = require("fs");
const path = require("path");

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question(`Enter your text (press enter when done) : `, function(content){
    rl.question(`Enter the name of file: `, function(fileName){
        fs.writeFile(
            path.join(__dirname, `/${fileName}.txt`),
            content,
            function(err){
                if(err){
                    console.log("There has been an error!");
                    return;
                }
            }
        );
        rl.close();
    });
    });