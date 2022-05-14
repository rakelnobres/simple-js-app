// wrap pokemonList array in an IIFE

let pokemonRepository = (function() {

  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  // define add function to add a pokemon to pokemon array
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "detailsUrl" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("Data entered is incorrect!")
    }

  }

  // define getAll function to return the pokemonRepo array
  function getAll() {
    return pokemonList;
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
  function addListener(button, pokemon) {
    button.addEventListener("click", function() {
      showDetails(pokemon);
    });
  }

  // add loadList method that will fetch data from the API
  function loadList() {
    return fetch(apiUrl).then(function(response) {
      return response.json();
    }).then(function(json) {
      json.results.forEach(function(item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function(e) {
      console.error(e);
    })
  }

  // add loadDetails function
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function(response) {
      return response.json();
    }).then(function(details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
    }).catch(function(e) {
      console.error(e);
    });
  }

  // log pokemon's details in the console
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function() {
      console.log(pokemon);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  }

})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
