function validateCardNumber(value) {
    let cardNumber = document.getElementById('cardnumber');
    let cardNumberError = document.getElementById('cardNumberError');

    // what i want to do next mean
    // ^: means the input should start with the following
    // \d: zero to 9.. *: means same number can occur 
    if (!/^\d*$/.test(value)) {
        // if the input does not contain number if the person write in letter or anything if it not number its reaction
        cardNumber.style.border = "2px solid red";
        cardNumberError.innerHTML = "Wrong format, numbers only.";
        

    } else {
        cardNumberError.innerHTML = "";
        cardNumber.style.border = "2px solid  hsl(249, 99%, 64%)";
    }

}
// now i want anything i press should be showing in the card number 
//am going to use evenlistener instead of click i will use input
document.getElementById('cardnumber').addEventListener('input', function() {
     // Get the entered number
     let enteredNumber = this.value;
     
      // Display the entered number in the display container
      let displayContainer1 = document.querySelector('.number1');
      if (enteredNumber.length >= 1) {
        displayContainer1.textContent = enteredNumber.slice(0, 4);
      } else {
        displayContainer1.textContent = '0000';
      }
     

      let displayContainer2 = document.querySelector('.number2');
      if (enteredNumber.length >= 5) {
        displayContainer2.textContent = enteredNumber.slice(4, 8);
      } else {
        displayContainer2.textContent = '0000';
      }

      let displayContainer3 = document.querySelector('.number3');
      if (enteredNumber.length >= 9) {
        displayContainer3.textContent = enteredNumber.slice(8, 12);
      } else {
        displayContainer3.textContent = '0000';
      }

      let displayContainer4 = document.querySelector('.number4');
      if (enteredNumber.length >= 13) {
        displayContainer4.textContent = enteredNumber.slice(12, 16);
      } else {
        displayContainer4.textContent = '0000';
      }



});
  // now i want anything i press should be showing in the cardholder name 
//am going to use evenlistener instead of click i will use input so any name i pust will be showing 
document.getElementById('CardholderName').addEventListener('input', function() {  
// create a value for keywords
let words = this.value;
//anything i type in the input it should display in card_name
let cardName = document.querySelector('.card_name');
if (words.trim() !== "") {
    cardName.textContent = words;
  } else {
    cardName.textContent = " Jesse Afuye"; // what will dsiplay if no name 
  }

});

// now i want anything i press should be shoing in exp
document.getElementById('exp').addEventListener('input', function() {
let exp = this.value;
//anything i type in the input it should display in exp
let db1 = document.querySelector('.db1');
if (exp.trim() !== "") {
    db1.textContent = exp;
  } else {
    db1.textContent = " 00"; // what will dsiplay if no name 
  }

});

// now i want anything i press should be shoing in (MM/YY)
document.getElementById('Date(MM/YY)').addEventListener('input', function() {
    let mmy = this.value;
    //anything i type in the input it should display in Date (MM/YY)
    let db2 = document.querySelector('.db2');
    if (mmy.trim() !== "") {
        db2.textContent = mmy;
      } else {
        db2.textContent = " 00"; // what will dsiplay if no name 
      }
    
    });
      // now i want anything i press should be shoing in (MM/YY)
document.getElementById('CVC').addEventListener('input', function() {
    let cvc = this.value;
    //anything i type in the input it should display in Date (MM/YY)
    let cardCvc = document.querySelector('.card_cvc');
  if (cvc.trim() !== "") {
    cardCvc.textContent = cvc;
  } else {
    cardCvc.textContent = " 000"; // what will dsiplay if no name 
  }
    
});
// i made variables for each of the things i dont want to see if i click confrim button and things i want to see when i click the button
let button = document.querySelector('.button1');
let formContainer = document.querySelector('.form-container');
let formContainer1 = document.querySelector('.form_container2');
let edm = document.querySelector('.edm');
let backPage = document.querySelector('.back_page');
let formContainerLast = document.querySelector('.form-container3');



// i made sure all the things i dont want to to see i put display non
// what i want to see i put display block
button.addEventListener('click', (event) => {
    
    event.preventDefault(); // Prevent default behavior of opening a new page
    if (isFormValid()) {
      backPage.style.display = 'block';
      formContainerLast.style.display = 'none';
    formContainer.style.display = 'none';
    formContainer1.style.display = 'none';
    button.style.display = 'none';
    if(edm) {
      edm.style.display = 'none';

    }
    
    }
    
  });

  //i want whener i did not fill any input and i click confirm it should write cant be blank
  // what happen when the input are not filled 
  function isFormValid() {
    let isValid = true;
    // Check Cardholder Name
  
  let cardHolderName = document.getElementById('CardholderName').value;
  if (cardHolderName.trim() === '') {
      isValid = false;
      document.getElementById('CardholderName').style.border = "2px solid red";
      document.getElementById('cardholderNameError').innerHTML = " blank.";
  } else {
      document.getElementById('CardholderName').style.border = "2px hsl(278, 94%, 30%)"; // Reset border
      document.getElementById('cardholderNameError').style.border = "2px hsl(278, 94%, 30%)";
  }
  

     // Check exp
     let exp = document.getElementById('exp').value;
     if (exp.trim() === '') {
       isValid = false;
       document.getElementById('exp').style.border = "2px solid red";
       document.getElementById('expError').innerHTML = "blank.";
   } else {
       document.getElementById('expError').innerHTML = '';
   }
   

     // Check Date (MM/YY)
     let date = document.getElementById('Date(MM/YY)').value;
     if (date.trim() === '') {
       isValid = false;
       document.getElementById('Date(MM/YY)').style.border = "2px solid red";
       document.getElementById('dateError').innerHTML = "blank.";
      
   } else {
       document.getElementById('dateError').innerHTML = '';
   }
    
    // Check Date cvc
    let cvc = document.getElementById('CVC').value;
    if (cvc.trim() === '') {
      isValid = false;
      document.getElementById('CVC').style.border = "2px solid red";
      document.getElementById('cvcError').innerHTML = " blank.";
  } else {
      document.getElementById('cvcError').innerHTML = '';
  }

  return isValid;
  }
  // i want when ever i type letter in exp it should not allow only numbers
  document.getElementById('CardholderName').addEventListener('input', function() {
    // Check if the input contains only number characters
    {

        // If input is valid (contains only numbers), set border to blue and reset error message
        this.style.border = "2px solid hsl(249, 99%, 64%)";
        document.getElementById('cardholderNameError').innerHTML = "";
    }
});
  // i want when ever i type letter in exp it should not allow only numbers
  document.getElementById('exp').addEventListener('input', function() {
    // Check if the input contains only number characters
    if (/[^0-9]/.test(this.value)) {
      // If there is a non-numeric character, set border to red and show an error message
      this.style.border = "2px solid red";
      document.getElementById('expError').innerHTML = "Only numbers.";
    } else {

        // If input is valid (contains only numbers), set border to blue and reset error message
        this.style.border = "2px solid hsl(249, 99%, 64%)";
        document.getElementById('expError').innerHTML = "";
    }
});
 // i want when ever i type letter in date it should not allow only numbers
 document.getElementById('Date(MM/YY)').addEventListener('input', function() {
  // Check if the input contains only number characters
  if (/[^0-9]/.test(this.value)) {
    // If there is a non-numeric character, set border to red and show an error message
    this.style.border = "2px solid red";
    document.getElementById('dateError').innerHTML = "Only numbers.";
  } else {

      // If input is valid (contains only numbers), set border to blue and reset error message
      this.style.border = "2px solid hsl(249, 99%, 64%)";
      document.getElementById('dateError').innerHTML = "";
  }
});
 // i want when ever i type letter in cvc it should not allow only numbers
 document.getElementById('CVC').addEventListener('input', function() {
  // Check if the input contains only number characters
  if (/[^0-9]/.test(this.value)) {
    // If there is a non-numeric character, set border to red and show an error message
    this.style.border = "2px solid red";
    document.getElementById('cvcError').innerHTML = "Only numbers.";
  } else {

      // If input is valid (contains only numbers), set border to blue and reset error message
      this.style.border = "2px solid hsl(249, 99%, 64%)";
      document.getElementById('cvcError').innerHTML = "";
  }
});