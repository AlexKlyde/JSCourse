const fetchUserData = userName =>
  fetch(`https://api.github.com/users/${userName}`)
    .then(response => {
      if (response.ok) {
        return response.json();
    }
    throw new Error('Failed to load data');
  });

const getUsersBlogs = async usersNames => {
  try {
    const requests = await Promise.all(
      usersNames.map(name =>
        fetchUserData(name)
        .then(user => user.blog)),
    );
    return requests;
  } catch (err) {
    console.log(err.message);
  }
};

getUsersBlogs(['google', 'facebook']).then(linksList => console.log(linksList));
