const productArray = [
  {
    name: "vegies",
    imgUrl: "./assets/side1.jpg",
  },
  {
    name: "smokes",
    imgUrl: "./assets/blinkit1.jpg",
  },
  {
    name: "snacks",
    imgUrl: "./assets/blinkit1.jpg",
  },
  {
    name: "drinks",
    imgUrl: "./assets/blinkit1.jpg",
  },
  {
    name: "milk products",
    imgUrl: "./assets/side.jpg",
  },
];

//
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("vertical-menu");
  productArray.map((product) => {
    const a = document.createElement("a");
    a.setAttribute("href", "#");
    a.setAttribute("id", product.name);
    const img = document.createElement("img");
    img.setAttribute("src", product.imgUrl);
    img.setAttribute("height", "75px");
    const textnode = document.createTextNode(product.name);
    a.appendChild(img);
    a.appendChild(textnode);
    menu.appendChild(a);
  });
});

const allProducts = [
  {
    name: "carrot",
    imgurl: "./assets/blinkit4.jpg",
    price: "150",
    discountedPrice: "100",
    id: "vegies",
    quantity: "1 kg",
  },
  {
    name: "lighter",
    imgurl: "./assets/blinkit1.jpg",
    price: "40",
    discountedPrice: "30",
    id: "smokes",
    quantity: "1 piece",
  },
  {
    name: "tamatos",
    imgurl: "./assets/blinkit5.jpg",
    price: "100",
    discountedPrice: "70",
    id: "vegies",
    quantity: "1 kg",
  },
  {
    name: "onion",
    imgurl: "./assets/blinkit2.jpg",
    price: "140",
    discountedPrice: "130",
    id: "vegies",
    quantity: "1 kg",
  },
  {
    name: "Butter oil",
    imgurl: "./assets/blinkit3.jpg",
    price: "1000",
    discountedPrice: "700",
    id: "milk products",
    quantity: "300 ml",
  },
  {
    name: "Green kwei",
    imgurl: "./assets/blinkit6.jpg",
    price: "170",
    discountedPrice: "120",
    id: "snacks",
    quantity: "4 pieces",
  },
  {
    name: "Fortune Aata",
    imgurl: "./assets/blinkit7.jpg",
    price: "250",
    discountedPrice: "200",
    id: "snacks",
    quantity: "1kg",
  },
  {
    name: "lays",
    imgurl: "./assets/blinkit8.jpg",
    price: "40",
    discountedPrice: "20",
    id: "snacks",
    quantity: "1 pack",
  },
  {
    name: "limka",
    imgurl: "./assets/blinkit9.jpg",
    price: "60",
    discountedPrice: "50",
    id: "drinks",
    quantity: "750 ml",
  },
];

function genereateHTMLElement(elementType) {
  return document.createElement(elementType);
}

function filterarray(filterid = "all") {
  console.log(filterid);
  if (filterid === "all") return allProducts;
  const filteredarray = [];
  allProducts.map((product) => {
    if (product.id === filterid) {
      filteredarray.push(product);
    }
  });
  console.log(filteredarray);
  return filteredarray;
}

document.addEventListener("DOMContentLoaded", function () {
  var productList = allProducts;

  document.getElementById("all").addEventListener("click", () => {
    productList = filterarray("all");
    generateItem(productList);
  });

  document.getElementById("vegies").addEventListener("click", () => {
    productList = filterarray("vegies");
    generateItem(productList);
  });

  document.getElementById("smokes").addEventListener("click", () => {
    productList = filterarray("smokes");
    generateItem(productList);
  });

  document.getElementById("snacks").addEventListener("click", () => {
    productList = filterarray("snacks");
    generateItem(productList);
  });

  document.getElementById("drinks").addEventListener("click", () => {
    productList = filterarray("drinks");
    generateItem(productList);
  });

  document.getElementById("milk products").addEventListener("click", () => {
    productList = filterarray("milk products");
    generateItem(productList);
  });
});

const generateItem = (productList) => {
  const grid = document.getElementById("grid-container");

  while (grid.hasChildNodes()) {
    grid.removeChild(grid.firstChild);
  }
  productList.map((product) => {
    var b = genereateHTMLElement("b");
    var textnode = document.createTextNode("ADD");
    b.appendChild(textnode);
    const button = genereateHTMLElement("button");
    button.appendChild(b);

    const p1 = genereateHTMLElement("p");
    const s = genereateHTMLElement("s");
    textnode = document.createTextNode(product.price);
    s.appendChild(textnode);
    p1.appendChild(s);

    const p2 = genereateHTMLElement("p");
    p2.setAttribute("class", "price");
    b = genereateHTMLElement("b");
    textnode = document.createTextNode(product.discountedPrice);
    b.appendChild(textnode);
    p2.appendChild(b);

    const h1 = genereateHTMLElement("h1");
    textnode = document.createTextNode(product.name);
    h1.appendChild(textnode);

    const p3 = genereateHTMLElement("p");
    textnode = document.createTextNode(product.quantity);
    p3.appendChild(textnode);

    const img = document.createElement("img");
    img.setAttribute("src", product.imgurl);
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
