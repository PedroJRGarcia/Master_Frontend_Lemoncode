const user = { name: "María", age: 30 };
const clonedUser = { name: "María", age: 30 };

//Exercice A:

function isEqual(obj1, obj2) {
    return obj1.hasOwnProperty() === obj2.hasOwnProperty();
}//el orden importa, si no es el mismo dará false, más allá que tengan el mismo contenido

console.log(isEqual(user, clonedUser));

// const haveSameData = function(obj1, obj2) {
//     const obj1Length = Object.keys(obj1).length;
//     const obj2Length = Object.keys(obj2).length;

//     if(obj1Length === obj2Length) {
//         return Object.keys(obj1).every(
//             key => obj2.hasOwnProperty(key)
//             && obj2[key] === obj1[key]);
//     }
//     return false;
// }

//Exercice B:

