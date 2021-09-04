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
  createGalleryMarkup(data.results);
});

function createGalleryMarkup(data) {
  data.map((person) => {
    person = ` <div class="card">
<div class="card-img-container">
    <img class="card-img" src="${person.picture.medium}" alt="profile picture">
</div>
<div class="card-info-container">
    <h3 id="name" class="card-name cap">${person.name.first} ${person.name.last}</h3>
    <p class="card-text">${person.email}</p>
    <p class="card-text cap">${person.location.city} ${person.location.state}</p>
</div>
</div>`;
    gallery.insertAdjacentHTML("beforeend", person);
  });
}

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

//CLICK EVENT LISTENER WHEN ANY PART OF EMPLOYEE ITEM IN THE DIRECTORY IS CLICKED A MODAL SHOULD POP UP WITH IMAGE, NAME, EMAIL, CITY OR LOCATION, CELL NUMBER (XXX) XXX-XXXX, DETAILED ADDRESS, BIRTHDAY MM/DD/YYYY, A WAY TO CLOSE THE MODAL WINDOW, REFER TO MOCKUPS AND COMMENTS

//Hint to use this method: element.insertAdjacentHTML('beforeend', 'HTML string') Allows one to add strings of HTML to the DOM without disrupting what already exists in the DOM.
