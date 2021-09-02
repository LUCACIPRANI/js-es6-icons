// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        // color: 'blue',
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        // color: 'red',
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        // color: 'yellow',
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        // color: 'black',
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        // color: 'lightgray',
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        // color: 'marron',
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        // color: 'lightgreen',
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
        // color: 'salmon',
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        // color: 'green',
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        // color: 'blue',
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        // color: 'green',
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
        // color: 'red',
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        // color: 'red',
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        // color: 'black',
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        // color: 'red',
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
        // color: 'red',
    },
];

// Milestone 2
// Coloriamo le icone per tipo;

// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone;

const colors = [
    'blue',
    'orange',
    'purple'
];


const iconsContainer = document.getElementById('icons');


// FOR THE CASE, WITHOUT A FUNCTION 

// icons.forEach((element) => {
//     iconsContainer.innerHTML = '';
//     const {name, family, prefix, type} = element;
//     iconsContainer.innerHTML +=
//      `
//     <div id="animal" class="square">
//         <i class="${family} ${prefix}${name}" style= 'color:${color}'></i>
//         <div class="title">${name.toUpperCase()}</div>
//     </div>
//     `
// });



// with a FUNCTION

// function print(array, container){
//     iconsContainer.innerHTML = '';

//     array.forEach((element) => {
//         const {name, family, prefix, type} = element;
//         container.innerHTML +=
//          `
//         <div id="animal" class="square">
//             <i class="${family} ${prefix}${name}" style= 'color:${color}'></i>
//             <div class="title">${name.toUpperCase()}</div>
//             <div class="title">${type}</div>
//         </div>
//         `
//     });
// }

// print(icons, iconsContainer);



// with an ARROW FUNCTION

const print = (array, container) => {
    iconsContainer.innerHTML = ''; // ripulisco il contenuto HTML;

    array.forEach((element) => {
        const {name, family, color, prefix, type} = element;
        container.innerHTML +=
        `
        <div id="animal" class="square">
            <i class="${family} ${prefix}${name}" style= 'color:${color}'></i>
            <div class="title">${name.toUpperCase()}</div>
            <div class="title">${type}</div>
        </div>
        `
    });
}

print(icons, iconsContainer);
console.log(getTypes(icons));

function getTypes(array) {
    const types = [];
    array.forEach((element) => {
        console.log(element);
        if(types.includes(element.type) == false) {
            types.push(element.type);
        }

    })
    return types;
}

// inserisco i colori nell'array 

function colorIcons(array, colors) {
    const types = getTypes(array);
    // console.log(types);
}

console.log(colorIcons(icons, colors));





// --------------------
// PER SVUOTARE SE CI FOSSE GIA QUALCOSA NELL'HTML inserisco:
// iconsContainer.innerHTML = '';
// --------------------