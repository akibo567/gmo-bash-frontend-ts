import { Recipe } from "./Recipe";

export interface Event {
    title: string,
    date: string,
    color: string,
    recipe: Recipe,
}