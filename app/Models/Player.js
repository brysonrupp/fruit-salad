import { generateId } from "../Utils/generateId.js"

export class Player {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.score = data.score = 0
    }

    get listTemplate() {
        return `
        <div class="row justify-content-end">
        <div class="col-3 card selectable" onclick="app.playersController.setActivePlayer('${this.id}')">name: ${this.name}</div>
        <div class="col-1 card selectable"> score: ${this.score}</div>
        </div>
        `

    }
}

