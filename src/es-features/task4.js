/**
 * Просто преобразовать содержимое функции task4Old под современный код
 *
 * Пример вызова
 * const obj = task4Old()); obj -> {x: 10, y: 10, bar: function, baztest: 'new field'}
 * obj.bar(); -> 30
 */

export function task4Old() {
  var x = 10;
  var y = 20;

  var obj = {
    x: x,
    y: y,
    bar: function bar() {
      return this.x + this.y;
    },
  };

  function foo() {
    return 'test';
  }

  obj['baz' + foo()] = 'new field';

  return obj;
}

// Напишите реализацию функции task4Old на ES6+ ниже этого комментария.
// При желании, можете использовать стрелочную функцию, вместо обычной

export const task4New = () => {
  const x = 10;
  const y = 20;

  const obj = {
    x,
    y,
    bar() {
      return this.x + this.y;
    },
  };

  const foo = () => 'test';

  obj[`baz${foo()}`] = 'new field';

  return obj;
};
