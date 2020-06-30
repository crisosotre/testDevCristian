import {cleanConsole, createAll} from './data';
const companies = createAll();

cleanConsole(2, companies);
console.log('---- EXAMPLE 2 --- ', 'Put here your function');
const hasCar = true;
example2(companies, hasCar);

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando como parámetro la variable "companies" y el
// booleano "hasCar". Para cada "company" debe conservar solo
// "users" cuyo valor de atributo "car" es igual al parámetro del
// función "hasCar" y el atributo "usersLength" deben indicar el total de
// "users" correspondientes al parámetro "hasCar".

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking as parameter the variable "companies" and the
// boolean "hasCar". For each "company" you must keep only the
// "users" whose attribute value "car" is equal to the parameter of the
// "hasCar" function and the "usersLength" attribute must indicate the number of
// "users" corresponding to the "hasCar" parameter.

// -----------------------------------------------------------------------------
// INSTRUCTIONS EN FRANÇAIS

// Créer une fonction prenant en paramètre la variable "companies" et le
// booléen "hasCar". Pour chaque "company" vous devez garder uniquement les
// "users" dont la valeur de l'attribut "car" est égal au paramètre de la
// fonction "hasCar" et l'attribut "usersLength" doit renseigner le nombre de
// "users" correspondant au paramètre "hasCar".

function example2( companies, hasCar) {
  for (let i = 0; i < companies.length; i++) {
    for (let j = 0; j < companies[i].users.length; j++) {
      if (companies[i].users[j].car !== hasCar) {
        companies[i].users.splice(j, 1);
      }
    }
    companies[i].usersLength = companies[i].users.length;
  }
}
