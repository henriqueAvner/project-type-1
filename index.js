const getRandomUser = () => {
  fetch('https://randomuser.me/api')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

getRandomUser();