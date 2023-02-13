const productArray = [
    {
        name : "vegies",
        imgUrl : "./assets/side1.jpg",
    },
    {
        name : "smokes",
        imgUrl : "./assets/blinkit1.jpg",
    },
    {
        name : "papers",
        imgUrl : "./assets/blinkit1.jpg"

    },
    {
        name : "lighters",
        imgUrl :"./assets/blinkit1.jpg",
    },
    {
        name : "milk products",
        imgUrl : "./assets/side.jpg"
    }
];

// 
document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("vertical-menu");
    productArray.map((product)=>{
        const node = document.createElement("a");
        node.setAttribute("href","#");
        const img = document.createElement("img");
        img.setAttribute("src",product.imgUrl);
        img.setAttribute("height","75px");
        const textnode = document.createTextNode(product.name);
        node.appendChild(img);
        node.appendChild(textnode);
        menu.appendChild(node);
    });
  });

