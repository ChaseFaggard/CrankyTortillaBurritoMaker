import { FormState } from "./FormState"

export default class BurritoIngredient {

    constructor(public name:string, public step:FormState) { }

    getPath():string {
        return 'assets/images/' + this.name + '.png'
    }

    getReadableName():string {
        return this.name.split('-').map(word => word[0].toUpperCase() + word.substr(1)).join(' ')
    }


}