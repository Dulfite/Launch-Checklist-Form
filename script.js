window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
       event.preventDefault();
       let pilotNameInput = document.querySelector("input[name=pilotName]");
       let copilotNameInput = document.querySelector("input[name=copilotName]");
       let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
       let cargoMassInput = document.querySelector("input[name=cargoMass]");
 
       fuelLevelNumber = Number(fuelLevelInput.value)
       cargoMassNumber = Number(cargoMassInput.value)
 
       const json = fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
    response.json().then( function(json) {
       
       
       const div = document.getElementById("missionTarget");
       div.innerHTML = `
       <h2>Mission Destination</h2>
       <ol>
          <li>Name: ${json[3].name}</li>
          <li>Diameter: ${json[3].diameter}</li>
          <li>Star: ${json[3].star}</li>
          <li>Distance from Earth: ${json[3].distance}</li>
          <li>Number of Moons: ${json[3].moons}</li>
       </ol>
       <img src="${"https://mars.nasa.gov/system/resources/detail_files/7808_global-color-views-mars-PIA00407-full2.jpg"}">
       `;
    })
 
 })
 
       
    
 
       if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
          alert("All fields are required");
 
          
       }
 
       document.getElementById("pilotStatus").innerHTML = `${pilotNameInput.value}` + " is ready";
       document.getElementById("copilotStatus").innerHTML = `${copilotNameInput.value}` + " is ready";
 
       let faultyItemsList = document.getElementById("faultyItems")
       let launchStatusChecker = document.getElementById("launchStatus")
       let fuelLevelChecker = document.getElementById("fuelStatus")
       let cargoMassChecker = document.getElementById("cargoStatus")
      
      //both false
       if (fuelLevelNumber < 10000 && cargoMassNumber > 10000) {
          faultyItemsList.style.visibility = "visible"
          fuelLevelChecker.innerHTML = "not enough fuel for the journey."
          cargoMassChecker.innerHTML = "there is too much mass for the shuttle to take off."
          launchStatusChecker.style.color = "red";
          launchStatusChecker.innerHTML = "Shuttle not ready for launch"
       }
          else if (fuelLevelNumber < 10000 && cargoMassNumber < 10000) {
             faultyItemsList.style.visibility = "visible"
             fuelLevelChecker.innerHTML = "not enough fuel for the journey."
             launchStatusChecker.style.color = "red";
             launchStatusChecker.innerHTML = "Shuttle not ready for launch"
          }
          
          else if (fuelLevelNumber > 10000 && cargoMassNumber > 10000) {
             faultyItemsList.style.visibility = "visible"
             cargoMassChecker.innerHTML = "there is too much mass for the shuttle to take off."
             launchStatusChecker.style.color = "red";
             launchStatusChecker.innerHTML = "Shuttle not ready for launch"
          }
 
             else {
                launchStatusChecker.innerHTML = "Shuttle is ready for launch"
                launchStatusChecker.style.color = "green";
             }
 
          
 
 
          //else both is true
          
       
 
   
 
    });
    
 
 
 });
 