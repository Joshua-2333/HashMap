const HashMap = require('./HashMap');
const HashSet = require('./HashSet');

// Test HashMap
const test = new HashMap(8, 0.75);

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden'); // triggers resize

console.log('Size after inserting:', test.length());
console.log('Capacity after resizing:', test.capacity);

test.set('apple', 'dark red');
test.set('frog', 'lime green');

console.log('Updated apple:', test.get('apple'));
console.log('Updated frog:', test.get('frog'));
console.log('Keys:', test.keys());
console.log('Values:', test.values());
console.log('Entries:', test.entries());

console.log('Has "carrot"?', test.has('carrot'));
console.log('Remove "dog":', test.remove('dog'));
console.log('Remove "zebra":', test.remove('zebra')); // false

console.log('Clear everything');
test.clear();
console.log('Length after clear:', test.length());

// Test HashSet
const set = new HashSet();
set.add('apple');
set.add('banana');
console.log('Has apple?', set.has('apple'));
console.log('Has cherry?', set.has('cherry'));
console.log('All keys in set:', set.keys());
console.log('Set size:', set.size());
