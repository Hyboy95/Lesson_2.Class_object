class Recipe {
    constructor(title, servings, ingredients) {
        this.title = title;
        this.servings = servings;
        this.ingredients = ingredients;
    }
}

let recipe = new Recipe('Sườn xào chua ngọt', 2,
    ['400 g sườn thăn', '4 tbsp nước mắm', '5 tsp đường', '5 tsp nước cốt chanh',
        '1/3 bát nước sôi', 'Hành khô, tỏi, ớt, hành lá', '2 quả cà chua', 'Hành tây (ớt chuông)']
);
console.log(`Tên món ăn: ${recipe.title}`);
console.log(`khẩu phần ăn: ${recipe.servings}`);
console.log(`Thành phần: ${recipe.servings}`);
recipe.ingredients.forEach((element) => {
    console.log(`- ${element}`);
});