/* eslint-disable no-console */
import './styles/main.css';

import { foo, createCb } from './asynchronous-programming/task-1';
import { parseJSON, successCb, failureCb } from './asynchronous-programming/task-2';
import { delay } from './asynchronous-programming/task-3';
// task-4
// task-5
import { getResolvedPromise } from './asynchronous-programming/task-6';
import fooFromTask7 from './asynchronous-programming/task-7';

console.log('Hi');

console.log('==========');

foo(5, createCb('cb')); // 'x <= 10'
foo(20, createCb('cb')); // 'x > 10'; 'cb'

console.log('==========');

parseJSON('{"x": 10}', successCb, failureCb); // 'Success parse!'; { x: 10 }
parseJSON('{x}', successCb, failureCb); // 'Failure parse!'; SyntaxError: ...

console.log('==========');

delay(1000).then((value) => console.log(`Done with ${value}`)); // Done with 100

console.log('==========');

// task-4

// task-5

getResolvedPromise(500)
  .then((result) => {
    if (result > 300) {
      throw new Error('Ошибка');
    } else {
      console.log(result);
    }
  })
  .catch((err) => console.log(err.message))
  .finally(() => console.log('This is Finally!'));

console.log('==========');

fooFromTask7(); // 20

console.log('==========');
