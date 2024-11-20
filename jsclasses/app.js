class Dog {
    constructor(name, breed, age, color) {
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.color = color;
        Dog.#numberOfDogs++;
    }
    static #numberOfDogs = 0;

    static resetDogCount(){
        Dog.#numberOfDogs = 0;
    }

    // static set numberOfDogs(newValue){
    //     return Dog.#numberOfDogs++;
    // }

    howl() {
        // console.log(`Awooooo!! I am ${this.name}.`);
        throw new HowlError(this.name, this.breed);
    }
}

let odin = new Dog("Odin", "Husky", "4", "Black/White");

// console.log(odin.howl());

// Create unique Error class
class HowlError extends Error {
    constructor(dogName, dogBreed) {
        //  super() is called to use the Error classes properties/methods
        super(`${dogName} of ${dogBreed} failed to Howl.`);
        
    }
}

// let newError = new Error();
try {
    odin.howl();
} catch (error) {
    // throw new HowlError(odin.name, odin.breed);
    if (HowlError) {
        console.log("Howl Error Occured");
    }
}

Dog.numberOfDogs = 10;
console.log(Dog.numberOfDogs);