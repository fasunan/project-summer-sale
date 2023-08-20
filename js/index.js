document.getElementById('card-1').addEventListener('click', function(){
   const cardValue=document.getElementById('card-1value');
   const newCardValueString=cardValue.innerText;
   const addingCardValue=parseFloat(newCardValueString);
   
   const totalPrice=document.getElementById('add-total');
   const newAddTotalString=totalPrice.innerText;
   const newAddTotal=parseFloat(newAddTotalString);
   
   const addTotal= addingCardValue + newAddTotal;
   totalPrice.innerText=addTotal;
   
})
// card-2
document.getElementById('card-2').addEventListener('click', function(){
   const cardTwoValue=document.getElementById('card-2value');
   const newCardValueString=cardTwoValue.innerText;
   const addingCardTwoValue=parseFloat(newCardValueString);
   
   const totalPrice=document.getElementById('add-total');
   const newAddTotalString=totalPrice.innerText;
   const newAddTotal=parseFloat(newAddTotalString);
   
   const addTotal= addingCardTwoValue + newAddTotal;
   totalPrice.innerText=addTotal;
   
})
// card-3
document.getElementById('card-3').addEventListener('click', function(){
   const thirdCardValue=document.getElementById('card-3value');
   const newCardValueString=thirdCardValue.innerText;
   const thirdCardValueAdd=parseFloat(newCardValueString);
   
   const totalPrice=document.getElementById('add-total');
   const newAddTotalString=totalPrice.innerText;
   const newAddTotal=parseFloat(newAddTotalString);
   
   const addTotal= thirdCardValueAdd + newAddTotal;
   totalPrice.innerText=addTotal;
   
})

// card-4
document.getElementById('card-4').addEventListener('click', function(){
   const fourCardValue=document.getElementById('card-4value');
   const newFourCardValueString=fourCardValue.innerText;
   const addingFourCard=parseFloat(newFourCardValueString);
   
   const totalPrice=document.getElementById('add-total');
   const newAddTotalString=totalPrice.innerText;
   const newAddTotal=parseFloat(newAddTotalString);
   
   const addTotal= addingFourCard + newAddTotal;
   totalPrice.innerText=addTotal;
   
})

// // card-5
document.getElementById('card-5').addEventListener('click', function(){
   const cardFiveValue=document.getElementById('card-5value');
   const newCardValueString=cardFiveValue.innerText;
   const addingCardFiveValue=parseFloat(newCardValueString);
   
   const totalPrice=document.getElementById('add-total');
   const newAddTotalString=totalPrice.innerText;
   const newAddTotal=parseFloat(newAddTotalString);
   
   const addTotal= addingCardFiveValue + newAddTotal;
   totalPrice.innerText=addTotal;
   
})

// // card-6
document.getElementById('card-6').addEventListener('click', function(){
   const cardSixValue=document.getElementById('card-6value');
   const newCardValueString=cardSixValue.innerText;
   const addingCardSixValue=parseFloat(newCardValueString);
   
   const totalPrice=document.getElementById('add-total');
   const newAddTotalString=totalPrice.innerText;
   const newAddTotal=parseFloat(newAddTotalString);
   
   const addTotal= addingCardSixValue + newAddTotal;
   totalPrice.innerText=addTotal;
   
   
})




const discountPriceField=document.getElementById('discount-price');
const discountPriceString=discountPriceField.innerText;
const newDiscountPrice=parseFloat(discountPriceString);
console.log(
   discountPrice
);
const discountPrice= 20%  newAddTotal;