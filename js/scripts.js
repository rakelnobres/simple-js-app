// wrap pokemonList array in an IIFE

let pokemonRepository = (function() {

  let pokemonRepo = [{
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

  // define add function to add a pokemon to pokemonRepo array
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "type" in pokemon
    ) {
      pokemonRepo.push(pokemon);
    } else {
      alert("Data entered is incorrect!")
    }

  }

  // define getAll function to return the pokemonRepo array
  function getAll() {
    return pokemonRepo;
  }

// simplified loop function
  function addListItem(pokemon) {
    // declare variables
    let pokemonList = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    let button = document.createElement("button");
    // set text in the button
    button.innerText = pokemon.name;
    // create CSS rule to customise button style
    button.classList.add("button-class");
    // append the list (listPokemon) to the button
    listPokemon.appendChild(button);
    // append li to the parent element
    pokemonList.appendChild(listPokemon);
    addListener(button, pokemon);
  }

// add event listener to the button
function addListener (button, pokemon) {
  button.addEventListener ("click", function() {
    showDetails(pokemon.name);
  });
}

function showDetails (pokemon) {
  console.log(pokemon);
}
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  }

})();

pokemonRepository.add({
  name: 'Pikachu',
  height: 0.3,
  type: 'electric'
});

// forEach Loop
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
