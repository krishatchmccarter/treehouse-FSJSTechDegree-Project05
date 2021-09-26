//DOM SELECTION
const gallery = document.getElementById("gallery");

//Single request to get and display 12 random users
function fetchData(url) {
	return fetch(url)
		.then((res) => res.json())

		.catch((error) => console.log("Looks like there was a problem", error));
}

// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

fetchData("https://randomuser.me/api/?nat=us&results=12").then((data) => {
	personData = data.results;
	createGalleryMarkup(personData);

	createModal(personData);
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

// Listens for click on person card to display modal
function createModal(data) {
	const cardDiv = document.getElementsByClassName("card");
	for (let i = 0; i < data.length; i++) {
		cardDiv[i].addEventListener("click", (e) => {
			clickedPerson = data.indexOf(data[i]);
			generateModalCard(data[clickedPerson]);
		});
	}
}

// Creates markup for modal cards
function generateModalCard(person) {
	let modalCard = `<div class="modal-container">
                          <div class="modal">
                              <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                              <div class="modal-info-container">
                                  <img class="modal-img" src="${
																		person.picture.large
																	}" alt="profile picture">
                                  <h3 id="name" class="modal-name cap">${
																		person.name.first
																	} ${person.name.last}</h3>
                                  <p class="modal-text">${person.email}</p>
                                  <p class="modal-text cap">${
																		person.location.city
																	}</p>
                                  <hr>
                                  <p class="modal-text">${person.phone}</p>
                                  <p class="modal-text">${
																		person.location.street.number
																	} ${person.location.street.name}, ${
		person.location.city
	}, ${person.location.state} ${person.location.postcode}</p>
                                  <p class="modal-text">Birthday: ${person.dob.date.slice(
																		5,
																		7
																	)}/${person.dob.date.slice(
		8,
		10
	)}/${person.dob.date.slice(0, 4)}</p>
                              </div>
                          </div>
                        `;

	gallery.insertAdjacentHTML("beforeend", modalCard);

	// Variables for modal
	const modalContainer = document.querySelector(".modal-container");
	const modalClose = document.querySelector(".modal-close-btn");

	// Event listener on close button
	modalClose.addEventListener("click", () => {
		modalContainer.remove();
	});
}
