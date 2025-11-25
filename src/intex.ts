import dotenv from 'dotenv';
import path from 'path';
dotenv.config({path:path.join(process.cwd(), ".env")});

const config ={
        env: process.env.MODE_ENV ? Number(process.env.MODE_ENV) : 5000,
        port: process.env.PORT 
}

export default config;