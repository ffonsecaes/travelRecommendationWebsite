const root = document.getElementById("root");
const home =  document.getElementById("home");
const aboutUs = document.getElementById("about_us");
const contactUs = document.getElementById("contact_us");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

let arrayOfDestinations = fetch("./travel_recommendation_api.json")

console.log(arrayOfDestinations)

const homeFunction = () => {
    while(root.firstChild){
        root.removeChild(root.firstChild)
    }
    root.innerHTML=`<div class="homeSection">
    <h1 class="homeTitle">Explore your dreams</h1> 
    <h3 class="homeText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>
    <button class="homeButton">Click Me</button>
    </div>
    `
}

const aboutUsFunction = () => {
    while(root.firstChild){
        root.removeChild(root.firstChild)
    }
    root.innerHTML=`<div class="homeSection">
    <h1 class="homeTitle">About Us</h1>
    <h3 class="aboutUsText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>
    <div class="ourTeamSection">
    <h2>Our Team</h2>
    <div class="imageFontOurTeam"></div>
    <div class="accountPersonal"><h4>Franco Fonseca</h4><p>CEO</p><button class="buttonPersonal">Date Appointment</button></div>
    <div class="accountPersonal"><h4>Estefania Quiroz</h4><p>Manager</p><button class="buttonPersonal">Date Appointment</button></div>
    <div class="accountPersonal"><h4>Fiorella Fonseca</h4><p>Account Sale</p><button class="buttonPersonal">Date Appointment</button></div>
    </div>
    </div>`
}

const contactUsFunction = () => {
    while(root.firstChild){
        root.removeChild(root.firstChild);
    }

    root.innerHTML = `<div class="contactUsSection">
    <h1 class="contactUsTitle">Contact Us</h1>
    <form class="contactUsForm">
    <label class="contactUsFormLabel">Name: </label>
    <input type="text" class="contactUsFormInput">
    <label class="contactUsFormLabel">Lastname: </label>
    <input type="text" class="contactUsFormInput">
    <label class="contactUsFormLabel">Message: </label>
    <textarea name="" id="" class="contactUsFormTextArea"></textarea>
    </form>
    </div>
    `

}

const searchButtonFunction = () => {
const searchValue = searchInput.value.toString().toLowerCase();
console.log(searchValue)
}

home.addEventListener("click", homeFunction)
aboutUs.addEventListener("click", aboutUsFunction)
contactUs.addEventListener("click", contactUsFunction)
searchButton.addEventListener("click", searchButtonFunction)
