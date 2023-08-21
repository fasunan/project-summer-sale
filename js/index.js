
let cardCount = 0;
let dataTotalAmount = 0;

const modal = document.getElementById("my_modal_8");

const buttonApply = document.getElementById("btn-apply");

const purchaseButton = document.getElementById("btn-purchase");

const sellCouponButton = document.getElementById("sell-coupon");

const insertedCoupon = document.getElementById("coupon-code");

function handleCardClick(event) {

  cardCount++;

  const cardName = event.currentTarget.querySelector(".text-xl.font-medium");

  const cardNameText = cardName.textContent;

  const products = document.querySelector(".products");
  const cardNameElement = document.createElement("li");
  cardNameElement.textContent = `${cardCount}. ${cardNameText}`;

  products.appendChild(cardNameElement);

  const cardValue = event.currentTarget.querySelector(".card-value");

  const newCardValueString = cardValue.innerText;
  const addingCardValue = parseFloat(newCardValueString);

  const totalPrice = document.getElementById("add-total");

  dataTotalAmount = addingCardValue + dataTotalAmount;

  totalPrice.innerText = dataTotalAmount;

  if (dataTotalAmount > 0) {

    purchaseButton.disabled = false;

    const totalPriceData = document.getElementById("add-total");
    const discountData = document.getElementById("discount");
    const totalPriceAfterDiscountData = document.getElementById("total");

    let totalPriceText = parseInt(totalPriceData.innerText);

    totalPriceAfterDiscountData.innerText = totalPriceText;

    const applyButton = document.getElementById("btn-apply");
    const coupon = sellCouponButton.innerText;

    applyButton.addEventListener("click", function () {

      const inputCoupon = insertedCoupon.value;

      if (coupon === inputCoupon) {

        const discount = totalPriceText * 0.2;
        const totalAmountAfterDiscount = totalPriceText - discount;

        discountData.innerText = discount;
        totalPriceAfterDiscountData.innerText = totalAmountAfterDiscount;
      }
    });

    if (dataTotalAmount > 0) {

      purchaseButton.addEventListener("click", function () {
        modal.classList.remove("hidden");
      });

      modal.addEventListener("click", function (event) {
        if (event.target === modal) {
          modal.classList.add("hidden");
        }
      });
    }
  }

  if (dataTotalAmount >= 200) {

    buttonApply.disabled = false;
  }
}

const cardElements = document.querySelectorAll(".card");

cardElements.forEach(function (cardElement) {

  cardElement.addEventListener("click", handleCardClick);
});
