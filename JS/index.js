//................................. Global varaibles ...............................
const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const ageRegex = /^([1-9]\d)$/;
const phoneRegex = /^[\+]?[0]?[0-9]{3}[-\s]?[0-9]{3}[-\s]?[0-9]{4,6}$/;
const emailRegex = /^[\w-\.]+@([\w-]{2,}\.)+[\w-]{2,4}$/;
const nameRegex = /^[a-zA-Z]{3,}\s(?:[a-zA-Z]{3,}\s?){2,3}$/; // Full name at least 3 letters each
let emailInput = $(".email-input");
let ageInput = $(".age-input");
let passInput = $(".pass-input");
let rePassInput = $(".rePass-input");
let phoneInput = $(".phone-input");
let nameInput = $(".name-input");
let searchName = $(".search-name");
let searchletter = $(".search-letter");

//.................................. Side Bar..............................
$(".burger-icon-div").click(() => {
  $(".burger-icon").toggleClass("fa-xmark");
  $(".burger-icon").toggleClass("fa-bars");

  let sidbarSliderWidth = $(".menu-items-div").innerWidth();

  $(".menu-nav").css("left") == "0px"
    ? $(".menu-nav").animate({ left: -sidbarSliderWidth }, 0)
    : $(".menu-nav").animate({ left: 0 }, 0);

  $(".menu-ul").toggleClass("animate__fadeOutDown");
  setTimeout(() => {
    $(".menu-ul").toggleClass("animate__fadeInUp");
  }, 1000);
});

// Change page when press page name
$(".menu-item").click(function () {
  $(".active-section").toggleClass("active-section");
  let click = $(this).attr("data-pageName");
  $(`.${click}`).toggleClass("active-section");
});

//.................................. Contact US..............................
//Email Validation
$(".email-msg").hide(1);
emailInput.keyup(function (e) {
  let flag = false;

  if (emailRegex.test($(".email-input").val()) == false) {
    $(".email-msg").addClass("bg-danger");
    $(".email-msg").removeClass("bg-success");
    $(".email-msg").html("like: example@yy.zz");
  } else {
    $(".email-msg").html("correct");
    $(".email-msg").removeClass("bg-danger");
    $(".email-msg").addClass("bg-success");
  }
  $(".email-msg").slideDown();
});
emailInput.blur(function (e) {
  e.preventDefault();
  $(".email-msg").slideUp();
});

//name Validation
$(".name-msg").hide(1);
nameInput.keyup(function (e) {
  let flag = false;
  if (nameRegex.test($(".name-input").val()) == false) {
    $(".name-msg").addClass("bg-danger");
    $(".name-msg").removeClass("bg-success");
    $(".name-msg").html("Full name at least 3 letters each");
  } else {
    $(".name-msg").html("correct");
    $(".name-msg").removeClass("bg-danger");
    $(".name-msg").addClass("bg-success");
  }
  $(".name-msg").slideDown();
});
nameInput.blur(function (e) {
  e.preventDefault();
  $(".name-msg").slideUp();
});

//phone Validation
$(".phone-msg").hide(1);
phoneInput.keyup(function (e) {
  let flag = false;
  if (phoneRegex.test(phoneInput.val()) == false) {
    $(".phone-msg").addClass("bg-danger");
    $(".phone-msg").removeClass("bg-success");
    $(".phone-msg").html("10 Numbers Minimum");
  } else {
    $(".phone-msg").html("correct");
    $(".phone-msg").removeClass("bg-danger");
    $(".phone-msg").addClass("bg-success");
  }
  $(".phone-msg").slideDown();
});
phoneInput.blur(function (e) {
  e.preventDefault();
  $(".phone-msg").slideUp();
});

//age Validation
$(".age-msg").hide(1);
ageInput.keyup(function (e) {
  let flag = false;

  if (ageRegex.test(ageInput.val()) == false) {
    $(".age-msg").addClass("bg-danger");
    $(".age-msg").removeClass("bg-success");
    $(".age-msg").html("10 to 99");
  } else {
    $(".age-msg").html("correct");
    $(".age-msg").removeClass("bg-danger");
    $(".age-msg").addClass("bg-success");
  }
  $(".age-msg").slideDown();
});
ageInput.blur(function (e) {
  e.preventDefault();
  $(".age-msg").slideUp();
});

//pass Validation

$(".pass-msg").hide(1);

passInput.keyup(function (e) {
  if (passRegex.test(passInput.val()) == false) {
    $(".pass-msg").addClass("bg-danger");
    $(".pass-msg").removeClass("bg-success");
    $(".pass-msg").html("8 minimum (small and CAPITAL letters + numbers)");
  } else {
    $(".pass-msg").html("correct");
    $(".pass-msg").removeClass("bg-danger");
    $(".pass-msg").addClass("bg-success");
  }
  $(".pass-msg").slideDown();
});
passInput.blur(function (e) {
  e.preventDefault();
  $(".pass-msg").slideUp();
});

//rePass Validation
$(".rePass-msg").hide(1);
rePassInput.keyup(function (e) {
  $(".rePass-msg").slideDown();
  if (rePassInput.val() != passInput.val()) {
    $(".rePass-msg").addClass("bg-danger");
    $(".rePass-msg").removeClass("bg-success");
    $(".rePass-msg").html("Not equal the password");
  } else {
    $(".rePass-msg").html("correct");
    $(".rePass-msg").removeClass("bg-danger");
    $(".rePass-msg").addClass("bg-success");
  }
});
rePassInput.blur(function (e) {
  e.preventDefault();
  $(".rePass-msg").slideUp();
});

setInterval(() => {
  if (
    phoneRegex.test(phoneInput.val()) == true &&
    ageRegex.test(ageInput.val()) == true &&
    passRegex.test(passInput.val()) == true &&
    nameRegex.test(nameInput.val()) == true &&
    emailRegex.test(emailInput.val()) == true &&
    rePassInput.val() == passInput.val()
  ) {
    $(".submit-btn").removeClass("disabled");
  } else {
    $(".submit-btn").addClass("disabled");
  }
}, 500);
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Categories <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
let catShowDiv = $(".categories-show-div");
let catbox = ``;
async function mealCategoriesFetch() {
  const catApiConn = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const apiResponse = await catApiConn.json();
  const { categories } = apiResponse;
  for (let i = 0; i < categories.length; i++) {
    catbox += `
  <div id="${categories[i].idCategory}" class="meal col-md-3 col-sm-12 overflow-hidden">
            <div class="overflow-hidden p-0 position-relative rounded-4">
              <img
                class="w-100 img-fluid position-relative"
                src="${categories[i].strCategoryThumb}"
                alt=""
              />
              <div
                class="meal-layer position-absolute top-100 w-100 h-100 bg-white opacity-75 text-center"
              >
              <h4>${categories[i].strCategory}</h4>
                <p>${categories[i].strCategoryDescription}</p>
              </div>
            </div>
          </div>
  `;
  }
  catShowDiv.html(catbox);
}
mealCategoriesFetch();
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Areas <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
let areaShowDiv = $(".area-show-div");
let areabox = ``;
async function areaMealsFetch() {
  const areaApiConn = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  const apiResponse = await areaApiConn.json();
  const { meals } = apiResponse;
  for (let i = 0; i < meals.length; i++) {
    areabox += `
    <div class="col-md-3 col-sm-12 text-white text-center text-capitalize mb-sm-4">
    <i class="Areas-icon fa-solid fa-house-laptop  w-100 fs-1"></i>
    <h2>${meals[i].strArea}</h2>
  </div>
  `;
  }
  areaShowDiv.html(areabox);
}
areaMealsFetch();
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Ingredients <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
let ingredientsShowDiv = $(".ingredients-show-div");
let ingredientsbox = ``;
async function ingredientsMealsFetch() {
  const ingredientsApiConn = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
  );
  const apiResponse = await ingredientsApiConn.json();
  const { meals } = apiResponse;
  for (let i = 0; i < 200; i++) {
    ingredientsbox += `
    <div id="${
      meals[i].idIngredient
    }" class="col-md-3 col-sm-12 text-white text-center align-items-stretch ">
    <i class="Ingredient-icons fa-solid fa-drumstick-bite text-white mb-sm-4"></i>
    <div class="d-flex flex-column justify-content-between">
      <div>
          <h2 class="text-center ">${meals[i].strIngredient}</h2>
      </div>
      <div class="text-center">
          <p>
          ${
            meals[i].strDescription
              ? meals[i].strDescription.substr(0, 200)
              : ""
          }
          </p>
      </div>
    </div>
  </div>
  `;
  }
  ingredientsShowDiv.html(ingredientsbox);
}
ingredientsMealsFetch();
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Search <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
let searchShowDiv = $(".search-show-div");
let searchbox = ``;
searchName.keyup(function (e) {
  searchbox = ``;
  console.log("hiiiiiii");
  async function searchMealsFetch() {
    const searchApiConn = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName.val()}`
    );
    const apiResponse = await searchApiConn.json();
    const { meals } = apiResponse;
    console.log(meals);
    meals ? displayResults() : console.log(meals);

    function displayResults() {
      searchbox = ``;
      for (let i = 0; i < meals.length; i++) {
        searchbox += `
      <div id="${meals[i].idMeal}" class="meal col-md-3 col-sm-12 overflow-hidden">
      <div class="overflow-hidden p-0 position-relative rounded-4">
        <img
          class="w-100 img-fluid position-relative"
          src="${meals[i].strMealThumb}"
          alt=""
        />
        <div
          class="meal-layer position-absolute top-100 w-100 h-100 bg-white opacity-75 text-center"
        >
        <h4>${meals[i].strMeal}</h4>
        </div>
      </div>
    </div>
  `;
      }
    }
    // console.log(searchbox);
    searchShowDiv.html(searchbox);
  }
  searchMealsFetch();
});

//................................ To show validation msg t user ....................
function alertMsg(msg) {
  warningBoxMsg.innerHTML = msg;
  warningBox.classList.add("display");
  setTimeout(() => {
    warningBox.classList.remove("display");
    warningBoxMsg.innerHTML = "";
  }, "3000");
}
