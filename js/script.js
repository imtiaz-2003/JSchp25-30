let original = document.getElementById("original").innerHTML = "<h1>25.12345</h1>";



// Round Number Function 
function round() {
    let number = document.getElementById("input").value;
    if (!number) {
        alert("Please Enter A Flouting Point Number ! ");
        return;
    }

    let roundNumber = Math.round(number);
    let html = "<h1>" + roundNumber + "</h1>";
    document.getElementById("output").innerHTML = html;

}

// ciel a Number function

function ciel() {
    let number = document.getElementById("input").value;
    if (!number) {
        alert("Please Enter A Flouting Point Number ! ");
        return;
    }

    let cielNumber = Math.ceil(number);
    let html = "<h1>" + cielNumber + "</h1>";
    document.getElementById("output").innerHTML = html;

}

// floor function 
function floor() {
    let number = document.getElementById("input").value;
    if (!number) {
        alert("Please Enter A Flouting Point Number ! ");
        return;
    }

    let floorNumber = Math.floor(number);
    let html = "<h1>" + floorNumber + "</h1>";
    document.getElementById("output").innerHTML = html;

}

// random function 
function random() {

    let randomNumber = Math.random();
    let html = "<h1>" + randomNumber + "</h1>";
    document.getElementById("output").innerHTML = html;

}

// Throw a Dice function 
function Dice() {
    let randomNumber = Math.random();
    randomNumber = (randomNumber * 6) + 1;
    let Dice = Math.floor(randomNumber);
    let html = "<h1>" + Dice + "</h1>";
    document.getElementById("output").innerHTML = html;



}

// Gnerate Strong posword function 

function Generateposward() {
    let randomString = "";
    let UpperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let LowerCaseString = "abcdefghijklmnopqrstuvwxyz";
    let numberString = "0123456789";
    let SymbolString = "!@#$%^&*()-_=+[{]}|;:,<.>/?";

    let posibleString = randomString + UpperCaseString + LowerCaseString + numberString + SymbolString;
    // console.log(posibleString.length);
    let limit = 10;
    for (let i = 0; i < limit; i++) {
        let randomNumber = Math.random();
        randomString += posibleString.charAt(Math.floor(randomNumber * posibleString.length));
    }


    let html = "<h1>" + randomString + "</h1>";
    document.getElementById("output").innerHTML = html;

}

// converting string functions 
function ConvertingString() {
        let num = "12345.25255"
        console.log(num);
        console.log(typeof num);
         let intoNumber = parseInt(num);
         let intoFlouting = parseFloat(num)
    // num = Number(num)
    //  let numr = num.toFixed(2);


    //
    // console.log(numr);
    console.log(typeof num);

    console.log(intoNumber);
    console.log(intoFlouting);

    




}


// Controling Lenth function
function ControlingLentgh() {
    
        let userValue1 = document.getElementById("input").value ;
        if ( userValue1 == '') {
           
            alert("please enter a value in input Field ! ")
        }

           document.getElementById("output").innerHTML= "Lenght  " + " "+ `${userValue1}`+ " is " + " " + userValue1.length ;
   
    
}
//  calculate GST -----
function gst() {
        let cost = document.getElementById("input").value ;
    if(!cost)
    {
        alert("Please Enter your Total Cost ...!")
        return
    }
    cost = Number(cost);
    let texInput = +prompt("enter your TAX : ");
let tax = cost * texInput/100 ;
let Totalcost = cost + tax ;
Totalcost =Math.round(Totalcost);

document.getElementById("output").innerHTML = 'Your Bill = <span> "' + cost + " </span>'";
document.getElementById("output").innerHTML += '<br>Tax Amount  = <span> "' + tax.toFixed(2) + " </span>'";
document.getElementById("output").innerHTML += '<br>Total Cost is   = <span> "' + Totalcost + " </span>'";
}

function clearOutput(){
    
    document.getElementById("output").innerHTML = ''
}