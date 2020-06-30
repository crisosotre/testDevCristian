import {cleanConsole, createAll} from './data';

const companies = createAll();

cleanConsole(6, companies);
console.log('---- EXAMPLE 6 --- ', 'Put here your function');
example6(companies);
// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Cree una función tomando la variable "companies" como parámetro y devolviendo
// un nuevo objeto cuyos atributos son la concatenación del apelido, nombre y
// edad de cada "user". Cada atributo debe tener el valor de boolean "car".
// Ver ejemplo a continuación.

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a new object whose attributes are the concatenation of the name, first name and
// the age of each user. Each attribute must have the value of boolean "car".
// See example below.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et renvoyant
// un nouve objet dont les attributs sont la concaténation du nom, du prénom et
// de l'âge de chaque "user". Chaque attribut devra avoir la valeur du booléen
// "car". Voir exemple ci-dessous.

const example = {
  johnDoe32: true,
  BernardoMinet45: false,
  alinaChef23: true,
};

console.log(example);

function example6(companies) {
  const myObject = {};
  for (let i = 0; i < companies.length; i++) {
    for (let j = 0; j < companies[i].users.length; j++) {
      const propertie = companies[i].users[j].firstName+companies[i].users[j].lastName+companies[i].users[j].age;
      myObject[propertie] = companies[i].users[j].car;
    }
  }
  console.log(myObject);
}
