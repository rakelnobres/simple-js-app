// wrap pokemonList array in an IIFE

let pokemonRepository = (function() {

  let pokemonList = [
    {
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

  // define add function to add a pokemon to the list
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  // define getAll function to return the pokemonList array
  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };

})();

pokemonRepository.add({
  name: 'Pikachu',
  height: 0.3,
  type: 'electric'
});

// forEach Loop
pokemonRepository.getAll().forEach(function (pokemon) {
  document.write(pokemon.name + "<br/>" + "height: " + pokemon.height + "m , type: " + pokemon.type + " " + "<br/>");
});
