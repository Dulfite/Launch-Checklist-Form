window.addEventListener("load", function () {
    let form = document.querySelector("form");
    document.getElementById("faultyItems").style.visibility = "hidden"
    form.addEventListener("submit", formSubmission);
    let listedPlanets;

    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);

        const planet = pickPlanet(listedPlanets);
        addDestinationInfo(`${planet.name}, ${planet.diameter}, ${planet.star}, ${planet.distance}, ${planet.moons}, ${planet.image}`)
    })

});