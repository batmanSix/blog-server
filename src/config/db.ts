
// 线上数据库配置
const productConfig = {
  mysql: {
    type: 'mysql',
    port: '3306',
    host: 'localhost',
    user: 'root',
    password: 'Kang@841331654',
    database: 'nestapi', // 库名
    connectionLimit: 10, // 连接限制
  },
};


// 本地开发环境配置
const localConfig = {
  mysql: {
    port: '3306',
    host: 'localhost',
    user: 'root',
    password: 'Kang@841331654',
    database: 'nestapi', // 库名
    connectionLimit: 10, // 连接限制
  },
};

// 本地运行是没有 process.env.NODE_ENV 的，借此来区分[开发环境]和[生产环境]
const config = process.env.NODE_ENV ? productConfig : localConfig;

export default config;