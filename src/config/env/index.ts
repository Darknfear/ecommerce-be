import './env.config';
import env from './schema-env.config';

export const envs:  Record<string, string | number> & { isDev: boolean; isProd: boolean } = {
    ...env,
    isDev: env.NODE_ENV === 'development',
    isProd: env.NODE_ENV === 'production',
};
