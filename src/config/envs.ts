import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  //DATABASE_URL: string;
  HOST_PRODUCT_MS: string;
  PORT_PRODUCT_MS: number;
}

const envSchema = joi
  .object({
    PORT: joi.number().required(),
    //DATABASE_URL: joi.string().required(),
    HOST_PRODUCT_MS: joi.string().required(),
    PORT_PRODUCT_MS: joi.number().required(),
  })
  .unknown(true);

const { error, value } = envSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  //databaseUrl: envVars.DATABASE_URL,
  hostProductMs: envVars.HOST_PRODUCT_MS,
  portProductMs: envVars.PORT_PRODUCT_MS,
};
