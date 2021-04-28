import {connect} from 'mongoose'
import * as cors from 'cors'
import * as dotenv from "dotenv";
import {customerRouter} from "./db/routers/customerRouter";
import {orderRouter} from "./db/routers/orderRouter";
import {productRouter} from "./db/routers/productRouter";
import * as express from 'express'

dotenv.config()

var corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET', 'PUT', 'POST', 'DELETE']
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