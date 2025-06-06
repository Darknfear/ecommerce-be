import dotenv from 'dotenv';
import path from 'path';

const envFile = `.env${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ''}`;
dotenv.config({ path: path.resolve(process.cwd(), envFile) });