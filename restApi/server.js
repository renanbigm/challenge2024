const app = require('./app');
const port = 3006;

app.listen(port, () => {
  console.log(`Server on in: http://localhost:${port}`);
});
