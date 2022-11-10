import { generateId } from "../Utils/generateId.js"

export class Player {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.score = data.score
    }

    get ListTemplate() {
        return `
        <div class="row justify-content-end">
        <div class="col-3">name:${this.name}</div>
        <div class="col-3">score:${this.score}</div>
      </div>
      `

    }
}

