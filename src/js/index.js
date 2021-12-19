const db = require('./lib/db');
const server = require('./server.js');
  
  (async () => {
      try {
        await db.sync();
    
        const PORT = 8080;

        server.listen(PORT, () => {
          console.log(`Server is running on port ${PORT}`);
        });
      } catch (e) {
        throw e;
      }
  })();