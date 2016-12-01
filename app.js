var ImageToAscii = require('image-to-ascii');
ImageToAscii(__dirname + '/ss.png', function (err, converted) {
    console.log(err || converted);
});
