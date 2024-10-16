import { Request, Response } from "express";
import { CustomError } from "../utils/customError";
import urlSchema from '../models/shortener/urlModles'; 

// Fetch all URLs
const getUrls = async (req: Request, res: Response): Promise<void> => {
    try {
        const shortUrlLinks = await urlSchema.find().sort({ createdAt: -1 });;
        if (!shortUrlLinks || shortUrlLinks.length === 0) {
            res.status(404).json({ message: "No URLs found" });
            return;
        }
        res.status(200).json(shortUrlLinks);
    } catch (error) {
        console.error(error); 
        const customError = new CustomError('This is a custom error', 500); 
        res.status(customError.statusCode).json({ message: customError.message });
    }
};

const postUrl = async (req: Request, res: Response): Promise<void> => {
    try {
        const { full_Url }: { full_Url: string } = req.body; 
        if (!full_Url) {
            const customError = new CustomError("Invalid input", 400);
            res.status(customError.statusCode).json({ message: customError.message });
            return;
        }

        const newUrl = await urlSchema.create({ full_Url });
        const newUrlWithVirtuals = newUrl.toObject({ virtuals: true });
        res.status(201).json(newUrlWithVirtuals);
    } catch (error) {
        console.error(error); 
        const customError = new CustomError('This is a custom error', 500); 
        res.status(customError.statusCode).json({ message: customError.message });
    }
};

const urlRedirect = async (req: Request, res: Response): Promise<void> => {
    try {
        const { url } = req.params;
        if (!url) {
            const customError = new CustomError('URL parameter is required', 404);
            res.status(customError.statusCode).json({ message: customError.message });
            return;
        }

        const shortUrl = await urlSchema.findOne({ short_url: url });
        if (!shortUrl) {
            res.status(404).json({ message: "Invalid URL" });
            return;
        }
        res.redirect(shortUrl.full_Url);
    } catch (error) {
        const customError = new CustomError("This is a custom error", 500);
        res.status(customError.statusCode).json({ message: customError.message });
    }
};

export const controllers = {
    getUrls,
    postUrl,
    urlRedirect
};
