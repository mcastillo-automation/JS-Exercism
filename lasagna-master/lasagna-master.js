// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(time) {
    if (time == null) {
        return "You forgot to set the timer."
    } else if (time) {
        return "Not done, please wait."
    } else if (time === 0) {
        return "Lasagna is done."
    };
}

export function preparationTime(layers, averagePrepTime) {
    if (averagePrepTime > 0) {
        return layers.length * averagePrepTime;
    } else {
        return layers.length * 2;
    };
}

export function quantities(layers) {
    const noodles = layers.filter(x => x == 'noodles').length
    const sauce = layers.filter(x => x == 'sauce').length
    const quantity = {
        noodles: noodles * 50,
        sauce: sauce * 0.2
    };
    return quantity;
}

export function addSecretIngredient(friendsRecipe, myRecipe) {
    myRecipe.push(friendsRecipe[friendsRecipe.length - 1]);
}

export function scaleRecipe(recipe, numberOfPortions) {
    const augmentedRecipe = {};
    for (let key in recipe) {
        augmentedRecipe[key] = recipe[key] * numberOfPortions/2;
    }    
    return augmentedRecipe;
}