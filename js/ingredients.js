
async function getAllIngredients() {

    const respons = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    const data = await respons.json();
    console.log(data.categories)
    console.log(data.meals)
    displyAllIngredients(data.meals.slice(0, 20));
    console.log(data.meals)

}

function displyAllIngredients(data) {
 console.log(9797)
    box = ""
   
    data.forEach(element => {
         console.log(element)
        box += `

        <div class="col-md-3 i-card position-relative" data-ingredient-nam="${element.strIngredient}"  >
        <i class="fa-solid fa-utensils fa-4x"></i>
       
        <h3> ${element.strIngredient}</h3>
        ${console.log(element.strDescription.slice(0, 100))}
        <p>${element.strDescription.slice(0, 100)}</p>


                    </div>`
        
        
            }
    );
       
    $(".ingredients").html(box);
}

$(".ingredients").on("click", ".i-card", function(){

    const ingredients = $(this).attr("data-ingredient-nam");

    console.log(ingredients)
   

    getAllMealIngredients(ingredients);
    



});



async function getAllMealIngredients(ingredients){
        
    const respons = await fetch(`https:/www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`)
    const data = await respons.json();
    console.log(data)
    displayMals(data.meals)
   

    }