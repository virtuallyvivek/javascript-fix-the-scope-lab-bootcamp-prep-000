var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal(animal) {
  return "animal"
}

function add2(n) {
  const two = 2
  return parseInt(two) + 2
}

function funkyFunction() {
  return function inner() {
    return "FUNKY"
  }
}

var theFunk = funkyFunction()

theFunk()
 