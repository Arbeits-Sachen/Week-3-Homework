var Number_check;

// Describe this function...
function Check_IF() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  if (Number_check == 0) {
    let element_display2 = document.getElementById('display');
    element_display2.setAttribute("src", 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Un1.svg/1200px-Un1.svg.png');
  } else if (Number_check == 1) {
    let element_display3 = document.getElementById('display');
    element_display3.setAttribute("src", 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Deux.svg/1200px-Deux.svg.png');
  } else if (Number_check == 2) {
    let element_display4 = document.getElementById('display');
    element_display4.setAttribute("src", 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Trois.svg/1200px-Trois.svg.png');
  }
}

// Describe this function...
function Check_Number() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  if (Number_check >= 3) {
    Number_check = 0;
  } else if (Number_check <= -1) {
    Number_check = 2;
  }
}


Number_check = 0;
Check_Number();
Check_IF();
let element_display = document.getElementById('display');
element_display.style.backgroundColor = '#666666';


document.getElementById('Next').addEventListener('click', (event) => {
  Number_check = (typeof Number_check === 'number' ? Number_check : 0) + 1;
  Check_Number();
  Check_IF();

});

document.getElementById('Previous').addEventListener('click', (event) => {
  Number_check = (typeof Number_check === 'number' ? Number_check : 0) + -1;
  Check_Number();
  Check_IF();

});
