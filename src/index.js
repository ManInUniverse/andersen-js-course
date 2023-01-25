/* eslint-disable no-console */
import './styles/main.css';

import { foo, createCb } from './asynchronous-programming/task-1';
import { parseJSON, successCb, failureCb } from './asynchronous-programming/task-2';
import { delay } from './asynchronous-programming/task-3';

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
