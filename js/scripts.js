// wrap pokemonList array in an IIFE

// let pokemonRepository = (function() {

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
//
//   // define getAll function to rturn the pokemonList array
//   function getAll() {
//     return pokemonList;
//   }
//
//   // define add function to add a pokemon to the list
//   function add(pokemon) {
//     pokemonList.push(pokemon);
//   }
//
// document.log (pokemonRepository.getAll());
// //
// // forEach Loop for name and height
// pokemonRepository.getAll().forEach(function(pokemon) {
//   pokemonRepository.addListItem(pokemon);
// });
//

pokemonList.forEach(function (pokemon) {
document.write(pokemon.name + ' ' + pokemon.height);
});
//
// for (let i = 0; i < pokemonList.length; i++)
//   if (pokemonList[i].height > threshhold) {
//     document.write(`${pokemonList[i].name} (height: ${pokemonList[i].height})` + " - Wow! That's big!" + '<br>');
//   } else {
//     document.write(`${pokemonList[i].name} (height: ${pokemonList[i].height})`);
//   }
