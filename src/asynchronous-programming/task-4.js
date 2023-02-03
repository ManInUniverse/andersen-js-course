/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */

export const getData = () => {
  fetch('https://www.json-generator.com/api/json/get/cfQCylRjuG')
    .then((response) => response.json())
    .then((data) => {
      if (data.getUsersData) {
        fetch('https://www.json-generator.com/api/json/get/cfVGucaXPC')
          .then((response) => response.json())
          .then((usersData) => console.log(usersData));
      } else {
        console.log('No need to get UsersData!');
      }
    })
    .catch((err) => console.log(err.message));
};
