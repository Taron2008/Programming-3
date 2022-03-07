var fs = require('fs');

var statistics = {};


setInterval(function () {
   statistics.grass = grassArr.length;
   statistics.grassEater = grassEaterArr.length;
   fs.writeFile("statistics.json", JSON.stringify(statistics), function () {
      console.log(grassArr.length);
      console.log(grassEaterArr.length);
   })
}, 1000);