
async function getAllCategoris() {

    const respons = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    const data = await respons.json();
    
    displyAllCategoris(data.categories);

}

function displyAllCategoris(data) {

    box = ""
   
    data.forEach(element => {
         console.log(element.strCategoryThumb)
        box += `

        <div class="col-lg-3 col-md-4 col-sm-6 c-card p-2 overflow-hidden text-center rounded-2" data-categori-nam="${element.strCategory}"  >
        <div class="position-relative ">
                        <img src="${element.strCategoryThumb}"class="w-100" alt="">
                        <div class="layr text-black  bg-info-subtle opacity-75 d-flex flex-column justify-content-center align-items-center">
                            <h3>${element.strCategory}</h3>
                            <p class=" px-3 text-centar"> ${element.strCategoryDescription.slice(0, 100)}</p>
                        </div>
                        </div>
                    </div>`
        
        
            }
    );
    $(".categoris").html(box);
}

$(".categoris").on("click", ".c-card", function(){

    const name = $(this).attr("data-categori-nam");

   
   

    getAllMealCategoris(name);
    



});



async function getAllMealCategoris(categoris){
        
    const respons = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoris}`)
    const data = await respons.json();
    
    displayMals(data.meals)
   

    }
