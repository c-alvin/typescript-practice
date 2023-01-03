/**
 * logs string of multiple fruits concatenated
 * @param fruit1 - the first fruit string
 * @param fruit2 - the second fruit string
 * @returns nothing
 */

function makeFruitSalad(fruit1: string, fruit2: string): void {
  let salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2 + fruit1 + fruit1;
  console.log(salad);
}

/**
 * logs the string im not ready if the value of i is less than repeat
 * @param status - the string not ready
 * @param repeat - the number 1
 * @returns nothing
 */


function proclaim(status = 'not ready...', repeat = 1) {
  for (let i = 0; i < repeat; i += 1) {
    console.log(`I'm ${status}`);
  }
}
