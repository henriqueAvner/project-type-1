const getRandomUser = async () => {
  try {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    const user = data.results[0];
    const randomUserName = `${user.name.first} ${user.name.last}`;
    const randomUserImage = user.picture.large;
    const userInfo = { randomUserName, randomUserImage };
    return userInfo;
  } catch (error) {
    console.log(error);
  }
};

export { getRandomUser };