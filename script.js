const size = 9;
const labyrinth = {
  "a12": "left",
  "a13": "left",
  "a14": "left",
  "a22": "left",
  "a23": "left",
  "a25": "both",
  "a26": "up",
  "a27": "up",
  "a28": "up",
  "a29": "left",
  "a32": "left",
  "a33": "up",
  "a34": "both",
  "a35": "left",
  "a36": "both",
  "a37": "up",
  "a38": "left",
  "a39": "left",
  "a42": "both",
  "a43": "left",
  "a44": "left",
  "a45": "left",
  "a46": "left",
  "a47": "left",
  "a48": "left",
  "a53": "left",
  "a54": "left",
  "a55": "left",
  "a56": "left",
  "a57": "left",
  "a58": "up",
  "a59": "both",
  "a63": "left",
  "a62": "left",
  "a73": "left",
  "a72": "left",
  "a73": "both",
  "a75": "up",
  "a76": "up",
  "a77": "up",
  "a92": "up",
  "a82": "left",
  "a84": "both",
  "a93": "up",
  "a94": "up",
  "a95": "up",
  "a97": "up",
  "a98": "up"
};
const body = document.getElementsByTagName('body')[0];

(function tableCreate() {
      
  let table = document.createElement('table');
  table.classList.add("table");
  table.id = "table";
      
  for (let i = 0; i < size; i++) {

    let tr = document.createElement('tr');

    for (let j = 0; j < size; j++) {

      let td = document.createElement('td');
      td.classList.add("td");
      // td.classList.add("border-left");
      td.id = "a" + (i+1) + (j+1);

      for (let key in labyrinth) {
       
        if(td.id == key) {
           
          if(labyrinth[key] == "left")  td.classList.add("border-left");
          if(labyrinth[key] == "up")  td.classList.add("border-up");
          if(labyrinth[key] == "both")  td.classList.add("border-both");
        }
      }

      tr.appendChild(td);

    }
    table.appendChild(tr);
  }
  body.appendChild(table);
})();

let flagActive;
let flagActiveСoordinate; 
let currentBackground;
let firstPlace = document.getElementById("a11");

firstPlace.classList.add("background-down");
currentBackground = "background-down";

flagActive = firstPlace;
flagActiveСoordinate = firstPlace.id.split('');



body.addEventListener("keyup", moveManByUserClick, event);

const objEvents = {
  "ArrowDown": "background-down",
  "ArrowUp": "background-up",
  "ArrowLeft": "background-left",
  "ArrowRight": "background-right"
}
const objEventsInvert = {
  "background-down": "ArrowDown",
  "background-up": "ArrowUp",
  "background-left" : "ArrowLeft",
  "background-right" :"ArrowRight"
}

function newPosition(direction) { // new position in the same ceil
  flagActive.classList.remove(currentBackground);
  flagActive.classList.add(direction);
  currentBackground = direction;
}

let deadEnd = 0;

let directionObj = {
  "background-down": "background-right",
  "background-right": "background-up",
  "background-up": "background-left",
  "background-left": "background-down"
}
 let autoMove = setInterval(moveManByAuto, 1000, objEventsInvert[currentBackground]);


let eventButton;
function moveManByAuto(eventButton, check)  {

  for (let key in objEvents) {
    if(eventButton == key) {
      newPosition(objEvents[key]);
    }
  }




  if (eventButton == "ArrowDown") {
    if (flagActiveСoordinate[1] < size) {

      for (let key in labyrinth) {
        if(+flagActive.id[1] + 1 == +key[1] && flagActive.id[2] == key[2] && (labyrinth[key] == "up" || labyrinth[key] == "both")) {
          deadEnd = 1;
        } 
      }

      if(!deadEnd) {
        clearInterval(autoMove);
        flagActive.classList.remove(currentBackground);
        flagActiveСoordinate[1] = +flagActiveСoordinate[1] + 1; 
        let newId = flagActiveСoordinate.join('');
        flagActive = document.getElementById(newId);
        flagActive.classList.add("background-down");
      
        autoMove = setInterval(moveManByAuto, 1000, objEventsInvert[currentBackground]);
        deadEnd = 0;

      }

      


    } else {
      deadEnd = 1;
    }
  }

  if (eventButton == "ArrowUp") {
    if (flagActiveСoordinate[1] > 1) {

      for (let key in labyrinth) {
        if(key == flagActive.id && (labyrinth[key] == "up" || labyrinth[key] == "both") ) {
         deadEnd = 1;
        }
      }

      if(!deadEnd) {
        clearInterval(autoMove);
      flagActive.classList.remove(currentBackground);
      flagActiveСoordinate[1] = +flagActiveСoordinate[1] - 1; 
      let newId = flagActiveСoordinate.join('');
      flagActive = document.getElementById(newId);
      flagActive.classList.add("background-up");
      autoMove = setInterval(moveManByAuto, 1000, objEventsInvert[currentBackground])
      deadEnd = 0;

      }
     
    } else {
      deadEnd = 1;

    }
  }

  if (eventButton == "ArrowLeft") {
    if (flagActiveСoordinate[2] > 1) {


      for (let key in labyrinth) {
        if(key == flagActive.id && (labyrinth[key] == "left" || labyrinth[key] == "both" )) deadEnd = 1;;  
      }
      if(!deadEnd) {
        clearInterval(autoMove);
      flagActive.classList.remove(currentBackground);
      flagActiveСoordinate[2] = +flagActiveСoordinate[2] - 1; 
      let newId = flagActiveСoordinate.join('');
      flagActive = document.getElementById(newId);
      flagActive.classList.add("background-left");
      autoMove = setInterval(moveManByAuto, 1000, objEventsInvert[currentBackground])
      deadEnd = 0;
        
      }

      } else {
        deadEnd = 1;
      }
  }
  
  if (eventButton == "ArrowRight") {
    if (flagActiveСoordinate[2] < size) {



      for (let key in labyrinth) {
        if(flagActive.id[1] == key[1] && +flagActive.id[2] + 1 == +key[2] && (labyrinth[key] == "left" || labyrinth[key] == "both") )  deadEnd = 1;
      }
      if(!deadEnd) {
          clearInterval(autoMove);
      flagActive.classList.remove(currentBackground);
      flagActiveСoordinate[2] = +flagActiveСoordinate[2] + 1; 
      let newId = flagActiveСoordinate.join('');
      flagActive = document.getElementById(newId);
      flagActive.classList.add("background-right");
      autoMove = setInterval(moveManByAuto, 1000, objEventsInvert[currentBackground])
      deadEnd = 0;
        
      }
    
    } else {
      deadEnd = 1;

    }
  }

  if(!check && deadEnd) {
    clearInterval(autoMove);
    autoMove = setInterval(moveManByAuto, 1000, objEventsInvert[directionObj[currentBackground]])
    deadEnd = 0;
  } 


}







function moveManByUserClick(event) {
eventButton = event.key;
moveManByAuto(eventButton, 1);

  
}