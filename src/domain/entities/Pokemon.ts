import { Entity } from "./Entity";

export default class Pokemon extends Entity {
    name: string;
    weight: number;
    height: number;
    type: string;
    image: string;

    constructor(
        id: number,
        name: string,
        weight: number,
        height: number,
        type: string,
        image: string = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"){
        super(id);
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.type = type;
        this.image = image;
    }
}