let WebDesign = { name: "web Design", Hours: 40, Instructor: "Mr. Muhaned" };

let DS = { name: "Data structure", Hours: 30, Instructor: "Mr. Salah" };

let FP = { name: "Programming Fundamentals", Hours: 50, Instructor: "Mr. Maher" };

let courses = [WebDesign, DS, FP];

function myFunc(option) {
    let item = option.value;
    display.call(courses[item]);
}

function display() {
    console.log(this.name, this.Hours + " Hours", this.Instructor);
}

function showAll() {
    courses.forEach(element => {
        display.call(element);
    });
    /* courses.forEach(function(element){
        console.log(this.name,this.Hours,this.Instructor);
    }); */
}





class dinos {
    constructor(name, img, strength, weight, speed) {
        this.name = name;
        this.img = img;
        this.strength = strength;
        this.weight = weight;
        this.speed = speed;
    }
    eat() {
        console.log(`I am ${this.name} and I eat ${this.food}!`);
    }
}
class Dinosaur extends dinos {
    constructor(name, img, strength, weight, speed, food, numOfLegs) {
        // super("T-Rex", "5000", "1 T")
        super(name, img, strength, weight, speed, food)
        this.food = food;
        this.numOfLegs = numOfLegs;
    }
}
class Velociraptor extends Dinosaur {
    constructor(name, img, strength, weight, speed, food, numOfLegs, neckLen) {
        // super("T-Rex", "5000", "1 T")
        super(name, img, strength, weight, speed, food, numOfLegs)
        this.neckLen = neckLen
    }
    disc() {
        console.log(`I am ${this.name} and my neck length is ${this.neckLen} and I have ${this.numOfLegs} legs!`);
    }
}

class Pterosaurs extends dinos {
    constructor(name, img, strength, weight, speed, wingLength, bonyCrestSize, wingShape) {
        super(name, img, strength, weight, speed);
        this.wingLength = wingLength;
        this.wingShape = wingShape;
        this.bonyCrestSize = bonyCrestSize;
    }

    fly(hight) {

    }

    Land() {

    }

    diveHunting(position, deep) {

    }

    LandHunt(position) {

    }

    getAllProp() {
        console.log(`Name: ${this.name}\nStrength: ${this.strength}\nWeight: ${this.weight}\nSpeed: ${this.speed}\nWing Length: ${this.wingLength}\nBony Crest Size${this.bonyCrestSize}\nWing Shape: ${this.wingShape}`)
    }
}

const animal1 = new Pterosaurs("P-urs", "dinos.jpg", "6000", "320 Kg", "80 km/h", "15m", "Medium", "shape-1");
const animal2 = new Pterosaurs("Holhad", "dinos2.jpg", "8000", "520 Kg", "50 km/h", "15m", "Big", "shape-2");
const dinosaur = new Dinosaur("T-Rex", "dinos3.jpg", "18000", "1520 Kg", "90 km/h", "40m", "Bigeeer", "shape-2");
//const velociraptor = new Velociraptor("T-Rex", "5000", "1 T", "30 km/h", "Apples", "2", "2.01 M");

let animals = [];
animals.push(animal1);
animals.push(animal2);
animals.push(dinosaur);
let animalsSection = document.querySelector(".animals");


function showAllAnimals() {

    while (animalsSection.firstChild) {
        animalsSection.firstChild.remove();

    }

    for (let i = 0; i < animals.length; i++) {
        let newAnimal = document.createElement("div");
        let newAnimalSingle = document.createElement("div");
        newAnimal.className = "col-fl-md-12";
        newAnimalSingle.className = "col-fl-md-6";
        let name = document.createElement("h2");
        let img = document.createElement("img");
        img.src = animals[i].img;
        let imgSection = document.createElement("div");
        imgSection.className = "col-fl-md-6 img animalImg";
        imgSection.appendChild(img);
        let list = document.createElement("ul");
        list.className = "list-none"
        name.innerText = animals[i].name;
        let strength = document.createElement("li");
        strength.innerText = "Strength: " + animals[i].strength;
        let weight = document.createElement("li");
        weight.innerText = "Weight: " + animals[i].weight;
        let speed = document.createElement("li");
        speed.innerText = "Speed: " + animals[i].speed;
        let wingLength = document.createElement("li");
        wingLength.innerText = "Wing Length :" + animals[i].wingLength;
        let bonyCrestSize = document.createElement("li");
        bonyCrestSize.innerText = "Bony Crest Size :" + animals[i].bonyCrestSize;
        let wingShape = document.createElement("li");
        wingShape.innerText = "Wing Shape :" + animals[i].wingShape;


        animalsSection.appendChild(newAnimal);

        newAnimal.appendChild(imgSection);
        newAnimal.appendChild(newAnimalSingle);


        newAnimalSingle.appendChild(name);
        newAnimalSingle.appendChild(list);
        list.appendChild(strength);
        list.appendChild(weight);
        list.appendChild(speed);
        list.appendChild(wingLength);
        list.appendChild(bonyCrestSize);
        list.appendChild(wingShape);

    }

}