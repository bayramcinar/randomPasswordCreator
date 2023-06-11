var range = document.getElementById('myRange');
var rangeValue = document.getElementById('rangeValue');
var createButton = document.querySelector(".createButon");
var password = document.querySelector(".password");
var buyukHarf = document.getElementById("buyukHarf");
var kucukHarf = document.getElementById("kucukHarf");
var sayi = document.getElementById("sayi");
var karakter = document.getElementById("karakter");
var passwordContainer = document.getElementById("passwordContainer");
var önyazi = document.querySelector(".önyazi");

var uppercaseLetters = [];
var lowercaseLetters = [];
var numbers = [];
var characters = [];

range.oninput = function() {
    rangeValue.textContent = this.value;
  };



for (var i = 65; i <= 90; i++) {
  uppercaseLetters.push(String.fromCharCode(i));
}

for (var j = 97; j <= 122; j++) {
  lowercaseLetters.push(String.fromCharCode(j));
}
for (var i = 0; i <= 9; i++) {
    numbers.push(i.toString());
}
  
for (var j = 33; j <= 126; j++) {
    characters.push(String.fromCharCode(j));
}
var numbersAndLettersRemoved = characters.filter(function(item) {
    return isNaN(item) && !(/[a-zA-Z]/).test(item);
});


var secenekler = [];

buyukHarf.addEventListener('change', function() {
  if (this.checked) {
    for(let x of uppercaseLetters){
        secenekler.push(x);
    }
  }
  else{
    for(let x of uppercaseLetters){
        secenekler.pop(x);
    }
  }
});

kucukHarf.addEventListener('change', function() {
  if (this.checked) {
    for(let x of lowercaseLetters){
        secenekler.push(x);
    }
  }
  else{
    for(let x of lowercaseLetters){
        secenekler.pop(x);
    }
  }
});

sayi.addEventListener('change', function() {
  if (this.checked) {
    for(let x of numbers){
        secenekler.push(x);
    }
  }
  else{
    for(let x of numbers){
        secenekler.pop(x);
    }
  }
});

karakter.addEventListener('change', function() {
  if (this.checked) {
    for(let x of numbersAndLettersRemoved){
        secenekler.push(x);
    }
  }
  else{
    for(let x of numbersAndLettersRemoved){
        secenekler.pop(x);
    }
  }
});


createButton.addEventListener("click", function(){
    if(!buyukHarf.checked && !kucukHarf.checked && !sayi.checked && !karakter.checked){
        önyazi.innerHTML = "Select a Section !";
    }
    else{
        var passwordArray = [];
        var genislik = parseInt(rangeValue.textContent);
        for(var i = 0;i<genislik;i++){
            var randomIndex = Math.floor(Math.random() * secenekler.length);
            var selectedItem = secenekler[randomIndex];
            passwordArray.push(selectedItem);  
        } 

        passwordContainer.innerHTML = "";
        for (var i = 0; i < passwordArray.length; i++) {
            var span = document.createElement("span");
            span.textContent = passwordArray[i];
            if(uppercaseLetters.includes(passwordArray[i]))
                span.style.color = "#EA5455";
            else if(lowercaseLetters.includes(passwordArray[i]))
                span.style.color = "#A5D7E8";
            else if(numbers.includes(passwordArray[i]))
                span.style.color = "#537FE7";
            else if(characters.includes(passwordArray[i]))
                span.style.color = "#fff";
            span.style.fontSize="15px";
            span.style.paddingBottom = "10px";
            span.style.paddingTop = "10px";
            span.style.fontWeight = "600";  
            span.classList ="fw-bold";
            span.style.letterSpacing="0.5px";
            passwordContainer.appendChild(span);
        }    
    }
});
























