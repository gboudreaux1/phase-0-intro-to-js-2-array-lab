
const cats =["Milo", "Otis", "Garfield"] 

beforeEach(function () {
 cats.length = 0;

 cats.push("Milo", "Otis", "Garfield");
    
});

function destructivelyAppendCat(name){
cats.push(name);
return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
    
}
function destructivelyRemoveLastCat(name){
    cats.pop(name);
    return cats;
}
  
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
    return cats;
}

function appendCat(name){
    const morecats = cats.slice();
    morecats.push(name);
    return morecats;
    
}

function prependCat(name){
    const lesscats = [name, ...cats];
    return lesscats;
}

function removeLastCat(){
    const caats = cats.slice(0,cats.length-1);
    return caats;
}
function removeFirstCat(){
    const caats = cats.slice(1);
    return caats;
}
