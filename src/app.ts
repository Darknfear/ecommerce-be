import express from "express";
import { envs } from './config/env';
import {router} from "./routes";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes prefix
app.use('api', router)
app.listen(envs.PORT, () => {
    console.log(`Listening on ${envs.PORT}`);
})
