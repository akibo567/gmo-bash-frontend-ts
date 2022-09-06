export interface Recipe {
  recipeId: number,
  recipeName: string,
  recipeImage: string,
  recipeUrl: string,
  recipeCost: string,
  recipeIndication: string,
  recipeCategory: string,
  recipeMaterials: string[],
}