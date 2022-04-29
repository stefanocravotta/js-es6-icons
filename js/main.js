
/*

**Milestone 1** 

Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell’icona e l’icona stessa.

**Milestone 2**

Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare le icone del colore corrispondente.

**Milestone 3**

Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone *(animal, vegetable, user)*. Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

**BONUS**

1- modificare la struttura dati fornita e valorizzare la proprietà “color” in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo “#” seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.

2- popolare le options della select della milestone 3 dinamicamente.

*/


// **Milestone 1** 

const icons = [
    {
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: ``
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: ''
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: ''
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: ''
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: ''
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: ''
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: ''
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: ''
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: ''
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: ''
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: ''
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: ''
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: ''
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: ''
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: ''
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: ''
	}
]

const outputBox = document.getElementById('row');
const typeSelect = document.getElementById('type').addEventListener('change',handleClick);
const randomNumber = (min, max) =>  Math.floor(Math.random() * (max - min +1) + min );
const reset = () => outputBox.innerHTML = "" ;
const randomColor = () => randomNumber(100000,999999);



/* INIZIO */

for(let icon of icons){

printBox(icon);

}


/* FUNCTION */

function printBox(icon){

    const {family,prefix,name,color} = icon
    outputBox.innerHTML += 
    `
        <div class="col">
            <div class="sc-card">
                <i style= color:#${randomColor()} class="${family} ${prefix}${name}"></i>
                 <span>${name}</span>
            </div>
        </div>
    `
    
}

function handleClick(){

    reset();
    console.log(this.value);

    const filteredArray = icons.filter((elemento) => {
        const {type} = elemento
        if(type === this.value){
            printBox(elemento);    
        }
    })
    
    
}



