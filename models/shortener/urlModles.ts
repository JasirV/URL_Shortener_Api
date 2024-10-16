import mongoose from "mongoose"
import shortid from 'shortid';
import { ShortUrl } from "../interface/shortUrl";

const urlSchema = new mongoose.Schema<ShortUrl>({
    full_Url:{
        type:String,
        required:true
    },
    short_url:{
        type:String,
        required:true,
        default:shortid.generate
    },
    createdAt: {
        type: Date,
        default: Date.now, 
      },
})



export default mongoose.model("Url", urlSchema);