'use strict';

var fs = require('fs');
var path = require('path');
var petsPath = path.join(__dirname, 'pets.json');

var node = path.basename(process.argv[0]);
var file = path.basename(process.argv[1]);
var cmd = process.argv[2];

if (cmd === 'read') {
fs.readFile(petsPath, 'utf8', function(err, data) {
  var pets = JSON.parse(data);
  var index = process.argv[3];
  if (err) {
    throw err;
  } if (index === undefined) {
    console.log(pets);
  } else if (index !== undefined) {
    if (pets[index] === undefined) {
      console.error(`Usage: ${node} ${file} read INDEX`);
      process.exit(1);
    } else {
      console.log(pets[index]);
    }
  }
  });
}
else if (cmd === 'create') {
fs.readFile(petsPath, 'utf8', function(readErr, data) {
  var pets = JSON.parse(data);
  var ageValue = parseInt(process.argv[3]);
  var kindValue = process.argv[4];
  var nameValue = process.argv[5];
  var newPet = {age: ageValue, kind: kindValue, name: nameValue};
  if (readErr) {
    throw readErr;
  } else if (!ageValue || !kindValue || !nameValue) {
    console.error(`Usage: ${node} ${file} create AGE KIND NAME`);
    process.exit(1);
  } else if (ageValue === isNaN) {
    console.error(`Usage: ${node} ${file} create AGE KIND NAME`);
    process.exit(1);
  } else {
    pets.push(newPet);
  }
    var petsJSON = JSON.stringify(pets);
    fs.writeFile(petsPath, petsJSON, function(writeErr) {
      if (writeErr) {
        throw writeErr;
      } else {
        console.log(newPet);
      }
    });
});
}
else {
  console.error(`Usage: ${node} ${file} [read | create | update | destroy]`);
  process.exit(1);
}
