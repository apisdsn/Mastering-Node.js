/* Definition :
This method is like _.find except that it returns the index of the first element predicate returns truthy for instead of the element itself.
Since

1.1.0
Arguments

    array (Array): The array to inspect.
    [predicate=_.identity] (Function): The function invoked per iteration.
    [fromIndex=0] (number): The index to search from.

Returns

(number): Returns the index of the found element, else -1. */
var _ = require('lodash');

var users = [
  { user: 'Gun', active: false },
  { user: 'Maudy', active: false },
  { user: 'Ayunda', active: true },
  { user: 'Febrianza', active: true }
];
const test = _.findIndex(users, function(o) {
  return o.user === 'Maudy';
});
console.log(test);
// => 1

const active = _.findIndex(users, function(o) {
  return o.active === true;
});
console.log(active);
// => 2
