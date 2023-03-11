export interface IConfig {
    port: number;
    MONGODB_URI: string;
    ENCRYPT_JWT_SECRET: string;
    JWT_SECRET: string;
    JWT_EXPIRATION: string;
  }
  
  interface DBConfig {
    host: string;
    port: number;
    user: string;
    password: string;
    dbName: string;
  }
  
  export default () => ({
    port: parseInt(process.env.PORT, 10) || 3333,
    MONGODB_URI: getMongoDBUri({
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT, 10) || 27017,
      user: process.env.MONGO_DB_USER || 'user',
      password: process.env.MONGO_DB_PASSWORD || 'password',
      dbName: process.env.MONGO_DB_NAME || 'coco',
    }),
    ENCRYPT_JWT_SECRET: process.env.ENCRYPT_JWT_SECRET || 'ENCRYPT_JWT_SECRET',
    JWT_SECRET: process.env.JWT_SECRET || 'JWT_SECRET',
    JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1h',
  });
  
  const getMongoDBUri = (dbConfig: DBConfig) => {
    const { user, password, host, port, dbName } = dbConfig;
    console.log(`mongodb://${user}:${password}@${host}:${port}/${dbName}`);
    return `mongodb://${user}:${password}@${host}:${port}/${dbName}`;
  };