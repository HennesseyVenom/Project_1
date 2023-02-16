const deliveryArray = [
    {
        name:"smokes",
    },

    {
        name:"veg",
    },
    {
        name:"nonveg",
    },
    {
        name:"grossory"
    },
    {
        name:"fruits and vegitables",
    },
    {
        name:"dairy products",
    },
];

document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("navBar");
    deliveryArray.map((delivery)=>{
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.setAttribute("href","#");
        const textnode = document.createTextNode(delivery.name);
        a.appendChild(textnode);
        li.appendChild(a);
        menu.appendChild(li);
    });
  });

