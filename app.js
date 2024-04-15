const express=require("express");
const app=express();

const PORT=process.env.PORT || 3434;

const product_routes=require("./routs/products")

app.get("/",(req,res)=>{
    res.send("The server is up and live")
});

app.use('/api/products',product_routes)

const start = async()=>{

    try {
        app.listen(PORT,()=>{
            console.log(`Server is running on ${PORT} ... `)
        })
    } catch (error) {
        console.log(error)
    }
}

start();