var swaggerconf = {
  swaggerOptions: {
    swaggerDefinition: {
      info: {
        title: 'SEGMENTACION SANITARIA',
        version: '0.0.1',
        decription: 'Segmentación de clientes'
      },
      host: 'http://localhost:3000',
      basePath: '/'
    },
    apis: ['./routes/*.js', './models/*.js', './routes/**/*.js']
  }
};

module.exports = swaggerconf;
