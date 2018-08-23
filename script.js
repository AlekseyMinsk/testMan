 size = 7;
    
    function tableCreate() {
      
      let body = document.getElementsByTagName('body')[0];
      let table = document.createElement('table');
      table.classList.add("table");
      table.id = "table";
      
      for (let i = 0; i < size; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < size; j++) {

          let td = document.createElement('td');
          td.classList.add("td");
          td.id = "a" + (i+1) + (j+1);
          tr.appendChild(td);

          }

          table.appendChild(tr);
        }
        body.appendChild(table);
    }
      
    tableCreate();

      let flagActive;
      let flagActiveСoordinate; 
      let firstbutton = document.getElementById("a11");
      firstbutton.innerHTML = "<img src='img/man.png' id='img' class='img'>"
      var img = document.getElementById("img");
      flagActive = firstbutton;
      flagActiveСoordinate = firstbutton.id.split('');


      let row = 1;
      let column = 2;
      let coordinate;
 
      document.body.addEventListener("keydown", test, event);

      function moveMan() {

                flagActive.innerHTML = "";
                flagActiveСoordinate[1] = +flagActiveСoordinate[1] + 1; 
                console.log(flagActiveСoordinate);
                let newId = flagActiveСoordinate.join('');
                
                flagActive = document.getElementById(newId);
                
                flagActive.innerHTML = "<img src='img/man.png' id='img' class='img'>"

                document.getElementsByClassName('img')[0].style = "transform: rotate(0deg)"; 
      }


      function test(event) {

          if (event.key == "ArrowDown") {

            document.getElementsByClassName('img')[0].style = "transform: rotate(0deg)";

            if (flagActiveСoordinate[1] < size) {
                
                flagActive.innerHTML = "";
                flagActiveСoordinate[1] = +flagActiveСoordinate[1] + 1; 
                let newId = flagActiveСoordinate.join('');
                flagActive = document.getElementById(newId);
                flagActive.innerHTML = "<img src='img/man.png' id='img' class='img'>"
                document.getElementsByClassName('img')[0].style = "transform: rotate(0deg)";
            }
          }

          if (event.key == "ArrowUp") {

                document.getElementsByClassName('img')[0].style = "transform: rotate(180deg)";

                if (flagActiveСoordinate[1] > 1) {
        
                  flagActive.innerHTML = "";
                  flagActiveСoordinate[1] = +flagActiveСoordinate[1] - 1; 
     
                  let newId = flagActiveСoordinate.join('');
                  
                  flagActive = document.getElementById(newId);
                  flagActive.innerHTML = "<img src='img/man.png' id='img' class='img'>"
                  document.getElementsByClassName('img')[0].style = "transform: rotate(180deg)";
                }

            
          }

          if (event.key == "ArrowLeft") {
          document.getElementsByClassName('img')[0].style = "transform: rotate(90deg)";
            if (flagActiveСoordinate[2] > 1) {
                
                  flagActive.innerHTML = "";
                  flagActiveСoordinate[2] = +flagActiveСoordinate[2] - 1; 
     
                  let newId = flagActiveСoordinate.join('');
                  
                  flagActive = document.getElementById(newId);
                  flagActive.innerHTML = "<img src='img/man.png' id='img' class='img'>"
document.getElementsByClassName('img')[0].style = "transform: rotate(90deg)";
                }


            
          }

          if (event.key == "ArrowRight") {
document.getElementsByClassName('img')[0].style = "transform: rotate(-90deg)";


            if (flagActiveСoordinate[2] < size) {
                
                  flagActive.innerHTML = "";
                  flagActiveСoordinate[2] = +flagActiveСoordinate[2] + 1; 
             
                  let newId = flagActiveСoordinate.join('');
                  
                  flagActive = document.getElementById(newId);
                  flagActive.innerHTML = "<img src='img/man.png' id='img' class='img'>"
document.getElementsByClassName('img')[0].style = "transform: rotate(-90deg)";
                }


          }

          
      }