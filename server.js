const app = require('./app')
const { syncAndSeed } = require('./db/index')

const port = process.env.PORT || 3000;

syncAndSeed()
.then(() => app.listen(port, () => console.log(`listening on port ${port}`)))
