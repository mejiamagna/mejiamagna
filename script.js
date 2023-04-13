console.log('Ups Ecuador!');

function addLink() {
  console.log('add link');
  var link = document.createElement('li');
  link.innerHTML = "<a href='https://www.google.com/'>google</a>";
  var ul = document.querySelector('aside ul');
  ul.appendChild(link);

  var list3 = document.querySelectorAll('aside li:nth-child(odd)');
  for (let i of list3) {
    list3.classList.add('desplazar');
  }

  setTimeout(function () {
    for (let li of list3) {
      li.classList.remove('desplazar');
    }
  }, 1000);
}

var i = 0;

var elemento = document.getElementById('titulo1');
elemento.addEventListener('click', function () {
  //alert('Click en titulo');
  //elemento.innerHTML = i
  //crearParrafo()
});

elemento.addEventListener('mouseover', function () {
  i = i + 1;
  console.log(i);
});

//var menu = document.getElementById('menu');
//var listas = menu.getElementsByTagName("li")
//console.log(listas)

//var list = document.querySelectorAll("#menu li")
//console.log(list)

var list2 = document.querySelectorAll('aside li');
console.log(list2);

var list3 = document.querySelectorAll('aside li:nth-child(odd)');
console.log(list3);

function crearParrafo() {
  // Crea un elemento <p> y le añade texto
  var miParrafo = document.createElement('p');
  var texto = document.createTextNode(
    'Este es un ejemplo de cómo crear un elemento en HTML con JavaScript'
  );
  miParrafo.appendChild(texto);

  // Añade el elemento <p> creado al div con el id "miDiv"
  document.body.appendChild(miParrafo);
}
