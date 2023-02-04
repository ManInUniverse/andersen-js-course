/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */

const AUTHORIZATION = 'Bearer ow0ilfue52ay2idphta7tqqm63arrzzg8f6ckadg';

export const getData = () => {
  fetch('https://api.json-generator.com/templates/pcQ6pBAfCtFE/data', {
    headers: {
      Authorization: AUTHORIZATION,
    },
  })
    .then((response) => response.json())
    .then(({ hasUsersData }) => {
      if (hasUsersData) {
        fetch('https://api.json-generator.com/templates/AodXIm7GI_rw/data', {
          headers: {
            Authorization: AUTHORIZATION,
          },
        })
          .then((response) => response.json())
          .then((usersData) => console.log(usersData));
      } else {
        console.log('No need to get UsersData!');
      }
    })
    .catch((err) => console.log(err.message));
};
