import * as process from "process";

export default () => ({
    database: {
        dialect: process.env.DB_CONNECTION || 'postgres',
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT, 10) || 5432,
        username: process.env.DB_USERNAME || 'postgres',
        password: process.env.DB_PASSWORD || '12345',
        database: process.env.DB_DATABASE || 'domina',
    },
});
