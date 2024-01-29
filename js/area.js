
async function getAllArea() {

    const respons = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=lis`)
    const data = await respons.json();
    
    displyAllArea(data.meals);

}

function displyAllArea(data) {
 
    box = ""
   
    data.forEach(element => {
         console.log(element)
        box += `

        <div class="col-lg-3 col-md-4 col-sm-6 m-auto text-center g-2 a-card position-relative" data-area-nam="${element.strArea}"  >
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
   
    displayMals(data.meals)
   

    }
