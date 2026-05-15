'use strict';

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
let currentPokemon = null;

const input = document.getElementById('pokemonInput');
const searchBtn = document.getElementById('searchBtn');
const saveBtn = document.getElementById('saveBtn');
const resultDiv = document.getElementById('result');
const favoritesDiv = document.getElementById('favoritos');

searchBtn.addEventListener('click', searchPokemon);
saveBtn.addEventListener('click', saveFavorite);
document.addEventListener('DOMContentLoaded', updateFavoritesList);

async function searchPokemon() {
  const name = input.value.trim().toLowerCase();

  if (!name) {
    alert('Por favor ingresa un nombre');
    return;
  }

  try {
    const response = await fetch(apiUrl + name);

    if (!response.ok) {
      throw new Error('Pokémon no encontrado');
    }

    const data = await response.json();

    currentPokemon = {
      name: data.name,
      image: data.sprites.front_default
    };

    renderPokemon(currentPokemon);
    saveBtn.disabled = false;

  } catch (error) {
    alert(error.message);
    resultDiv.innerHTML = '';
    saveBtn.disabled = true;
    currentPokemon = null;
  }
}

function renderPokemon(pokemon) {
  resultDiv.innerHTML = `
    <div>
      <h3>${pokemon.name}</h3>
      <img src="${pokemon.image}" alt="${pokemon.name}">
    </div>
  `;
}

function saveFavorite() {
  if (!currentPokemon) return;

  const favorites = getFavorites();

  const exists = favorites.some(p => p.name === currentPokemon.name);

  if (exists) {
    alert('Este Pokémon ya está en favoritos');
    return;
  }

  favorites.push(currentPokemon);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  updateFavoritesList();
}

function getFavorites() {
  const data = localStorage.getItem('favorites');
  return data ? JSON.parse(data) : [];
}

function updateFavoritesList() {
  const favorites = getFavorites();
  favoritesDiv.innerHTML = '';

  favorites.forEach(pokemon => {
    const div = document.createElement('div');
    div.innerHTML = `
      <img src="${pokemon.image}" alt="${pokemon.name}">
      <span>${pokemon.name}</span>
    `;
    favoritesDiv.appendChild(div);
  });
}
``