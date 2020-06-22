var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal(animal) {
  return "cat"
}

function add2() {
  const two = 2
  return two + 2
}

function funkyFunction() {
  return function inner() {
    return "FUNKY"
  }
}

var theFunk = funkyFunction()

theFunk()
 