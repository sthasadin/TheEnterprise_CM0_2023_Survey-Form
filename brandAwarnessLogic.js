let rangeAwGglIp = document.getElementById("googleAwarenessInputId");
let rangeAwLiIp= document.getElementById("linkedInAwarenessInputId");
let rangeAwInstaIp= document.getElementById("instagramAwarenessInputId");
let rangeAwFbIp= document.getElementById("facebookAwarenessInputId");
let rangeAwTwIp= document.getElementById("twitterAwarenessInputId");
let rangeAwWpIp= document.getElementById("whatsAppImAwarenessInputId");
let rangeAwEmIp= document.getElementById("emailAwarenessInputId");

let totalAwValue = document.getElementById("totalAw-sp")

function calculateAwTotal(){
    let totalAw =Number(rangeAwGglIp.value)+Number(rangeAwLiIp.value)+Number(rangeAwInstaIp.value)+Number(rangeAwFbIp.value)+Number(rangeAwTwIp.value)+ Number(rangeAwWpIp.value)+ Number(rangeAwEmIp.value);

    totalAwValue.innerHTML = totalAw;
    console.log("awarness is working")
    console.log(totalAw)
    if(totalAw>100){
        document.getElementById("totalAw-sp").style.backgroundColor="red";
        document.getElementById("totalAw-sp").style.borderRadius="20%";
        document.getElementById("totalAw-sp").style.paddingLeft="2px";
        document.getElementById("totalAw-sp").style.paddingRight="2px";
        document.getElementById("totalAw-sp").style.color="white";
        // alert("🤔😮Total split percentage TOTAL cannot be above 100");
    }else{
        document.getElementById("totalAw-sp").style.color="green";
        document.getElementById("totalAw-sp").style.backgroundColor="transparent";
    }
    
}

rangeAwGglIp.addEventListener("input", calculateAwTotal);
rangeAwLiIp.addEventListener("input", calculateAwTotal);
rangeAwInstaIp.addEventListener("input", calculateAwTotal);
rangeAwFbIp.addEventListener("input", calculateAwTotal);
rangeAwTwIp.addEventListener("input", calculateAwTotal);
rangeAwWpIp.addEventListener("input", calculateAwTotal);
rangeAwEmIp.addEventListener("input", calculateAwTotal);
//*Alert users that the total  range of the inputs should notbe above 100
rangeAwGglIp.addEventListener("change", promptTotalRangeAw);
rangeAwLiIp.addEventListener("change", promptTotalRangeAw);
rangeAwInstaIp.addEventListener("change", promptTotalRangeAw);
rangeAwFbIp.addEventListener("change", promptTotalRangeAw);
rangeAwTwIp.addEventListener("change", promptTotalRangeAw);
rangeAwWpIp.addEventListener("change", promptTotalRangeAw);
rangeAwEmIp.addEventListener("change", promptTotalRangeAw);

//*Alert users that the total  range of the inputs should notbe above 100
function promptTotalRangeAw(){
    let totalRangeAw =Number(rangeAwGglIp.value)+Number(rangeAwLiIp.value)+Number(rangeAwInstaIp.value)+Number(rangeAwFbIp.value)+Number(rangeAwTwIp.value)+ Number(rangeAwWpIp.value)+ Number(rangeAwEmIp.value);
    if(totalRangeAw>100){
        alert("🤔😮Total split percentage TOTAL cannot be above 100")

    }
}

//*USER input and range slider input sync
//DONE:User input and range slider SYNC

//DONE:Google
//? range input id-> googleAwarenessInputId
//? num input id --> googleAwarenessInputId_nm

function changeRangeValueAwGgl(val){
    document.getElementById("googleAwarenessInputId").value = isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}
function changeInputValueAwGgl(val){
    document.getElementById("googleAwarenessInputId_nm").value=isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}

//Done: LinkedIn
//? range input id-> linkedInAwarenessInputId
//? num input id --> linkedInAwarenessInputId_nm
function changeRangeValueAwLi(val){
    document.getElementById("linkedInAwarenessInputId").value = isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}
function changeInputValueAwLi(val){
    document.getElementById("linkedInAwarenessInputId_nm").value=isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}

//DONE: Instagram
//? range input id-> instagramAwarenessInputId
//? num input id --> instagramAwarenessInputId_nm

function changeRangeValueAwIns(val){
    document.getElementById("instagramAwarenessInputId").value = isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}
function changeInputValueAwIns(val){
    document.getElementById("instagramAwarenessInputId_nm").value=isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}


//Done: Facebook
//? range input id-> facebookAwarenessInputId
//? num input id --> facebookAwarenessInputId_nm

function changeRangeValueAwFb(val){
    document.getElementById("facebookAwarenessInputId").value = isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}
function changeInputValueAwFb(val){
    document.getElementById("facebookAwarenessInputId_nm").value=isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}

//DONE: Twitter
//? range input id-> twitterAwarenessInputId
//? num input id --> twitterAwarenessInputId_nm

function changeRangeValueAwTw(val){
    document.getElementById("twitterAwarenessInputId").value = isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}
function changeInputValueAwTw(val){
    document.getElementById("twitterAwarenessInputId_nm").value=isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}

//Done: WhatsApp/IM
//? range input id-> whatsAppImAwarenessInputId
//? num input id --> whatsAppImAwarenessInputId_nm

function changeRangeValueAwWa(val){
    document.getElementById("whatsAppImAwarenessInputId").value =isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
    // console.log('Wa input is working')
}
function changeInputValueAwWa(val){
    document.getElementById("whatsAppImAwarenessInputId_nm").value=isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
    
}

//Done: Email
//? range input id-> emailAwarenessInputId
//? num input id --> emailAwarenessInputId_nm

function changeRangeValueAwEm(val){
    document.getElementById("emailAwarenessInputId").value =isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
    // console.log('Wa input is working')
}
function changeInputValueAwEm(val){
    document.getElementById("emailAwarenessInputId_nm").value=isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
    
}