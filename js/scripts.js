// wrap pokemonList array in an IIFE

let pokemonRepository = (function() {
  // array list of pokemon
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

  // define getAll function to return the pokemonList array
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
          image: item.imageUrl,
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


  function showDetails(pokemon) {
    loadDetails(pokemon).then(function() {
      showModal(pokemon);
    });
  }

  // modal codes
  // declare global variable
  let modalContainer = document.querySelector("#modal-container");

  // this funtion activate the button for showModal
  function showModal(pokemon) {
    // Clear all exixting modal content
    modalContainer.innerHTML = "";

    let modal = document.createElement("div");
    modal.classList.add("modal");

    // create modal close buttons
    let closeButtonElement = document.createElement("button");
    closeButtonElement.classList.add("modal-close");
    closeButtonElement.innerText = "Close";
    closeButtonElement.addEventListener("click", hideModal);

    // Add the new modal content
    let titleElement = document.createElement("h2");
    titleElement.innerText = pokemon.name;

    let typesString = '';
    pokemon.types.forEach(function(type, i) {
      if (i < pokemon.types.length - 1) {
        typesString += `${type.type.name}, `
      } else {
        typesString += `${type.type.name}`
      }
    });

    let contentElement = document.createElement("p");
    contentElement.innerHTML = `Height: ${pokemon.height}<br>Types: ${typesString}`;

    let imgElement = document.createElement("img");
    imgElement.src = pokemon.imageUrl;

    //  append elements to the modal div
    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(imgElement);

    // append modal to the modalContainer
    modalContainer.appendChild(modal);

    modalContainer.classList.add("is-visible");

  }

  // Hide modal function
  function hideModal() {
    modalContainer.classList.remove("is-visible");
  }

  // eventListener for hiding a modal by clicking on escape key
  window.addEventListener("keydown", (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  // eventListener for hiding a modal by clicking outside modal
  modalContainer.addEventListener('click', (e) => {
    // Since this is also triggered when clicking INSIDE the modal
    // We only want to close if the user clicks directly on the overlay
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,

  }

})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
