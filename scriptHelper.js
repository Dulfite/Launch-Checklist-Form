require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `<h2>Mission Destination</h2>
                <ol>
                    <li> Name: ${name}</li> 
                    <li> Diameter: ${diameter}</li>
                    <li> Star: ${star}</li>
                    <li> Distance from Earth: ${distance}</li>
                    <li> Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`;
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    };
    if (isNaN(testInput) === true) {
        return "Not a Number";
    };
    if (isNaN(testInput) === false) {
        return "Is a Number";
    };
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const faultyItems = document.getElementById("faultyItems");
    const launchStatus = document.getElementById("launchStatus");
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) !== "Is a Number" || validateInput(cargoLevel) !== "Is a Number") {
        document.alert("Please enter valid input!");
        submit.preventDefault();
    };
    faultyItems.style.visibility = "visible";
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    launchStatus.innerHTML = `Shuttle is Ready for Launch`;
    launchStatus.style.color = `rgb(65, 159, 106)`;
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch"

    if (fuelLevel < 10000) {
        fuelStatus.innerHTML = "Fuel level too low for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "rgb(199, 37, 78)";
    };

    if (cargoLevel > 10000) {
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "rgb(199, 37, 78)";
    };
}

async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(response => response.json());
    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * planets.length);
    return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;