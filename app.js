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

document.getElementById('trendsSuveryForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from being submitted
  
    // Perform form validation or other processing here
  
    // Redirect the user to a different page
    window.location.href = 'https://theenterprise.news';
  });
  




