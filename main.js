'use strict';


//leggo dove si trova il puntatore per il valore 
let inputWork = document.getElementById("inputState");
const calcola = document.getElementById("submit");


//console.log(inputWork);

//definizioni variabili dei soldi
const BackedDevelopmentWork = 20.50;
const FrontendWork = 15.30;
const AnalystWork = 33.60;
let priceHour ;

// array codici sconto
const discountCode = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
//percentuale sconto
let discount;


//verifico ogni volta che vario il campo selezionato
inputWork.addEventListener("click",function(){
    if(inputWork.value == 1){
        //console.log(BackedDevelopmentWork);
        priceHour = BackedDevelopmentWork;
    }else if(inputWork.value == 2){
        //console.log(FrontendWork);
        priceHour = FrontendWork;
    }else if ((inputWork.value == 3)){
        //console.log(AnalystWork);
        priceHour = AnalystWork;
    }else{
        priceHour = 0;
    }
});




//calcola il prezzo del preventivo
calcola.addEventListener("click",function(){

    //verifico cosa inserisce l'utente
    let inputDiscountCode = document.getElementById("inputCode").value;
    //console.log(inputDiscountCode.toUpperCase());

    //verifico che nell'array è incluso il codice sconto
    for(let i = 0; i <= discountCode.length; i++){
        let actValue = discountCode[i];
        //console.log(actValue);
        
        if (actValue === inputDiscountCode.toUpperCase()){
            //console.log("yes");
            discount = 25;
            break
        }else{
            //console.log("no");
            discount = 0;
            
        }
        
    }
    let totalPrice = (priceHour * 10)-(((priceHour * 10)*discount)/100);
    console.log(discount);
    console.log(priceHour);
    document.getElementById("total").innerHTML = totalPrice;
    ; 
});

