const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const firstTwo = drivers.slice(0,1);
const lastTwo = drivers.slice(-2);

function returnFirstTwoDrivers(driver){
    return driver.slice(0,2);
}
function returnLastTwoDrivers(driver){
    return driver.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare){
    return function(){
        return fare * 5
    }
}
let fareDoubler = fare => fare*2;
let fareTripler = fare => fare*3;


function selectDifferentDrivers(selectingDrivers, drivers){
    return drivers(selectingDrivers)
}
