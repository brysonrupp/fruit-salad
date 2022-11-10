import { appState } from "../AppState.js"
import { playersService } from "../Services/PlayersServices.js"
import { getFormData } from "../Utils/FormHandler.js"
import { setHTML, setText } from "../Utils/Writer.js"



function _drawPlayers() {
    let template = ''
    appState.players.forEach(p => template += p.listTemplate)
    setHTML('players', template)
}

export class PlayersController {
    constructor() {
        console.log('test controller')

        appState.on('players', _drawPlayers)

        _drawPlayers()


    }


    createPlayer() {
        // NOTE don't refresh the page
        window.event.preventDefault()
        let form = window.event.target
        let formData = getFormData(form)
        console.log(formData);
        playersService.createPlayer(formData)
    }

    setActivePlayer(playerId) {

        playersService.setActivePlayer(playerId)
        let activePlayer = appState.activePlayer
        setText('current-player', activePlayer.name)
        console.log('activePlayer', activePlayer.name);
    }



    // showPlayers() {
    //     _drawPlayers()
    // }

}