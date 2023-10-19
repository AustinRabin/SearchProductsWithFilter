let products = {
    data: [
        {
            name: "",
            category: "",
            price: "",
            image: "",
        },
        {
            name: "",
            category: "",
            price: "",
            image: "",
        },
        {
            name: "",
            category: "",
            price: "",
            image: "",
        },
        {
            name: "",
            category: "",
            price: "",
            image: "",
        },
        {
            name: "",
            category: "",
            price: "",
            image: "",
        },
        {
            name: "",
            category: "",
            price: "",
            image: "",
        },
        {
            name: "",
            category: "",
            price: "",
            image: "",
        },
        {
            name: "",
            category: "",
            price: "",
            image: "",
        },
        {
            name: "",
            category: "",
            price: "",
            image: "",
        },
        {
            name: "",
            category: "",
            price: "",
            image: "",
        },
    ]
};

for (let i of products.data) {
    let productBlock = document.createElement("div");
    productBlock.classList.add("productBlock", i.category, "hide");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    productBlock.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let productName = document.createElement("h5");
    productName.classList.add("product-name");
    productName.innerHTML = i.name;
    container.appendChild(productName);

    let priceOfProduct = document.createElement("h6");
    priceOfProduct.innerText = "$" + i.price;
    imgContainer.appendChild(priceOfProduct);
    productBlock.appendChild(imgContainer);
    document.getElementById("products").appendChild(productBlock);
}

function filterProducts(value) {
    const buttons = document.querySelectorAll(".category-button");

    buttons.forEach((button) => {
        button.classList.remove("active");
    }); 

    buttons.forEach((button) => {
        if (value.toLowerCase() === button.innerText.toLowerCase()) {
            button.classList.add("active");
        } 
    });

    let allProductBlocks = document.querySelectorAll(".productBlock");

    allProductBlocks.forEach((everyProductBlock) => {
        if (value === "all") {
            everyProductBlock.classList.remove("hide");
        } else {
            if (everyProductBlock.classList.contains(value)) {
                everyProductBlock.classList.remove("hide");
            } else {
                everyProductBlock.classList.add("hide");
            }
        }
    });
}

document.getElementById("search").addEventListener("click", () => {
    let searchEntry = document.getElementById("searchBar").value;
    let everyProductBlock = document.querySelectorAll(".product-name");
    let productBlocks = document.querySelectorAll(".productBlock");

    everyProductBlock.forEach((allProductBlock, index) => {
        if (allProductBlock.innerText.includes(searchEntry.toLowerCase())) {
            productBlocks[index].classList.remove("hide");
        } else {
            productBlocks[index].classList.add("hide");
        }
    });
});

window.onload = () => {
    filterProducts("all");
};