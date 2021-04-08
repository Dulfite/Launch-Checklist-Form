window.addEventListener("load", function(){
    const form = document.querySelector("form");
       form.addEventListener("submit",function(event){
       event.preventDefault();
       const pilotNameInput = document.getElementById("pilotName");
       const coPilotNameInput = document.querySelector("input[name=copilotName]");
       const fuelLevelInput = document.querySelector("input[name=fuelLevel]");
       const cargoMassInput = document.querySelector("input[name=cargoMass]");
       const faultyItemsDiv = document.getElementById("faultyItems"); 
       const launchStatusId = document.getElementById("launchStatus");
 
 if (pilotNameInput.value === "" || coPilotNameInput.value === "" || fuelLevelInput.value === ""|| cargoMassInput.value === ""){
   alert("All field are required");
 }
 else
 if (!isNaN(pilotNameInput.value) || !isNaN(coPilotNameInput.value) || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)){
    alert("Enter valid info!")
 }
 else {
 if (fuelLevelInput.value<10000){
    faultyItemsDiv.style.visibility = "visible";
    launchStatusId.innerHTML = "Shuttle not ready for launch"
    launchStatusId.style.color = "red";
    document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch"
 
 } 
 if (cargoMassInput.value>10000){
    faultyItemsDiv.style.visibility = "visible";
    launchStatusId.innerHTML = "Shuttle not ready for launch";
    launchStatusId.style.color = "red";
    document.getElementById("cargoStatus").innerHTML = "Too much mass for the shuttle to take off";
 }
 if ((fuelLevelInput.value>=10000) && (cargoMassInput.value<=10000)){
    launchStatusId.innerHTML = "Shuttle ready for launch";
    launchStatusId.style.color = "green";
    document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
    document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
    }
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${coPilotNameInput.value} is ready for launch`
    fetch("https://handlers.education.launchcode.org/static/planets.json").then( function (response){
       response.json().then(function(json){
          let index = Math.floor(Math.random()*json.length);
          const missionTargetDiv = document.getElementById("missionTarget");
          missionTargetDiv.innerHTML=`<h2>Mission Destination</h2>
          <ol>
             <li>Name: ${json[index].name}</li>
             <li>Diameter: ${json[index].diameter}</li>
             <li>Star: ${json[index].star}</li>
             <li>Distance from Earth: ${json[index].distance}</li>
             <li>Number of Moons: ${json[index].moons}</li>
          </ol>
          <img src="${json[index].image}">`
    })
 })
 }
    })
 
 })