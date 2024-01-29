
$(document).ready(() => {
  getMealByName("");
      $(".loading-screen").fadeOut(500)
      $("body").css("overflow", "visible")
})
$(".nav-link").click(function (e) {
  $("body >.active").removeClass("active").addClass("none");
  let section = $(this).attr("href")
  $(section).removeClass("none").addClass("active");
  
   if(section==="#home"){
   
   
  }
  else if(section==="#categories"){
    getAllCategoris();

  }
  else if(section==="#area"){
    getAllArea()
    
  }
  else if(section==="#ingredients"){
   
    getAllIngredients();

  }

}

)
function displayFullDeails(details) {
  let ingediant="";
 
 
  for (let i = 1; i <= 20; i++) {
    let ingr=`strIngredient${i}`;
    let meas=`strMeasure${i}`
    
    console.log(details[ingr])
    
    if (details[ingr]) {
      ingediant+= `<div class="alert alert-info fit-content p-1 m-2" role="alert">
      ${details[ingr]}  ${details[meas]}
    
         </div>`

    }else break;

  }
  
  let tags = details.strTags?.split(",")
 
  if (!tags) {
      tags = []
  }

  let tagsStr = ''
  for (let i = 0; i < tags.length; i++) {
      tagsStr += `
      <div class="alert alert-info fit-content p-1 m-2" role="alert">
      ${tags[i]}
    
         </div>`
      
  }
  box =  `
  <div class="col-md-5 d-flex flex-column">
                <img src="${details.strMealThumb}"class="w-100" alt="">
                <h3 clas="text-center">
                ${details.strMeal}
                </h3>
            </div>
            <div class="col-md-7 d-flex flex-column">
                <h2>Instructions</h2>
                <p>${details.strInstructions}</p>
                <h3>Area :${details.strArea}</h3>
                <h3>Category :${details.strCategory}</h3>
                <h3>Recipes :</h3>
                <div class="d-flex flex-wrap  g-2">
                    ${ingediant}
                      
                </div>
                <h3>tags:</h3>
                <div class="d-flex flex-wrap  g-2">
                    ${tagsStr}
                      
                </div>
                <div class="ms-4 mt-3">
                    <a href="${details.strSource}"class="btn btn-success"> sourse</a>
                    <a href="${details.strYoutube}"class="btn btn-danger">toutup</a>

                </div>
                

            
            </div>
  `
$(".full-detal .row").html(box);

}
async function getMaleById(id) {
  const respons = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  const data = await respons.json();
 
  displayFullDeails(data.meals[0])


}
$(".row").on("click", ".meal", function (e) {
  // Access the clicked element with class 'meal'
  const id = $(this).attr("data-mealid");
  console.log(id)
  $("body >.active").removeClass("active").addClass("none");
  $("body >.full-detal").removeClass("none").addClass("active");

  getMaleById(id);



});


