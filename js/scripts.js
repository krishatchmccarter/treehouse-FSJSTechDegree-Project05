//DOM SELECTION
const gallery = document.getElementById("gallery");

//SINGLE REQUEST TO GET AND DISPLAY 12 RANDOM USERS

fetch("https://randomuser.me/api/?results=12")
  .then((response) => response.json())
  .then((data) => console.log(data.results));

//INCLUDE IMAGE, FIRST NAME AND LAST NAME, EMAIL, CITY OR LOCATION (REFER TO MOCKUPS AND COMMENTS IN INDEX.HTML FOR WHAT SHOULD BE DISPLAYED AND HOW STYLED)

//create div tags with class card
//create div tags inside card with class card-img-container. See mockup, add employee image
//create div tags inside card with class card-info-container.  See mockup, add h3 with first last, p with email and p with city state

//CLICK EVENT LISTENER WHEN ANY PART OF EMPLOYEE ITEM IN THE DIRECTORY IS CLICKED A MODAL SHOULD POP UP WITH IMAGE, NAME, EMAIL, CITY OR LOCATION, CELL NUMBER (XXX) XXX-XXXX, DETAILED ADDRESS, BIRTHDAY MM/DD/YYYY, A WAY TO CLOSE THE MODAL WINDOW, REFER TO MOCKUPS AND COMMENTS

//Hint to use this method: element.insertAdjacentHTML('beforeend', 'HTML string') Allows one to add strings of HTML to the DOM without disrupting what already exists in the DOM.
