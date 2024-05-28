'use strict';


//leggo dove si trova il puntatore per il valore 
let inputWork = document.getElementById("inputState");
let calcola = document.getElementById("submit");


//console.log(inputWork);

//definizioni variabili dei soldi
let BackedDevelopmentWork = 20.50;
let FrontendWork = 15.30;
let AnalystWork = 33.60;
let priceHour ;


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
    //console.log(priceHour * 10);
    document.getElementById("total").innerHTML = priceHour * 10; 
});

