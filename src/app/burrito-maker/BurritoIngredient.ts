export default class BurritoIngredient {

    constructor(public name:string, public step:number) { }

    getPath():string {
        return './assets/images/' + this.name + '.png'
    }


}