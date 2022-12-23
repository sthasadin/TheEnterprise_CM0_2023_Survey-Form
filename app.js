//done: alternative js for form data to gsheet
    //     const form = document.querySelector('#trendsSuveryForm')
    //     const submitButton = document.querySelector("#submit")
    //     const scriptURL='https://script.google.com/macros/library/d/1YAg0fQRyOgaLF1dpb-OQIL7g84Dz3xhAx3ZjFxDIaEPDkBEO-QuCH0Di/1'
    
    //     form.addEventListener('submit', e => {
    //      submitButton.disabled = true
    //      e.preventDefault()
    //      let requestBody = new FormData(form)
    //      fetch(scriptURL, { method: 'POST', body: requestBody})
    //        .then(response => {
    //           alert('Success!', response)
    //           submitButton.disabled = false
    //          })
    //        .catch(error => {
    //        alert('Error!', error.message)
    //          submitButton.disabled = false
    
    //        }
    //        )
    //    })
    

//done: Added to main index.html
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//     var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     var scrolled = (winScroll / height) * 100;
//     document.getElementById("pb-bar").style.width = scrolled + "%";
//   }
//*USER input and range slider input sync
//done:User input and range slider SYNC

//done: Google
//?#input range -> googleInputId
//?#input num -> googleInputId_nm
function changeRangeValue(val){
    document.getElementById("googleInputId").value = isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}
function changeInputValue(val){
    document.getElementById("googleInputId_nm").value=isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}
//done: LinkedIn
//?#input range -> linkedInInputId
//?#input num -> linkedInInputId_nm
function changeRangeValueLi(val){
    document.getElementById("linkedInInputId").value = isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}
function changeInputValueLi(val){
    document.getElementById("linkedInInputId_nm").value=isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}
//done: Instagram
//?#input range -> instagramInputId
//?#input num ->instagramInputId_nm
function changeRangeValueIns(val){
    document.getElementById("instagramInputId").value = isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}
function changeInputValueIns(val){
    document.getElementById("instagramInputId_nm").value=isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}
//done: Facebook
//?#input range -> facebookInputId
//?#input num ->facebookInputId_nm
function changeRangeValueFb(val){
    document.getElementById("facebookInputId").value = isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}
function changeInputValueIFb(val){
    document.getElementById("facebookInputId_nm").value=isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}
//done: Twitter
//?#input range -> twitterInputId
//?#input num ->twitterInputId_nm
function changeRangeValueTw(val){
    document.getElementById("twitterInputId").value = isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}
function changeInputValueITw(val){
    document.getElementById("twitterInputId_nm").value=isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}
//done: Whatsapp
//?#input range -> whatsAppImInputId
//?#input num ->whatsAppImInputId_nm
function changeRangeValueWa(val){
    document.getElementById("whatsAppImInputId").value = isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}
function changeInputValueWa(val){
    document.getElementById("whatsAppImInputId_nm").value=isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}
//done: Email
//?#input range -> emailInputId
//?#input num ->emailInputId_nm
function changeRangeValueEm(val){
    document.getElementById("emailInputId").value = isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}
function changeInputValueEm(val){
    document.getElementById("emailInputId_nm").value=isNaN(parseInt(val,10))?0:parseInt(val,10);
    showValue1(val);
}

//*XX----USER input and range slider input sync--XX



let rangeGglIp = document.getElementById("googleInputId");
let rangeLiIp= document.getElementById("linkedInInputId");
let rangeInstaIp= document.getElementById("instagramInputId");
let rangeFbIp= document.getElementById("facebookInputId");
let rangeTwIp= document.getElementById("twitterInputId");
let rangeWpIp= document.getElementById("whatsAppImInputId");
let rangeEmIp= document.getElementById("emailInputId");


let totalValue= document.getElementById("total");

// *Calulate Total Range and update in top of the table
function calculateTotal(){
    let total = Number(rangeGglIp.value) + Number(rangeLiIp.value) + Number(rangeInstaIp.value)+ Number(rangeFbIp.value)+ Number(rangeTwIp.value)+ Number(rangeWpIp.value)+ Number(rangeEmIp.value);
    totalValue.innerHTML=total;
    if(total>100){
        // document.getElementsByClassName("num_td").style.backgroundColor="red";
        document.getElementById("total").style.backgroundColor="red";
        document.getElementById("total").style.borderRadius="20%";
        document.getElementById("total").style.paddingLeft="2px";
        document.getElementById("total").style.paddingRight="2px";
        document.getElementById("total").style.color="white";
    } 
    if(total<=100){
        document.getElementById("total").style.color="green";
        document.getElementById("total").style.backgroundColor="transparent";
    }
}

rangeGglIp.addEventListener("input", calculateTotal);
rangeLiIp.addEventListener("input", calculateTotal);
rangeInstaIp.addEventListener("input", calculateTotal);
rangeFbIp.addEventListener("input", calculateTotal);
rangeTwIp.addEventListener("input", calculateTotal);
rangeWpIp.addEventListener("input", calculateTotal);
rangeEmIp.addEventListener("input", calculateTotal);


//*Alert users that the total  range of the inputs should notbe above 100
function promptTotalRange(){
    let totalRange = parseInt(rangeGglIp.value)+parseInt(rangeLiIp.value) + parseInt(rangeInstaIp.value) + parseInt(rangeFbIp.value)+ parseInt(rangeTwIp.value)+ parseInt(rangeWpIp.value)+ parseInt(rangeEmIp.value);
    if(totalRange>100){
        alert("🤔😮Total split percentage TOTAL cannot be above 100");
        // document.getElementById("total").style.color="red";
    }
}
rangeGglIp.addEventListener("change",  promptTotalRange);
rangeLiIp.addEventListener("change",  promptTotalRange);
rangeInstaIp.addEventListener("change",  promptTotalRange);
rangeFbIp.addEventListener("change",  promptTotalRange);
rangeTwIp.addEventListener("change",  promptTotalRange);
rangeWpIp.addEventListener("change",  promptTotalRange);
rangeEmIp.addEventListener("change",  promptTotalRange);



