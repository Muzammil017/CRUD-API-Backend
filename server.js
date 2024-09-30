import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoute from "./routes/user-route.js";

// Routes
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
// import customerRoutes from './routes/customerRoutes.js';
import paymentRoutes from "./routes/payment-routes.js";
import cartRoutes from "./routes/cartRoutes.js";
import path  from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
//for connection
app.use(cors());
//for json data
app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/upload', express.static(path.join(__dirname, 'upload')));


// Routes


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", userRoute);
app.use("/", productRoutes);
app.use("/", categoryRoutes);
app.use("/", paymentRoutes);
app.use("/", cartRoutes);


const port = process.env.PORT || 3000;
connectDB();

app.listen(port, () => {
  console.log("server created");
});
