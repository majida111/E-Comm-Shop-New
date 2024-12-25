const express=require('express');
const app = express();
const port=3000;
const cors=require('cors');
const DB=require('./db/config.js');
const categoryRoutes=require('./routes/category.js')
const brandRoutes=require('./routes/brand.js');
const productRoutes=require('./routes/product.js');
const customerRoutes=require('./routes/customer.js');
const authRoutes=require('./routes/auth.js');
const { verifyToken,isAdmin } = require('./middleware/auth-middleware.js');
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

app.use("/category",verifyToken,isAdmin, categoryRoutes);
app.use("/brand",verifyToken,isAdmin, brandRoutes);
app.use("/products",verifyToken,isAdmin, productRoutes);
app.use("/customer",verifyToken, customerRoutes);
app.use("/auth",authRoutes);
app.listen(port,()=>{
    console.log("Server listening on port",port);
    
});