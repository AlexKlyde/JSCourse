const fetchUserData = async userName => {
  const response = await fetch(`https://api.github.com/users/${userName}`);

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
    console.err(err.message);
  }
};

getUsersBlogs(['google', 'facebook']).then(linksList => console.log(linksList));
