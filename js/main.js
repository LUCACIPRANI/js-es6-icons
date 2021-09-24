// Datas
const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
];

// added Datas;
const colors = [
    'blue',
    'green',
    'red'
];

// Milestone 1
// Starting from data structure, show on the page all the icons available as per layout;
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
const print = (array, container) => {
    container.innerHTML = '';  // to empty HTML content;

    array.forEach((element) => {
        const { name, prefix, type, family, color } = element;
        container.innerHTML += `
        <div id="card" class="square">
            <i class="${family} ${prefix}${name}" style= 'color:${color}'></i>
            <div class="title">${name.toUpperCase()}</div>
        </div>
        `;
    });
};

// Milestone 2
// color the icons by type;
// Coloriamo le icone per tipo
const getTypes = (array) => {
    const types = [];
    array.forEach((element) => {
        if (!types.includes(element.type)) {
            types.push(element.type);
        }
    });
    console.log(types);
    return types;
};

const colorIcons = (array, colors) => {
    const types = getTypes(array);
    console.log(types);
    const newArrayColored = array.map((element) => {
        const indexType = types.indexOf(element.type);
        element.color = colors[indexType];
        return element;
    });
    return newArrayColored;
};

// Milestone 3
// Create a select with icons's types and use it to filter it;
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone;
const printOptions = (array, select) => {
    array.forEach((element) => {
        select.innerHTML +=
            `<option value="${element}">${element}</option>`;
    });
};

const filterValues = (array, type) => {
    const filteredIcons = array.filter((element) => {
        if (element.type === type) {
            return true;
        }
        return false;
    });
    if (type === '') {
        return array;
    }
    return filteredIcons;
};


//   LOGIC PART 

const iconsContainer = document.getElementById('icons');
console.log(iconsContainer);

// new Array with colors after 'getTypes' and 'colorIcons' functions;
const newArrayColored = colorIcons(icons, colors);
print(newArrayColored, iconsContainer);

// printing a new array colored with all 16 elements;
console.log(newArrayColored);

const types = getTypes(newArrayColored);
console.log(types);


// variable 'select' in order to print in HTML the other options;
const select = document.getElementById('type');
printOptions(types, select);
console.log(select);


// 'onchange' FUNCTION to filter objects based on properties;
select.onchange = function (element) {
    const filtered = filterValues(icons, element.target.value);
    print(filtered, iconsContainer);
};