/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */

export const getDataInSeries = (urlsArray) => {
  const results = [];
  // Формируем массив функций, которые получают данные по урлам и возвращают промис
  const functionsToGetData = urlsArray.map(
    (url) => () =>
      fetch(url)
        .then((response) => response.json())
        .then((data) => results.push(data))
  );
  // С помощью reduce() создаем цепочку промисов, которые выполнятся последовательно
  functionsToGetData
    .reduce((prev, current) => prev.then(current), Promise.resolve())
    // Метод reduce() вернет промис, который завершится, когда вся цепочка промисов выполнится
    .then(() => console.log(results));
};

export const getDataParallel = (urlsArray) => {
  // Создаем массив промисов, которые параллельно получают данные с урлов
  const promises = urlsArray.map((url) => fetch(url).then((response) => response.json()));
  // Дожидаемся выполнения всех промисов, после чего выводим данные в консоль
  Promise.all(promises).then((results) => console.log(results));
};
