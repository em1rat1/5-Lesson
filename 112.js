let car1 = {
    id:"amg",
    manufacturer:"mercedes",
    model:"amg",
    horsepower:404560,
    year:2014,
    color:"yellow",
    price:120000
}
let car2 = {
    id:"taycan",
    manufacturer:"porsche",
    model:"taycan",
    horsepower:493,
    year:2009,
    color:"white",
    price:187700
}
let car3 = {
    id:"porsche",
    manufacturer:"porsche",
    model:"carrera",
    horsepower:402,
    year:2003,
    color:"red",
    price:330000,
};
let car4 = {
    id:"dodge",
    manufacturer:"dodge",
    model:"viper",
    horsepower:400,
    year:2012,
    color:"red",
    price:37961
};

cars = [car1,car2,car3,car4];

function displayDescription(carId){
    let foundCar = foundCarById(carId);
    let description = getDescription(foundCar);
    
    alert(description);
}

function foundCarById(carId){
    for(i=0;i<cars.length;i++){
        if(cars[i].id === carId){
            return cars[i];
        }
    }
}
function getDescription(car){
    return `ინფორმაცია მანქანის შესახებ: \n მარკა - ${car.manufacturer}; \n მოდელი - ${car.model}; \n ცხენისძალა - ${car.horsepower}; \n წელი - ${car.year}; \n ფერი - ${car.color}; \n ფასი - ${car.price};`
};

function priceLessthan(){
    for(let i=0; i < cars.length;i++){
        if(car[i].price < 200000){
            console.log(`ამ ფასში მხოლოდ ამ მანქანის ყიდვა შეგიძლია`);
        }else{
            console.log(`fafu`)
        }
    }
    
}