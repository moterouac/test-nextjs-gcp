import postRecipeAxios from "@services/adapters/axios/recipe/post";

async function postRecipe(data: any) {
    const result = await postRecipeAxios(data)
    return result
}

export default postRecipe;