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
}

rangeAwGglIp.addEventListener("input", calculateAwTotal);
rangeAwLiIp.addEventListener("input", calculateAwTotal);
rangeAwInstaIp.addEventListener("input", calculateAwTotal);
rangeAwFbIp.addEventListener("input", calculateAwTotal);
rangeAwTwIp.addEventListener("input", calculateAwTotal);
rangeAwWpIp.addEventListener("input", calculateAwTotal);
rangeAwEmIp.addEventListener("input", calculateAwTotal);

//*USER input and range slider input sync
//TODO:User input and range slider SYNC

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

//TODO: Instagram

//TODO: Facebook

//TODO: Twitter

//TODO: WhatsApp/IM

//TODO: Email