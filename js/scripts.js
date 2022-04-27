// initialize variables

let threshhold = 1; // reference threshhold

let pokemonList = [{
    name: 'Ivysaur',
    height: 1,
    type: ['grass', 'poison']
  },

  {
    name: 'Beedrill',
    height: 1,
    type: ['bug', 'poison']
  },

  {
    name: 'Pikachu',
    height: 0.4,
    type: 'electric'
  },

  {
    name: 'Raichu',
    height: 0.8,
    type: 'electric'
  },

  {
    name: 'Jigglypuff',
    height: 0.5,
    type: ['fairy', 'normal']
  },

  {
    name: 'Squirtle',
    height: 0.5,
    type: 'water'
  },

  {
    name: 'Kakuna',
    height: 0.6,
    type: ['bug', 'poison']
  },

  {
    name: 'Pidgey',
    height: 0.3,
    type: ['flying', 'normal']
  },

  {
    name: 'Arbok',
    height: 3.5,
    type: 'poison'
  },

  {
    name: 'Persian',
    height: 1,
    type: 'normal'
  }
];

for (let i = 0; i < pokemonList.length; i++)
  if (pokemonList[i].height > threshhold) {
    document.write(`${pokemonList[i].name} (height: ${pokemonList[i].height})` + " - Wow! That's big!" + '<br />');
  } else {
    document.write(`${pokemonList[i].name} (height: ${pokemonList[i].height})` + '<br />');
  }
