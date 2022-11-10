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

    setActivePlayer(playerId) {
        let foundPlayer = appState.players.find(p => p.id == playerId)
        console.log("foundPlayer");
        appState.activePlayer = foundPlayer
    }



}


export const playersService = new PlayersService