const fetchUserData = async userName => {
  const response = await fetch(`https://api.github.com/user/${userName}`);

  if (response.ok) {
    return response.json();
  }
};

const getUsersBlogs = usersNames => {
  try {
    return Promise.all(
      usersNames.map(name => fetchUserData(name)
          .then(user => user.blog))
    );
  } catch (err) {
    console.log(err);
  }
};

getUsersBlogs(['google', 'facebook', '123']).then(linksList => console.log(linksList));
