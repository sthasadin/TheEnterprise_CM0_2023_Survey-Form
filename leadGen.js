let rangeLgGglIp = document.getElementById("googleLeadGenInputId");
let rangeLgLiIp = document.getElementById("linkedInLeadGenInputId");
let rangeLgInstaIp= document.getElementById("instagramLeadGenInputId");
let rangeLgFbIp= document.getElementById("facebookLeadGenInputId");
let rangeLgTwIp= document.getElementById("twitterLeadGenInputId");
let rangeLgWpIp= document.getElementById("whatsAppImLeadGenInputId");
let rangeLgEmIp= document.getElementById("emailLeadGenInputId");

let totalLgValue = document.getElementById("totalLg-sp");

function calculateLgTotal(){
    let totalLg =Number(rangeLgGglIp.value)+Number(rangeLgLiIp.value)+Number(rangeLgInstaIp.value)+Number(rangeLgFbIp.value)+Number(rangeLgTwIp.value)+ Number(rangeLgWpIp.value)+ Number(rangeLgEmIp.value);

    totalLgValue.innerHTML = totalLg;
    if(totalLg>100){
        document.getElementById("totalLg-sp").style.backgroundColor="red";
        document.getElementById("totalLg-sp").style.borderRadius="20%";
        document.getElementById("totalLg-sp").style.paddingLeft="2px";
        document.getElementById("totalLg-sp").style.paddingRight="2px";
        document.getElementById("totalLg-sp").style.color="white";
    }else{
        document.getElementById("totalLg-sp").style.color="green";
        document.getElementById("totalLg-sp").style.backgroundColor="transparent";
    }
}

rangeLgGglIp.addEventListener("input", calculateLgTotal);
rangeLgLiIp.addEventListener("input", calculateLgTotal);
rangeLgInstaIp.addEventListener("input", calculateLgTotal);
rangeLgFbIp.addEventListener("input", calculateLgTotal);
rangeLgTwIp.addEventListener("input", calculateLgTotal);
rangeLgWpIp.addEventListener("input", calculateLgTotal);
rangeLgEmIp.addEventListener("input", calculateLgTotal);
//*Alert users that the total  range of the inputs should notbe above 100
rangeLgGglIp.addEventListener("change", promptTotalRangeLg);
rangeLgLiIp.addEventListener("change", promptTotalRangeLg);
rangeLgInstaIp.addEventListener("change", promptTotalRangeLg);
rangeLgFbIp.addEventListener("change", promptTotalRangeLg);
rangeLgTwIp.addEventListener("change", promptTotalRangeLg);
rangeLgWpIp.addEventListener("change", promptTotalRangeLg);
rangeLgEmIp.addEventListener("change", promptTotalRangeLg);

//*Alert users that the total  range of the inputs should notbe above 100
function promptTotalRangeLg(){
    let totalRangeLg =Number(rangeLgGglIp.value)+Number(rangeLgLiIp.value)+Number(rangeLgInstaIp.value)+Number(rangeLgFbIp.value)+Number(rangeLgTwIp.value)+ Number(rangeLgWpIp.value)+ Number(rangeLgEmIp.value);
    if(totalRangeLg>100){
        alert("🤔😮Total split percentage TOTAL cannot be above 100")

    }
}

//*USER input and range slider input sync
//Done:User input and range slider SYNC

//DONE:Google
//? range input id->googleLeadGenInputId
//? num input id --> googleLeadGenInputId_nm

function changeRangeValueLgGgl(val){
    document.getElementById("googleLeadGenInputId").value = isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}
function changeInputValueLgGgl(val){
    document.getElementById("googleLeadGenInputId_nm").value=isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}

//DONE: LinkedIn
//? range input id->linkedInLeadGenInputId
//? num input id --> linkedInLeadGenInputId_nm

function changeRangeValueLgLi(val){
    document.getElementById("linkedInLeadGenInputId").value = isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}
function changeInputValueLgLi(val){
    document.getElementById("linkedInLeadGenInputId_nm").value=isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}

//DONE: Instagram
//? range input id-> instagramLeadGenInputId
//? num input id --> instagramLeadGenInputId_nm

function changeRangeValueLgIns(val){
    document.getElementById("instagramLeadGenInputId").value = isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}
function changeInputValueLgIns(val){
    document.getElementById("instagramLeadGenInputId_nm").value=isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}


//DONE: Facebook
//? range input id-> facebookLeadGenInputId
//? num input id --> facebookLeadGenInputId_nm

function changeRangeValueLgFb(val){
    document.getElementById("facebookLeadGenInputId").value = isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}
function changeInputValueLgFb(val){
    document.getElementById("facebookLeadGenInputId_nm").value=isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}


//DONE:Twitter
//? range input id-> twitterLeadGenInputId
//? num input id --> twitterLeadGenInputId_nm

function changeRangeValueLgTw(val){
    document.getElementById("twitterLeadGenInputId").value = isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}
function changeInputValueLgTw(val){
    document.getElementById("twitterLeadGenInputId_nm").value=isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}

//Done: Whatsapp
//? range input id-> whatsAppImLeadGenInput
//? num input id --> whatsAppImLeadGenInput_nm

function changeRangeValueLgWa(val){
    document.getElementById("whatsAppImLeadGenInputId").value =isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
    // console.log('Wa input is working')
}
function changeInputValueLgWa(val){
    document.getElementById("whatsAppImLeadGenInput_nm").value=isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
    
}

//DONE: EMail
//? range input id-> emailLeadGenInputId
//? num input id --> emailLeadGenInputId_nm

function changeRangeValueLgEm(val){
    document.getElementById("emailLeadGenInputId").value =isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
    // console.log('Wa input is working')
}
function changeInputValueLgEm(val){
    document.getElementById("emailLeadGenInputId_nm").value=isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
    
}