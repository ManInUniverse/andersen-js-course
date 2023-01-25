/* eslint-disable no-console */

export const parseJSON = async (jsonStr, successCb, failureCb) => {
  try {
    const result = await JSON.parse(jsonStr);
    successCb(result);
  } catch (error) {
    failureCb(error);
  }
};

export const successCb = (result) => {
  console.log('Success parse!');
  console.log(result);
};

export const failureCb = (error) => {
  console.log('Failure parse!');
  console.log(error);
};
