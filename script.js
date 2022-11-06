// bank project
alert('Welcome.. Please touch your card');

var mainAmount = 100;
var aditionalAmount = 100;
var totalAmount = mainAmount + aditionalAmount;

var result = prompt('Please enter the amount you wish to receive..');
var wishAmount = parseFloat(result);

const giveMoney = function (amount) {

  if (!result) {
    alert('Thank you, please get your card..')
  }

  if (amount < mainAmount) {
    alert('Please get your money');
  }

  else if (amount > mainAmount) {

    var question = confirm('Sorry, in your main account don\'t have enough amount to receive. Do you want to check additionol acount?.');

    if (question) {

      if (totalAmount > wishAmount) {
        alert('Congrats.. Please get your money');
      }

      else {
        alert('Sorry, you don\'t have enough money in your account')
      }

    }

    else {
      alert('So, welcome, see you soon ')
    }

  }

};

giveMoney(wishAmount);

