/* eslint-disable no-console */

export const foo = (x, cb) => {
  if (x > 10) {
    console.log('x > 10');
    cb();
  }

  if (x <= 10) {
    console.log('x <= 10');
  }
};

export const createCb = (str) => () => console.log(str);
