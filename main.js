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
const discount = 25;


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
    let inputDiscountCode = document.getElementById("inputCode").value;
    console.log(inputDiscountCode.toUpperCase());
    //if(discountCode.includes === inputDiscountCode.toUpperCase()){
    //    console.log("yes");
    //}else{
    //    console.log("no");
    //   }
    for(let i = 0; i <= discountCode.length; i++){
        let actValue = discountCode[i];
        console.log(actValue);
        if (actValue === inputDiscountCode.toUpperCase()){
            console.log("yes");
            break
        }else{
            console.log("no");
        }
    }



    document.getElementById("total").innerHTML = priceHour * 10; 
});

