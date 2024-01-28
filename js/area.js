
async function getAllArea() {

    const respons = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=lis`)
    const data = await respons.json();
    console.log(data.categories)
    displyAllArea(data.meals);

}

function displyAllArea(data) {
 console.log(9797)
    box = ""
   
    data.forEach(element => {
         console.log(element)
        box += `

        <div class="col-md-3 a-card position-relative" data-area-nam="${element.strArea}"  >
        <i class="fa-solid fa-house-laptop fa-4x"></i>
        <h3> ${element.strArea}</h3>
                    </div>`
        
        
            }
    );
       
    $(".area").html(box);
}

$(".area").on("click", ".a-card", function(){

    const name = $(this).attr("data-area-nam");

    console.log(name)
   

    getAllMealArea(name);
    



});



async function getAllMealArea(Area){
        
    const respons = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${Area}`)
    const data = await respons.json();
    console.log(data)
    displayMals(data.meals)
   

    }