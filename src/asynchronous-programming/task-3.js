/* eslint-disable import/prefer-default-export */

export const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(100), ms);
  });
