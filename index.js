// Write your solution here!


const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat= (name) => cats.push(name);

// function destructivelyAppendCat(name) {
//     cats.push(name);
// }

const destructivelyPrependCat = (name) => cats.unshift(name);

let destructivelyRemoveLastCat = () => cats.pop();

let destructivelyRemoveFirstCat = () => cats.shift();

let appendCat = (name) => {
    let newCats = [...cats, name];
    return newCats;
}

let prependCat = (name) => { 
    let newCats = [name, ...cats];
    return newCats;
}

let removeLastCat = () => {
    let newCats = cats.slice(0,2);
    return newCats;
}

let removeFirstCat = () => {
    let newCats = cats.slice(1);
    return newCats;
}