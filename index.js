//alert("hello world!")
/*
let username;

document.getElementById("butt").onclick = function () {
    username = document.getElementById("input-bar").value;
    document.getElementById("head").textContent = `Hello ${username}`

}
    


let radius;
const PI = 3.142;

document.getElementById("sub").onclick = function () {
    radius = document.getElementById("myh2").value;
    radius = Number(radius)
    let circumference = 2 * PI * radius;
    document.getElementById("myh3").textContent = `The Radius ${circumference}`
}
    

const decreasebtn = document.getElementById("decreasebtn")
const increasebtn = document.getElementById("increasebtn")
const resetbtn = document.getElementById("resetbtn")
const countLabel = document.getElementById("countlabel")
let count = 0

increasebtn.onclick = function () {
    count++;
    countLabel.textContent = count;
   
}

decreasebtn.onclick = function() {
    count--;
    countLabel.textContent = count
}

resetbtn.onclick = function () {
    count = 0;
    countLabel.textContent = count
}
 
const myButton  = document.getElementById("btn")
const rand1 = document.getElementById("label1")
const rand2 = document.getElementById("label2")
const rand3 = document.getElementById("label3")
const min = 1;
const max = 6;
let randomNumber1;
let randomNumber2;
let randomNumber3;

myButton.onclick = function() {
    randomNumber1 = Math.floor(Math.random() * max) + min
    randomNumber2 = Math.floor(Math.random() * max) + min
    randomNumber3 = Math.floor(Math.random() * max) + min
    rand1.textContent = randomNumber1
    rand2.textContent = randomNumber2
    rand3.textContent = randomNumber3
}



const myCheckBox = document.getElementById("mycheckbox")
const visaBtn = document.getElementById("visabtn")
const masterBtn = document.getElementById("masterbtn")
const paypalBtn = document.getElementById("paypalbtn")
const mySubmmit = document.getElementById("mysubmmit")
const subResult = document.getElementById("subresult")
const paymentResult = document.getElementById("paymentresult")

mySubmmit.onclick = function() {
    if(myCheckBox.checked) {
        subResult.textContent = `You have Subscribed!`

    }else {
        subResult.textContent = `You have not subscribed`
    }

    if(visaBtn.checked) {
        paymentResult.textContent = `You are paying with Visacard`
    }else if (masterBtn.checked) {
        paymentResult.textContent = `You are paying with mastercard`
    }else if (paypalBtn.checked){
        paymentResult.textContent = `You are paying with paypal`
    }else {
        paymentResult.textContent = `You must select a payment type`
    }
}


const email = "elam2@gmail.com"

let userName = email.slice(0, email.indexOf("@"))
let extension = email.slice(email.indexOf("@") + 1)

console.log(userName)
console.log(extension)


let userName = window.prompt("Enter your username: ")
userName = userName.trim()

let letter = userName.charAt(0)

letter = letter.toUpperCase()

let remaining = userName.slice(1)

remaining = remaining.toLowerCase()

userName = letter + remaining;


let userName = window.prompt("Enter your username: ")
userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase()

console.log(userName)


const min = 1
const max = 100

let attempt = 0
let guess;
let running = true

const answer = Math.floor((Math.random() * (max - min + 1) )) + min

while(!running) {
    guess = window.prompt(`Enter a guess between ${min} - ${max}`)
    guess = Number(guess)

    if(isNaN(guess)) {
        window.alert("Enter a valid number")
    }else if(guess < min || guess > max) {
        window.alert("Enter a valid number")
    }else {
        attempt++
        if(guess < answer) {
            window.alert("too low try again")
        }else if(guess > answer) {
            window.alert("Too high try again")
        } else {
            window.alert(`correct! The answer is ${answer} it took you ${attempt} attemps`)
            running = false
        }

    }
}
    */

const textBox = document.getElementById("textBox");
const toFahrenreit = document.getElementById("toFahrenreit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");

let temp;


function convert() {
    if(toFahrenreit.checked) {
        temp = textBox.value;
        temp = Number(temp)
        temp = temp * 9 / 5 + 32;
        result.textContent = temp + "°F"
    }else if(toCelcius.checked) {
        temp = textBox.value;
        temp = Number(temp)
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "°C"

    }else {
        result.textContent = "Select a unit"
    }

}