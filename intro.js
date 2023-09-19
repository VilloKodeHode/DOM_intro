//! Steg 1: initialiserer variabl for html objekter som har id="grandparent"

// querySelector velger det FØRSTE objektet som det finner som passer inn
const grandParent = document.querySelector("#grandparent")
// initialiserer variable for html objekt som har class="parent"
const parents = document.querySelector(".parent")

//! Steg 2: lage en funksjon som endrer bakgrunnsfargen til et html objekt:

const yellowMaker = (element) => {
    // elementet man setter i callbacken får en gul bakgrunnsfarge:
    // .style forteller at man skal endre på css egenskapen til objektet
    // backgroundColor forteller at man skal endre spesifikt på bakgrunnsfargen til objektet
    element.style.backgroundColor = "yellow"
}

//callback funksjonen yellowmaker, sier at det er objektet med class="parent" som skal targetes
yellowMaker(parents)

//! Steg 3: Legge til en h1 tag med tekstinnhold i html:

// initialiserer variabel at man skal lage h1 tag:
const newElement = document.createElement("h1");
// sier at h1 taggen man har initialisert skal ha et spesifikt tekstinnhold:
newElement.textContent = "Jeg ble laget i javascript!"
// sier at denne h1 taggen med tekstinnholdet skal legges inni i en tag som har id="grandParent":
grandParent.append(newElement)

//! Steg 4: Gjør samme som steg 3, men med p tag og legges i parent classen:

// samme som over bare med p tag istedet og legger det til i en tag som har class="parent"
const newChildElement = document.createElement("p");
newChildElement.textContent = "Jeg ble også laget av js!"
parents.append(newChildElement)

// document.body.prepend(newChildElement)

