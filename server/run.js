require('dotenv').config();
const {app} = require('./app')
const {db} = require('./src/db/config')
const PORT = process.env.PORT || 3000;

async function init() {
    db.sync()
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
      }) 
}

init();