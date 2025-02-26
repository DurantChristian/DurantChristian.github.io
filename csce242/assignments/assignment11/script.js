class Pizza {
    constructor(name, image, ingredients, price, size, crustType) {
        this.name = name;
        this.image = image;
        this.ingredients = ingredients;
        this.price = price;
        this.size = size;
        this.crustType = crustType;
    }

    getSection = () => `
        <div class="pizza" onclick="showModal('${this.name}', '${this.image}', '${this.ingredients}', '${this.price}')">
            <h2>${this.name}</h2>
            <img src="${this.image}" alt="${this.name}">
        </div>
    `;
}

const pizzas = [
    new Pizza("Hawaiian", "/csce242/assignments/assignment11/images/hawaiian.png", "Ham, Pineapple, Cheese", 12.99, "Large", "Thin Crust"),
    new Pizza("Buffalo Chicken Ranch", "/csce242/assignments/assignment11/images/buffalo.png", "Chicken, Ranch, Cheese", 14.99, "Medium", "Stuffed Crust"),
    new Pizza("Margarita", "/csce242/assignments/assignment11/images/Margarita.png", "Tomatoes, Basil, Mozzarella", 10.99, "Small", "Thin Crust"),
    new Pizza("Pepperoni", "/csce242/assignments/assignment11/images/pepperoni.png", "Pepperoni, Cheese, Tomato Sauce", 11.99, "Large", "Regular Crust"),
    new Pizza("Veggie", "/csce242/assignments/assignment11/images/veggie.png", "Mushrooms, Peppers, Olives", 13.99, "Medium", "Thin Crust")
];

const pizzaContainer = document.getElementById("pizzaContainer");

pizzas.forEach(pizza => {
    pizzaContainer.innerHTML += pizza.getSection();
});

const showModal = (name, image, ingredients, price) => {
    document.getElementById("modalTitle").innerText = name;
    document.getElementById("modalImage").src = image;
    document.getElementById("modalIngredients").innerText = ingredients;
    document.getElementById("modalPrice").innerText = price;
    
    const modal = document.getElementById("pizzaModal");
    const modalContent = document.getElementById("modalContent");
    modal.style.display = "flex";
    modalContent.classList.add("rotate");
    setTimeout(() => modalContent.classList.remove("rotate"), 500);
};

const closeModal = () => {
    document.getElementById("pizzaModal").style.display = "none";
};