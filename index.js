const getRandomUser = async () => {
  try {
    const res = await fetch("https://randomuser.me/api");
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

const handleNewUserClick = () => {
  const generateUserButton = document.querySelector("button");
  const userImageDiv = document.querySelector(".random-user-image");

  generateUserButton.addEventListener("click", () => {
    userImageDiv.style.backgroundImage = `${url(
      " + generateUserButton.randomUserImage + "
    )}`;
  });
};

handleNewUserClick();

export { getRandomUser };
