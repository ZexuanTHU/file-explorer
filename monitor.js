var fs = require('fs');

// obtain all files under watch
files = fs.readdirSync(process.cwd());
// watch *.js files
files.forEach(function (file) {
    if (/\.js/.test(file)) {
        fs.watchFile(process.cwd() + '/' + file, function () {
            console.log('   -   ' + file + ' changed!')
        })
    }
});

