//Taking input and display on screen
let outputScreen = document.getElementById("output-screen");
function inputNumber(num){
    outputScreen.value+=num;
}

//Calculations
function calculate(){
    outputScreen.value=eval(outputScreen.value);
}

//Delete input
function Delete(){
   outputScreen.value=outputScreen.value.slice(0,-1);
}

//Clear screen
function Clear(){
    outputScreen.value="";
}


//Dark theme
function darktheme() {
    let dark = document.getElementById('icon');
    if (dark.style.color === "white") {
        dark.style.color = "black"
    }
    else {
        dark.style.color = "white"
    }
    //screen theme
    let elem = document.querySelectorAll('#darken');
    elem.forEach((div)=>{
        div.classList.toggle("dark-mode");
    })

    //button theme
    let btnthem = document.querySelectorAll('.btn-theme');
    btnthem.forEach((btn)=>{
        btn.classList.toggle("btn-dark-mode");
    })
}








