/**
 * Реализовать функцию arrayDiff в этом файле, и экспортировать ее.
 *
 * Функция принимает 2 массива.
 * Возвращает новый массив, который состоит только из тех элементов,
 * которые встрелились в одном массиве, но не встретились в другом
 *
 * ([1, 2, 3], [1, 2, 4])) -> 1ца и 2ка есть и там, и там - их выкидываем
 * 3ка есть только в 1ом массиве, 4ка только во 2ом. Возвращаем массив [3, 4]
 *
 * ([1, 3, 3, 4], [1, 3, '4'])) -> возвращаем [4, '4'],
 * так как одно значение - чисто, второе - строка.
 * Значения 1, 3 - есть и в 1ом и во 2ом массиве. Их выбрасываем.
 *
 * console.log(arrayDiff([1, 2, 3], [1, 2, 4])); -> [3, 4]
 * console.log(arrayDiff([1, 3, 3, 4], [1, 3, '4'])); -> [4, '4']
 */

export default function arrayDiff(arr1, arr2) {
  const map = new Map();

  arr1.forEach((element) =>
    map.has(element) ? map.set(element, map.get(element) + 1) : map.set(element, 1)
  );
  arr2.forEach((element) =>
    map.has(element) ? map.set(element, map.get(element) + 1) : map.set(element, 1)
  );

  return Array.from(map.keys()).reduce((result, key) => {
    if (map.get(key) === 1) {
      result.push(key);
      return result;
    }
    return result;
  }, []);
}

// Альтернативное решение

// export const arrayDiff = (arr, arrTwo) =>
//   [...arr, ...arrTwo].filter((value) => !arrTwo.includes(value) || !arr.includes(value));
