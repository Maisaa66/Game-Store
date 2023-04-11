let randomSorting = ()=>0.5 - Math.random();
export const getGame =(state)=>state.games[Math.floor(Math.random() * state.games.length)];

//we will sort the array in random order and get numbe rof items
export const getRecommendedGames = (state)=>{
  let gamesCopy = [...state.games];
  gamesCopy.sort(randomSorting).slice(0, 13);
  return gamesCopy;
};

export const getPopularGames = (state)=>{
  let gamesCopy = [...state.games];
  gamesCopy.sort(randomSorting).slice(0, 13);
  return gamesCopy;
};

export const getCategories = (state) => {
    const genres = []
    state.games.forEach((game) => {
      if (!genres.includes(game.genre)) {
        genres.push(game.genre)
      }
    })
    return genres
  }
  
