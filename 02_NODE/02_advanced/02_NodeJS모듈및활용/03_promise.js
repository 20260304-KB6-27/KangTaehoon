// const fs = require('fs').promises;
const fs = require('fs/promises');

fs.readdir(__dirname)
    .then((dirs) => console.log(dirs))
    .catch((err) => console.error(err));
