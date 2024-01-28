$("#byname").keyup(function(){
 
    let name = $(this).val();
    console.log(name);
    getMealByName(name);
})




async function getMealByName(name){
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    const data = await response.json();
    console.log(data);
    displayMals(data.meals)
    

}




$("#byfletter").keyup(function(){
 
    let letter = $(this).val();
    console.log(letter);
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
  box+=` <div class="col-md-3  meal position-relative "data-mealid=${data[i].idMeal} ">
  <img src="${data[i].strMealThumb
  }" class="w-100" alt="">
  <div class="position-absolute d-flex flex-column justify-content-center text-center top-0 start-0 end-0 bottom-0  bg-danger opacity-75">
      <h3>${data[i].strMeal}</h3>
      </div>
</div>`
   

 }
 $(".active .row").html(box);

}


