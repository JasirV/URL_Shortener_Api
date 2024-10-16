import express, { Router } from 'express';
import { controllers } from '../controller/shortUrlController';

const urlRouters: Router = express.Router();

urlRouters.get('/', controllers.getUrls)
    .post('/', controllers.postUrl)
    .get('/:url',controllers.urlRedirect)

export default urlRouters;