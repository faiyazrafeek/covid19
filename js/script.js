"use strict";

fetch("https://hpb.health.gov.lk/api/get-current-statistical")
    .then(function(resp){
        return resp.json();
    })
    .then(function(datas){
        console.log(datas);

        document.getElementById("time").innerHTML='Last Update at '+datas.data.update_date_time; 

        //local cases
        document.getElementById("totalCases").innerHTML=datas.data.local_total_cases; 
        document.getElementById("newCases").innerHTML=datas.data.local_new_cases;
        document.getElementById("indHospitals").innerHTML=datas.data.local_total_number_of_individuals_in_hospitals; 
        document.getElementById("deaths").innerHTML=datas.data.local_deaths;
        document.getElementById("recovered").innerHTML=datas.data.local_recovered; 


        //global cases
        document.getElementById("gloTotalCases").innerHTML=datas.data.global_total_cases; 
        document.getElementById("gloNewCases").innerHTML=datas.data.global_new_cases;
        document.getElementById("gloDeaths").innerHTML=datas.data.global_deaths; 
        document.getElementById("gloNewDeaths").innerHTML=datas.data.global_new_deaths; 
        document.getElementById("gloRecovered").innerHTML=datas.data.global_recovered;    
    });