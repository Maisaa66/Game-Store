import axios from "axios";

export const getAllGames = ({commit})=>{
    axios.get("http://localhost:3000/Games")
        .then((res)=> commit('SET_GAMES', res.data))
        
}

export const getGame = ({commit}, id)=>{
    axios.get(`http://localhost:3000/Games/${id}`)
    .then((res)=> commit('SET_GAME', res.data))
}