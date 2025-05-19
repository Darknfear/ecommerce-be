import Joi from 'joi';

export interface EnvVars {
    NODE_ENV: 'development' | 'production' | 'staging';
    PORT: number;
    DB_URL: string;
    API_KEY: string;
    [key: string]: string | number;
}

const envSchema = Joi.object<EnvVars>({
    NODE_ENV: Joi.string().valid('development', 'production', 'staging').default('development'),
    PORT: Joi.number().default(3000),
    DB_URL: Joi.string().required(),
    API_KEY: Joi.string().required(),
}).unknown();

const { value: envVars, error } = envSchema.validate(process.env, {
    abortEarly: false,
});

if (error) {
    throw new Error(`❌ Env validation error:\n${error.message}`);
}

export default envVars;
