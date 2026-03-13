const fs = require('fs').promises;

const readDir = async () => {
    try {
        const files = await fs.readdir(__dirname);
        console.log(files);
    } catch (err) {
        console.error(err);
    }
};

readDir();
