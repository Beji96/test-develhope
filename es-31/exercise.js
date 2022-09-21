function sayHelloName(second) {
  console.log("Hello");
  second();
}
function printName() {
  console.log("Flavius");
}
sayHelloName(printName);
