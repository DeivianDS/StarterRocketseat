axios
  .get("https://api.github.com/users/deivianDS")
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.error(error);
  });
