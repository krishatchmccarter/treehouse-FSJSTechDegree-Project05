//fetch 12 random users

fetch("https://randomuser.me/api/?results=12")
  .then((response) => response.json())
  .then((data) => console.log(data.results));
