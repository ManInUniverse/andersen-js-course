/**
 * Реализовать функцию createGenerator в этом файле, и экспортировать ее.
 *
 * При каждом вызове метода .next() происходит возврат следующего значения из массива
 * Когда все элементы будут возвращены,
 * следующие вызовы метода .next() должны возвращать строку 'Complete!'
 *
 * В решении функции-генераторы (function*) не использовать.
 *
 * const generator = createGenerator([1, '6', 3, 2]);
 * generator.next(); -> 1
 * generator.next(); -> '6'
 * generator.next(); -> 3
 * generator.next(); -> 2
 * generator.next(); -> 'Complete!'
 * generator.next(); -> 'Complete!'
 */

export default function createGenerator(arr) {
  return {
    _step: 0,
    next() {
      this._step += 1;
      return arr[this._step - 1] ?? 'Complete!';
    },
  };
}

// Альтернативное решение

// export const createGenerator = array => {
//   const copyArray = array.slice();
//   return {
//     next() {
//       return copyArray.length === 0 ? 'Complete!' : copyArray.shift();
//     },
//   };
// };
