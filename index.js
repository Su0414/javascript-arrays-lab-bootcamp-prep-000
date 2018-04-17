const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  var newArr = kittens;
  newArr.push(name);
  return newArr;
}



