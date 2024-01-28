
async function getAllCategoris() {

    const respons = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    const data = await respons.json();
    console.log(data.categories)
    displyAllCategoris(data.categories);

}

function displyAllCategoris(data) {
 console.log(9797)
    box = ""
   
    data.forEach(element => {
         console.log(element.strCategoryThumb)
        box += `

        <div class="col-md-3 c-card position-relative" data-categori-nam="${element.strCategory}"  >
                        <img src="${element.strCategoryThumb}"class="w-100" alt="">
                        <div class="layr bg-danger-subtle opacity-75 d-flex flex-column justify-content-center align-items-center">
                            <h3>${element.strCategory}</h3>
                            <p class=" px-3 text-centar"> ${element.strCategoryDescription.slice(0, 100)}</p>
                        </div>
                    </div>`
        
        
            }
    );
       console.log(box)
    $(".categoris").html(box);
}

$(".categoris").on("click", ".c-card", function(){

    const name = $(this).attr("data-categori-nam");

    console.log(name)
   

    getAllMealCategoris(name);
    



});



async function getAllMealCategoris(categoris){
        
    const respons = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoris}`)
    const data = await respons.json();
    console.log(data)
    displayMals(data.meals)
   

    }