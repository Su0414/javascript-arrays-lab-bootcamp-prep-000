const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  var newArr = kittens;
  newArr.push(name);
  return newArr;
}

function destructivelyPrependKitten(name){
  var newArr = kittens;
  newArr.unshift(name);
  return newArr;
}


function destructivelyRemoveLastKitten(){
  var newArr = kittens;
  newArr.pop();
  return newArr;
}



