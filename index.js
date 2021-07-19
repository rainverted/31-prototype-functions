// const hi = 'Labas';
// const hiUp = hi.toUpperCase();      //kintamasis turi metoda toUpperCase()

// console.log(hi, hiUp);          //Labas LABAS

// //sukuriame metoda priskirdami pavadinima pirmaRaide
// String.prototype.pirmaRaide = function () {
//     return ('' + this)[0];                        //tam, kad suveiktu turime kazka grazinti

//     //console.log(this);                this = [String: 'Labas']
// }

// const hipr = hi.pirmaRaide();
// console.log(`${hi} pirma raide yras "${hipr}".`);


Array.prototype.atrinkti = function (func) {
    //sukuriame atsakymui vieta ir ja graziname su return
    let ats = [];

    //einame  per sarasa(nes suteiktas array.prototybe), kuriame value yra duota reiksme sarase
    for (const value of this) {
        //jei duotai funkcijai reiksme atitinka duotai logikai, jei tenkina, grazina reiksmes                        
        if (func(value)) {
            ats.push(value);
        }
    }
    return ats;
    // console.log(this);                      //this = [ 1, 2, 3, 4 ]
    // console.log(func);                      //[Function (anonymous)]
}

const kasLiekaAtrinkus = [1, 2, 3, 4].atrinkti(n => n > 3);
console.log(kasLiekaAtrinkus, [4]);