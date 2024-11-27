const express=require('express');
const app = express();
const port=3000;
const cors=require('cors');
const DB=require('./db/config.js');
const categoryRoutes=require('./routes/category.js')
const productsRoutes=require('./routes/products.js')
DB();

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send("Welcome");
})

app.use("/category",categoryRoutes);
app.use("/products",productsRoutes);
app.listen(port,()=>{
    console.log("Server listening on port",port);
    
});