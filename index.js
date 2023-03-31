// require('./hulk')
// require('./thor')

// const { buffer } = require("stream/consumers");

// const superHero = require('./super-hero')
// console.log(superHero.getName())
// superHero.setName('Super Man')
// console.log(superHero.getName())

// const newSuperHero = require('./super-hero')
// console.log(newSuperHero.getName());

// const math = require('./math');

//  const {add,subt} = math; // destructuring

// console.log(add(8,3));
// console.log(subt(8,3));


// const data = require('./data.json');


// console.log(data);
// const path = require("node:path");

// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));


// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));

// console.log(path.parse(__filename))

// console.log(path.format(path.parse(__filename)))

// console.log(path.isAbsolute(__filename))
// console.log(path.isAbsolute("./data.json"))


// console.log(path.join("folder1","folder2","index.html"));
// console.log(path.join("/folder1","folder2","index.html"));
// console.log(path.join("//folder1","folder2","index.html"));
// console.log(path.join("/folder1","folder2","../index.html"));


// console.log(path.resolve("folder1","folder2","index.html"));
// console.log(path.resolve("/folder1","folder2","index.html"));
// console.log(path.resolve("//folder1","folder2","index.html"));
// console.log(path.resolve("/folder1","folder2","../index.html"));

// console.log(path.join(__dirname, "data.json"));


//callback function

// function greet(name){
//     console.log(`Hello ${name}`)
// }

// function greetOsama(greetfn){
//         const name = 'Osama Younus'
//         greetfn(name)
// }

// greetOsama(greet);


// const  EventEmitter = require("node:events");

// const emitter = new EventEmitter();
// emitter.on("Ordered Pizza!!",()=>{
//     console.log(`Order recieved Baking Pizza`)
// })

// emitter.emit("Ordered Pizza!!");
// console.log(emitter);


// const PizzaShop = require('./pizza-shop')

// const pizzaShop = new PizzaShop();

// pizzaShop.orderNumber();
// pizzaShop.displayOrderNumber();


// const buffer = new Buffer.from("Osama");

// buffer.write("saloom")

// console.log(buffer);
// console.log(buffer.toString());
// console.log(buffer.toJSON());

// const fs = require('node:fs');
// const fileSystem = fs.readFileSync("./file.txt","utf-8");
// console.log(fileSystem);

// fs.readFile("./file.txt","utf-8",(error,data) =>{
//         if(error){
//             console.log(error);
//         }
//         else{
//             console.log(data);
//         }
// })


// fs.writeFileSync("./greet.txt","Assalamualaikum")


// fs.writeFile("./greet.txt","Hello Osama",{ flag: "a" },(error)=>{
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log("Walaikumsalam")
//     }
// })




//http module 

//creating node server 

const http = require("node:http");

const server =  http.createServer((req,res)=>{
            res.writeHead(200, {"content-type": "text/plain" });
            res.end("Shambe");
})

        server.listen(3000, ()=>{
            console.log("Server running on port 3000")
        })
// console.log(http)