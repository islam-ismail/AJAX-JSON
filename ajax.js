const btn = document.querySelector(".btn");
const cartInfo = document.querySelector(".cartInfo");
const itemInfo = document.querySelector(".itemInfo");

btn.addEventListener("click", () => {
  getData("cart.json");
});

function getData(url) {
  const ajax = new XMLHttpRequest();

  ajax.open("GET", url, true);

  ajax.onload = function() {
    if (this.status === 200) {
      const data = JSON.parse(this.responseText);
      cartInfo.innerHTML = `
      <p>${data.cartInfo.name}</p>
      <p>${data.cartInfo.store}</p>`;
      let display = "";

      //filter our array by price  before display
      let specialItems = data.cartItems.filter(item => {
        return item.price > 10;
      });

      //looping on our array
      specialItems.forEach(item => {
        display += `<div class = 'item'>
        <p>Item ID: ${item.id}</p>
        <p>Item Name: ${item.name}</p>
        <p>Item Price: ${item.price}</p>
        </div>`;

        itemInfo.innerHTML = display;
      });
    } else {
    }
  };

  ajax.send();
}
