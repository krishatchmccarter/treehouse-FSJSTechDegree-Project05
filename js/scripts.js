//DOM SELECTION
const gallery = document.getElementById("gallery");

// ------------------------------------------
//  FETCH FUNCTIONS
//  SINGLE REQUEST TO GET AND DISPLAY 12 RANDOM USERS
// ------------------------------------------

function fetchData(url) {
  return (
    fetch(url)
      //.then((res) => console.log(res))
      //.then(checkStatus)
      .then((res) => res.json())
    //.catch((error) => console.log("Looks like there was a problem", error))
  );
}

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

fetchData("https://randomuser.me/api/?nat=us&results=12").then((data) => {
  for (let i = 0; i < data.results.length; i++) {
    const firstName = data.results[i].name.first;
    const lastName = data.results[i].name.last;
    const city = data.results[i].location.city;
    const state = data.results[i].location.state;
    const email = data.results[i].email;
    const imgLarge = data.results[i].picture.large;
    const imgMedium = data.results[i].picture.medium;
    const imgThumbnail = data.results[i].picture.thumbnail;
    const birthday = data.results[i].dob.date;
    const cell = data.results[i].cell;

    console.log(
      `${firstName} ${lastName} ${city} ${state} ${email} ${imgLarge} ${imgMedium} ${imgThumbnail} ${birthday} ${cell}`
    );
  }
});

//create div tags with class card
//create div tags inside card with class card-img-container. See mockup, add employee image
//create div tags inside card with class card-info-container.  See mockup, add h3 with first last, p with email and p with city state

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

//CLICK EVENT LISTENER WHEN ANY PART OF EMPLOYEE ITEM IN THE DIRECTORY IS CLICKED A MODAL SHOULD POP UP WITH IMAGE, NAME, EMAIL, CITY OR LOCATION, CELL NUMBER (XXX) XXX-XXXX, DETAILED ADDRESS, BIRTHDAY MM/DD/YYYY, A WAY TO CLOSE THE MODAL WINDOW, REFER TO MOCKUPS AND COMMENTS

//Hint to use this method: element.insertAdjacentHTML('beforeend', 'HTML string') Allows one to add strings of HTML to the DOM without disrupting what already exists in the DOM.
