var cartList = JSON.parse(localStorage.getItem("cartList")) || {};

function genereateHTMLElement(elementType) {
  return document.createElement(elementType);
}

document.addEventListener("DOMContentLoaded", function () {
  const clearCart = document.getElementById("clearCart");

  clearCart.addEventListener("click", () => {
    cartList = [];
    updateLocalStorage(cartList);
    location.reload();
  });
});

const generateItem = (productList) => {
  const grid = document.getElementById("grid-container");

  while (grid.hasChildNodes()) {
    grid.removeChild(grid.firstChild);
  }
  productList.map((item) => {
    var b = genereateHTMLElement("b");
    var textnode = document.createTextNode(item.qty);
    b.appendChild(textnode);
    const button = genereateHTMLElement("button");
    button.appendChild(b);

    const p1 = genereateHTMLElement("p");
    const s = genereateHTMLElement("s");
    textnode = document.createTextNode(item.product.price);
    s.appendChild(textnode);
    p1.appendChild(s);

    const p2 = genereateHTMLElement("p");
    p2.setAttribute("class", "price");
    b = genereateHTMLElement("b");
    textnode = document.createTextNode(item.product.discountedPrice);
    b.appendChild(textnode);
    p2.appendChild(b);

    const h1 = genereateHTMLElement("h1");
    textnode = document.createTextNode(item.product.name);
    h1.appendChild(textnode);

    const p3 = genereateHTMLElement("p");
    textnode = document.createTextNode(item.product.quantity);
    p3.appendChild(textnode);

    const img = document.createElement("img");
    img.setAttribute("src", item.product.imgurl);
    img.setAttribute("height", "75px");

    const div1 = genereateHTMLElement("div");
    div1.setAttribute("class", "containerbutton");
    b = genereateHTMLElement("b");
    textnode = document.createTextNode("10% off");
    b.appendChild(textnode);
    div1.appendChild(textnode);

    const div2 = genereateHTMLElement("div");
    div2.setAttribute("class", "card");
    div2.appendChild(div1);
    div2.appendChild(img);
    div2.appendChild(h1);
    div2.appendChild(p3);
    div2.appendChild(p2);
    div2.appendChild(p1);
    div2.appendChild(button);
    const div3 = genereateHTMLElement("div");
    div3.setAttribute("class", "item");
    div3.appendChild(div2);

    grid.appendChild(div3);
  });
};

generateItem(cartList);

const updateLocalStorage = (data) => {
  localStorage.setItem("cartList", JSON.stringify(data));
};
