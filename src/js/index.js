const { sequelize } = require('./api/modObj');
const app = require('./api/app');
const routes = require('./routes');

for (const route of routes) {
    app[route.method](route.path, route.func);
}

(async () => {
  try {
        await sequelize.sync();
    
        const PORT = 8080;

        app.listen(PORT, () => {
          console.log(`Server is running on port ${PORT}`);
        });
      } catch (e) {
        throw e;
      }
})();