import { appState } from "../AppState.js"
import { Player } from "../Models/Player.js"
import { saveState } from "../Utils/Store.js"


class PlayersService {

    createPlayer(formData) {
        let newPlayer = new Player(formData)
        // console.log(newPlayer);
        appState.players = [...appState.players, newPlayer]
        saveState('Players', appState.players)
    }





}


export const playersService = new PlayersService