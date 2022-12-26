// let rangeQlGglIp = document.getElementById("googleQLeadsInputId");
// let rangeQlLiIp= document.getElementById("linkedInAwarenessInputId");
// let rangeQlInstaIp= document.getElementById("instagramAwarenessInputId");
// let rangeQlFbIp= document.getElementById("facebookAwarenessInputId");
// let rangeQlTwIp= document.getElementById("twitterAwarenessInputId");
// let rangeQlWpIp= document.getElementById("whatsAppImAwarenessInputId");
// let rangeQlEmIp= document.getElementById("emailAwarenessInputId");

// let totalMqValue = document.getElementById("totalQl-sp")

//*USER input and range slider input sync
//TODO:User input and range slider SYNC

//Done: Google
//? range input id-> googleQLeadsInputId
//? num input id --> googleQLeadsInputId_nm

function changeRangeValueQlGgl(val){
    document.getElementById("googleQLeadsInputId").value = isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}
function changeInputValueQlGgl(val){
    document.getElementById("googleQLeadsInputId_nm").value=isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}

//DONE: LinkedIn
//? range input id-> linkedInQLeadsInputId
//? num input id --> linkedInQLeadsInputId_nm
function changeRangeValueQlLi(val){
    document.getElementById("linkedInQLeadsInputId").value = isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}
function changeInputValueQlLi(val){
    document.getElementById("linkedInQLeadsInputId_nm").value=isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}

//DONE: Instagram
//? range input id-> instagramQLeadsInputId
//? num input id --> instagramQLeadsInputId_nm

function changeRangeValueQlIns(val){
    document.getElementById("instagramQLeadsInputId").value = isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}
function changeInputValueQlIns(val){
    document.getElementById("instagramQLeadsInputId_nm").value=isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}

//Done: Facebook
//? range input id-> facebookQLeadsInputId
//? num input id --> facebookQLeadsInputId_nm

function changeRangeValueQlFb(val){
    document.getElementById("facebookQLeadsInputId").value = isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}
function changeInputValueQlFb(val){
    document.getElementById("facebookQLeadsInputId_nm").value=isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}

//Done: Twitter
//? range input id-> twitterQLeadsInputId
//? num input id --> twitterQLeadsInputId_nm

function changeRangeValueQlTw(val){
    document.getElementById("twitterQLeadsInputId").value = isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}
function changeInputValueQlTw(val){
    document.getElementById("twitterQLeadsInputId_nm").value=isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}

//Done: Whatsapp
//? range input id-> whatsAppImQLeadsInputId
//? num input id --> whatsAppImQLeadsInputId_nm

function changeRangeValueQlWa(val){
    document.getElementById("whatsAppImQLeadsInputId").value =isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
    // console.log('Wa input is working')
}
function changeInputValueQlWa(val){
    document.getElementById("whatsAppImQLeadsInputId_nm").value=isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
    
}

//Done: Email
//? range input id-> emailQLeadsInputId
//? num input id --> emailQLeadsInputId_nm

function changeRangeValueQlEm(val){
    document.getElementById("emailQLeadsInputId").value =isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
    // console.log('Wa input is working')
}
function changeInputValueQlEm(val){
    document.getElementById("emailQLeadsInputId_nm").value=isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
    
}