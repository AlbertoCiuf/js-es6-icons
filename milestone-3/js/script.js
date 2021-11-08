const data = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const container = document.querySelector('main .container-fluid');
const row = document.createElement('div');
row.className='row row-cols-5';
container.append(row);

//creo tre array che contengano solo determinati oggetti presenti nell'array originale in base al valore della key "type"
const animalData = data.filter((obj) => obj.type==='animal');
const vegetableData = data.filter((obj) => obj.type==='vegetable');
const userData = data.filter((obj) => obj.type==='user');

const filter = document.getElementById('filter');

//MAIN
//di default ed al refresh, la pagina carica le card dell'array che le contiene tutte (essendo anche selezionato di default "All" nel menù a tendina in html)
createDOM(data);

//event listener che cambia quali card visualizzare in base all'opzione scelta nel menù a tendina
filter.addEventListener('change', (event)=> {
  //assegno ad una variabile il valore dell'opzione scelta nel menù a tendina
  let chosenFilter = parseInt(event.target.value);

  //resetto l'innerHTML della row a cui vengono appese le card ad ogni cambiamento del valore selezionato
  row.innerHTML='';

  //assegno a selectedArray il risultato della funzione
  const selectedArray = checkSelectedValue(chosenFilter);
  
  //come sopra, creo gli elementi html, ma stavolta in base all'array scelto in base all'opzione selezionata dal menù a tendina
  createDOM(selectedArray)
});


//FUNZIONI

//funzione che crea il contenuto html della pagina
function createDOM(array) {
  for (let index in array) {  
    let singleObject = array[index];
    drawCards(singleObject);
    chooseCardColor(singleObject);
  }
}

//funzione che genera dinamicamente le card, utilizzando i valori delle chiavi dell'oggetto passato come parametro
function drawCards(singObj) {
  const htmlCard = document.createElement('div');
  htmlCard.className='ac-card';
  htmlCard.innerHTML = 
  `
  <div class="card-icon">
    <i class="${singObj.family} ${singObj.prefix}${singObj.name}"></i>
  </div>
  <div class="card-text text-uppercase">
    ${singObj.name}
  </div>
  `;
  row.append(htmlCard);

}

//funzione che colora le icone nelle card in base all'attributo corrispondente nell'oggetto.
function chooseCardColor(singObj) {
  let icons = document.querySelectorAll('.card-icon > i');
    for (let icon of icons) {
      //verifico che l'icona non abbia già un attributo "style" onde evitare che venga sovrascritto
      if (icon.getAttribute('style')===null || icon.getAttribute('style') === "") {
        icon.style.color=`${singObj.color}`
      }
    }
}

//funzione che verifica quale opzione è selezionata nel menù a tendina e di conseguenza da quale array andare a prendere gli elementi da visualizzare nelle card html
function checkSelectedValue(chosenFilter) {
  let array =[];
  if (chosenFilter === 2) {
    array = animalData;
  } else if (chosenFilter === 3) {
    array = vegetableData;
  } else if (chosenFilter === 4) {
    array = userData;
  } else array = data;
  return array
}