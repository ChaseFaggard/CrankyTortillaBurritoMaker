import { FormState } from "./FormState"

export default class BurritoIngredient {

    constructor(public name:string, public step:FormState) { }

    getPath():string {
        return 'assets/images/' + this.name + '.png'
    }


}