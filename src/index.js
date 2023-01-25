/* eslint-disable no-console */
import './styles/main.css';

import { foo, createCb } from './asynchronous-programming/task-1';

console.log('Hi');

console.log('==========');

foo(5, createCb('cb')); // 'x <= 10'
foo(20, createCb('cb')); // 'x > 10'; 'cb'

console.log('==========');
