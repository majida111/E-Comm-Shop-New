const express=require('express');
const app = express();
const port=3000;
const cors=require('cors');
const DB=require('./db/config.js');
const categoryRoutes=require('./routes/category.js')
const brandRoutes=require('./routes/brand.js');
const productRoutes=require('./routes/product.js');
DB();

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send("Welcome");
})
app.use((req, res, next) => {
    req.url = req.url.trim(); // Remove any extra spaces or newlines
    next();
});

app.use("/category",categoryRoutes);
app.use("/brand",brandRoutes);
app.use("/products",productRoutes);
app.listen(port,()=>{
    console.log("Server listening on port",port);
    
});