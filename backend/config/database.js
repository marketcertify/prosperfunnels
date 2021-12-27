module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host : env('DATABASE_HOST', 'fiverblog.s414a.mongodb.net'),
        srv: env('DATABASE_SRV', true),
        port: env('DATABASE_PORT', 27017),
        database : env('DATABASE_NAME', 'fiverBlog6'),
        username: env('DATABASE_USER', 'vedpratapsingh'),
        password: env('DATABASE_PASSWORD', 'narayanji100'),
        uri : env("DATABASE_URI", 'mongodb://vedpratapsingh:narayanji100@fiverblog6-shard-00-00.s414a.mongodb.net:27017,fiverblog-shard-00-01.s414a.mongodb.net:27017,fiverblog-shard-00-02.s414a.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-qbidh7-shard-0&authSource=admin&retryWrites=true&w=majority')
      },
      options: {
        authenticationDatabase: env('AUTH_DATABASE', null),
        ssl: true
      },
    },
  },
});
