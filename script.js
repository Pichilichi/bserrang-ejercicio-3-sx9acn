// En el siguiente ejercicio debéis sacar por consola (console.log) una lista con el nombre de los usuarios.
// Dicha la lista la obtendréis del documento "users.json" haciendo uso de la función "fetch". Una vez tengáis el array de usuarios, debéis generar otro array con la función "filter" para que solo estén los usuarios que tengán más de 500 en la propiedad "money".
// Teniendo la lista ya filtrada, la recorreréis con el método "forEach" para mostrar por consola el nombre de cada usuario.
let buttonShowList = document.getElementById("showList");
buttonShowList.addEventListener("click", getUsers);

var peopleFiltered = []
var people = []

function filterUsers(arrayToFiltr){
  
  peopleFiltered = arrayToFiltr.filter(function (e){
    return e.money > 500;
  });

  
  //console.log(peopleFiltered);
  
  peopleFiltered.forEach(function (b){
   console.log(b.name);
 });

}

function getUsers() {
  fetch("users.json")
  .then(function(response) {
        console.log('response =', response);
        return response.json();
    })
  .then(function(data){
      console.log("datos =" ,data);
      filterUsers(data);
  });
}
