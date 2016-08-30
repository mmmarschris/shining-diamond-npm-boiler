function* martianRocks() {
  yield "Martian is Dope";
  yield "Martian says JavaScript is all that";
  return "because JavaScript really is all that";
}

var jsMartian = martianRocks();

console.log(jsMartian.next());
console.log(jsMartian.next());
console.log(jsMartian.next());

const yellow = 'yellow';

console.log('hey'); 