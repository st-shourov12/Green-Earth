// step 1 

const loadCard = () => {

    manageSpinner(true);
    fetch("https://openapi.programming-hero.com/api/plants")
    .then((response) => response.json())
    .then((data) => showCard(data.plants))
};

const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((response) => response.json())
    .then((data) => {
        
        showCategory(data.categories);

    })

};

const loadCategory = (id) =>{
    manageSpinner(true);
    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then((response) => response.json())
    .then((data) => disCategory(data.plants))
};

const loadModal = (id) => {
    fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
    .then((response) => response.json())
    .then((data) => displayModal(data.plants)
    )
};

const displayModal = (element) => {
    const modalDetails = document.getElementById("modal-Details");
    modalDetails.innerHTML = `
    <h2 class="text-2xl font-bold">
                                ${element.name}
                            </h2>
                            <img src=${element.image} alt=${element.name} class= "w-full h-[200px] lg:h-[300px] rounded-lg">
    
                            <div class="category">
                                <span class="text-xl font-semibold">
                                    Category:
                                </span>
                                <span class="text-xl text-gray-700 ">${element.category}</span>
                            </div>
                            <div class="">
                                <span class="text-xl font-semibold">
                                    Price:
                                </span>
                                <span class="text-xl text-gray-700 ">${element.price}</span>
                            </div>
                            <div class="mb-3">
                                <span class="text-xl font-semibold">
                                    Description:
                                </span>
                                <span class="text-xl text-gray-700 ">${element.description}</span>
                            </div>
                            <form method="dialog" class ="flex justify-end" >
                                <!-- if there is a button in form, it will close the modal -->
                                <button class="btn">Close</button>
                            </form>
    `;
    
    document.getElementById("my_modal_5").showModal();
};

const activeClass = (id) => {
    const activeBtn = document.getElementById(`btn-${id}`);
    const removeClass = document.querySelectorAll(".ac");
    removeClass.forEach(element => {
        element.classList.remove("active-class")
    });
    activeBtn.classList.add("active-class");
};



const disCategory = (plants) => {
    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML ="";

    plants.forEach(element => {
        
        const creatCard = document.createElement("div");
        creatCard.innerHTML=`

                <div class="p-2 bg-white rounded-xl flex flex-col justify-between gap-4 h-full" >
                    
                    <div class="card-content flex flex-col justify-between gap-4">
                        <figure class="w-full h-full">
                            <img src=${element.image} alt=${element.name} class= "w-full h-[200px] rounded-lg">
                        </figure>
                        <div class="card-text">

                            <h2 class="text-xl font-semibold mb-1">
                            <button onclick="loadModal(${element.id})">${element.name}</button>
                            
                                
                            </h2>
                            <p class="text-gray-600 description">
                                ${element.description.split(" ").slice(0, 15).join(" ")}...
                            </p>
                        </div>
                        
                    </div>
                    <div class="card-badge-btn flex flex-col gap-2">
                        <div class="flex justify-between items-center">
                            
                            <span class="badge bg-[#DCFCE7] text-[#15803D] rounded-2xl py-3 px-4 font-bold">
                                ${element.category}
                            </span>
                            <span class="text-xl text-[#15803D] font-bold">
                                <i class="fa-solid fa-bangladeshi-taka-sign text-sm font-medium"></i>
                                ${element.price}
                            </span>
                        </div>
                        <button onclick="cartAdd('${element.name}' ,${element.price})" class="btn hover:bg-[#0a4620] bg-[#15803D] text-white flex-1 rounded-2xl py-1">
                            Add to Cart
                        </button>
                    </div>
                </div>
        `;
        cardContainer.append(creatCard);
    });
    manageSpinner(false);
};



const showCategory = (categories) => {
    const categoryContainer = document.getElementById("categoryContainer");
    // categoryContainer.innerHTML = ``;
    categories.forEach(element => {
        const li = document.createElement("li");
        li.innerHTML = `
            <button onclick = "loadCategory(${element.id}); activeClass(${element.id})" id="btn-${element.id}" class="ac text-center lg:text-left flex-1 mb-2 p-3 w-full rounded-xl text-xl font-medium">${element.category_name}</button>
        `;
        categoryContainer.append(li);
    });



};


const my_modal_5 = () =>{
    const modal = document.getElementById("my_modal_5")
};

// step 1.2

const showCard = (data) => {
    // console.log(data);
    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML =``;

    data.forEach(element => {
        
        const creatCard = document.createElement("div");
        creatCard.innerHTML=`
                <div class="p-2 bg-white rounded-xl flex flex-col justify-between gap-4 h-full duration-700 hover:scale-105" >
                    
                    <div class="card-content flex flex-col justify-between gap-4">
                        <figure class="w-full h-full">
                            <img src=${element.image} alt=${element.name} class= "w-full h-[200px] rounded-lg">
                        </figure>
                        <div class="card-text">

                            <h2 class="text-xl font-semibold mb-1">
                            <button onclick="loadModal(${element.id})">${element.name}</button>
                            
                                
                            </h2>
                            <p class="text-gray-600 description">
                                ${element.description.split(" ").slice(0, 15).join(" ")}...
                            </p>
                        </div>
                        
                    </div>
                    <div class="card-badge-btn flex flex-col gap-2">
                        <div class="flex justify-between items-center">
                            
                            <span class="badge bg-[#DCFCE7] text-[#15803D] rounded-2xl py-3 px-4 font-bold">
                                ${element.category}
                            </span>
                            <span class="text-xl text-[#15803D] font-bold">
                                <i class="fa-solid fa-bangladeshi-taka-sign text-sm font-medium"></i>
                                ${element.price}
                            </span>
                        </div>
                        <button onclick="cartAdd('${element.name}' ,${element.price})" class="btn hover:bg-[#0a4620] bg-[#15803D] text-white flex-1 rounded-2xl py-1">
                            Add to Cart
                        </button>
                    </div>
                </div>
                
        `;
        cardContainer.append(creatCard);
    });
    manageSpinner(false);
};

const totalMoney = (pr) => {
    const priceCart = document.querySelectorAll(".price");
    const totalAmount = document.getElementById("total");
    
    console.log(priceCart);
    let amount = 0;
    priceCart.forEach(element => {
        console.log(parseFloat(element.textContent));
        let intElement = parseFloat(element.textContent);
        amount += intElement ;
        

    });
    totalAmount.innerText = amount ;
    

    console.log(amount);
};

const cartAdd = (name , price) =>{
    const cartContainer = document.getElementById("cart-container");
    // cartContainer.innerHTML = ``;
    const creatCart = document.createElement("div");

    alert(`You added ${name} on cart`);
    
    creatCart.innerHTML =`
        <div class="cart bg-[#f0fdf4] mt-4 p-3 flex justify-between items-center rounded-lg">
                        <div class="tree">

                            <h3 class="font-semibold">
                                ${name}
                            </h3>
                            <h3 class="text-lg text-gray-600 price">
                                ${price} * 1
                            </h3>
                        </div>
                        <button class="remove-btn btn text-[#15803D]">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
        </div>
    `;

    creatCart.querySelector(".remove-btn").addEventListener("click", () => {
        creatCart.remove();
        totalMoney(`${price}`);
    });

    
    cartContainer.append(creatCart);
    totalMoney(`${price}`);
};


const manageSpinner = (status) => {
    if (status == true) {
        document.getElementById("spinner").classList.remove("hidden");
        document.getElementById("spinner").classList.add("flex");
        document.getElementById("cardContainer").classList.add("hidden");
    } 
    else {
        document.getElementById("cardContainer").classList.remove("hidden");
        document.getElementById("spinner").classList.add("hidden"); 
        document.getElementById("spinner").classList.remove("flex");
    }
};

loadCategories();
loadCard();

// form

const formBtn = document.getElementById("form-btn");

formBtn.addEventListener("click" , (e) => {
    e.preventDefault();
    const value = document.getElementById("text-name").value;
    const sel = document.getElementById("select").value;
    alert(`Congratulations ${value} for donating ${sel} tree to make a better world`)
});