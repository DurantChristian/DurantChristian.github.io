const getShoes = async() => {
    const url = "https://portiaportia.github.io/json/shoes.json";

    try {
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

const showShoes = async() => {
    const shoes = await getShoes();
    const shoesSection = document.getElementById("shoes-section");

    shoes.forEach((shoe) => {
        shoesSection.append(shoe.name);
    });
};

const showBrand = async() => {
    const brands = await getBrands();
    const brandsSection = document.getElementById("shoes-section");

    brands.forEach((brand) => {
        brandsSection.append(brand.brand);
    });
};

showShoes();