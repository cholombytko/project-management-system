const { sequelize } = require('./api/modObj');
const app = require('./api/app');
const routes = require('./routes');

for (const route of routes) {
    app[route.method](route.path, route.func);
}

(async () => {
  await sequelize.sync({ force: false });

  const PORT = 8080;

  app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
  });
})();