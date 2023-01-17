const customersArray = ['Custy Stomer', 'C. Oostomar', 'C.U.S. Tomer', 3432434, 'Custo Mer', 'Custopher Ustomer', 3432435, 'Kasti Yastimeur'];

// Write Your Code here:

function checkCustomersArray(x) {
  for (let i = 0; i < x.length; i++) {
    if (typeof x[i] !== 'string') {
      /* eslint-disable no-console */
      console.log(`Type error: ${x[i]} should be a string!`);
    }
  }
}
checkCustomersArray(customersArray);

function stringPush(val) {
  if (typeof val === 'string') {
    customersArray.push(val);
  }
}

stringPush();
