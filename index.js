const getRandomUser = async () => {
  try {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    const user = data.results[0];
    const randomUserName = `${user.name.first} ${user.name.last}`;
    const randomUserImage = user.picture.large;
    userInfo = { randomUserName, randomUserImage };
  } catch (error) {
    console.log(error);
  }
};

(async () => {
  try {
    await getRandomUser();
    console.log(userInfo);
    module.exports = userInfo;
  } catch (error) {
    console.log(error);
  }
})();
