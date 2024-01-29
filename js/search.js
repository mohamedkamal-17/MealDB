$("#byname").keyup(function(){
 
    let name = $(this).val();
   
    getMealByName(name);
})




async function getMealByName(name){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    const data = await response.json();
    
    displayMals(data.meals)
    

}




$("#byfletter").keyup(function(){
 
    let letter = $(this).val();
   
    getMealByFletter(letter);
})
 async function getMealByFletter(fLetter){

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${fLetter}`);
    const data = await response.json();
    console.log(data);
    displayMals(data.meals)
 }
    

function displayMals(data) {
let box="";
  for(let i = 0; i < data.length; i++) 
 {
  box+=` <div class="col-lg-3 col-md-4 col-sm-6 p-2 meal "data-mealid=${data[i].idMeal} ">
  <div class="position-relative  overflow-hidden rounded-2">
  <img src="${data[i].strMealThumb
  }" class="w-100" alt="">
  <div class="position-absolute layr text-black  d-flex flex-column justify-content-center text-center bg-info-subtle opacity-75">
      <h3>${data[i].strMeal}</h3>
      </div>

                </div>
 
</div>`
   

 }
 $(".active .row").html(box);

}


