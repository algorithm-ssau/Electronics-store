import {connect} from 'mongoose'
import * as cors from 'cors'
import * as dotenv from "dotenv";
import {customerRouter} from "./db/routers/customerRouter";
import {orderRouter} from "./db/routers/orderRouter";
import {productRouter} from "./db/routers/productRouter";
import * as express from 'express'

process.title = "EStoreServer";

dotenv.config()

const corsOptions = {
    origin: [
      "http://localhost", // localhost
      "http://localhost:3000", // localhost
      "http://localhost:8080", // localhost
      "http://127.0.0.1:3000", // localhost external
      "http://127.0.0.1:8080", // localhost external
      "http://34.134.114.154:3000", // google cloud
      "http://34.134.114.154:8080", // google cloud
      "http://estore.mywire.org:3000", // mywire
      "http://estore.mywire.org:8080", // mywire
    ],
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    headers: {
        "Access-Control-Allow-Origin": "*",
    }
}

const app = express()
app.use(express.json())
app.use(cors(corsOptions))


const URI= process.env.MONGODB_URL
connect(URI,{
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err=>{
    if(err) throw err;
    console.log('Connected to MongoDB')
})

app.use("/api",customerRouter)
app.use("/api",orderRouter)
app.use("/api",productRouter)

const PORT= process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log('Server is running on port',PORT)
})