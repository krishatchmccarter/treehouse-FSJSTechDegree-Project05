//fetch random user1

fetch("https://randomuser.me/api/?results=12")
  .then((response) => response.json())
  .then((data) => console.log(data));
