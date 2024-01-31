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
let searchShowDiv = $(".search-show-div");
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Side Bar <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
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
//................................ Change page when press page name ....................
$(".menu-item").click(function () {
  $(".active-section").toggleClass("active-section");
  let click = $(this).attr("data-pageName");
  $(`.${click}`).toggleClass("active-section");
  switch (click) {
    case "Ingredients":
      Ingredients();
      break;
    case "Area":
      Areas();
      break;
    case "Categories":
      Categories();
      break;
    default:
      break;
  }
  // show search bar and empty search result area because I use search page for show
  $(".search-div-row").removeClass("d-none");
  searchShowDiv.html(``);
});
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Contact US <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
//.................................. Email Validation ..............................
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
//................................ name Validation ....................
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
//................................ phone Validation ....................
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
//................................ age Validation ....................
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
//................................ pass Validation ....................
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
//................................ rePass Validation ....................
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
async function Categories() {
  $(".loading-layer").removeClass("d-none");
  let count = 5;
  while (count > 0) {
    try {
      let catShowDiv = $(".categories-show-div");
      let catbox = ``;
      const catApiConn = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const apiResponse = await catApiConn.json();
      const { categories } = apiResponse;
      for (let i = 0; i < categories.length; i++) {
        catbox += `
  <div id="${categories[i].strCategory}" class="meal cats col-md-3 col-sm-8 m-sm-auto m-md-0  overflow-hidden">
            <div class="overflow-hidden p-0 position-relative rounded-4">
              <img
                class="w-100 img-fluid position-relative"
                src="${categories[i].strCategoryThumb}"
                alt=""
              />
              <div
                class="meal-layer position-absolute top-100 w-100 h-100 bg-white opacity-75 text-center "
              >
              <h4 id="${categories[i].strCategory}">${categories[i].strCategory}</h4>
                <p class="">${categories[i].strCategoryDescription}</p>
              </div>
            </div>
          </div>
  `;
      }
      catShowDiv.html(catbox);
      $(".loading-layer").addClass("d-none");
      displayDetailsOfDetails(
        ".cats",
        "https://www.themealdb.com/api/json/v1/1/filter.php?c="
      );
      $(".error").html(``);
      return true;
    } catch (error) {
      $(".error").html(
        `Sorry faild to get your data, we are trying agian in ${count}`
      );
    }
    count -= 1;
  }
  $(".error").html(`Faild! Please reload the page`);
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Areas <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
async function Areas() {
  let areaShowDiv = $(".area-show-div");
  let areabox = ``;
  let meals = await searchMealsFetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  for (let i = 0; i < meals.length; i++) {
    areabox += `
    <div id="${meals[i].strArea}" class="areas-divs col-md-3 col-sm-12 text-white text-center text-capitalize mb-sm-4">
    <i class="Areas-icon fa-solid fa-house-laptop  w-100 fs-1"></i>
    <h2>${meals[i].strArea}</h2>
  </div>
  `;
  }
  areaShowDiv.html(areabox);
  displayDetailsOfDetails(
    ".areas-divs",
    "https://www.themealdb.com/api/json/v1/1/filter.php?a="
  );
}
// areaMealsFetch();
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Ingredients <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
async function Ingredients() {
  let ingredientsShowDiv = $(".ingredients-show-div");
  let ingredientsbox = ``;
  let meals = await searchMealsFetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
  );
  for (let i = 0; i < 200; i++) {
    ingredientsbox += `
    <div id="${
      meals[i].strIngredient
    }" class="ingredients-divs col-md-3 col-sm-10 m-sm-auto m-md-0 text-white text-center align-items-stretch ">
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

  displayDetailsOfDetails(
    ".ingredients-divs",
    "https://www.themealdb.com/api/json/v1/1/filter.php?i="
  );
}
// ingredientsMealsFetch();
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Search <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
let searchbox = ``;
let mealId;
let sercahedMeals;
//................................ Search by Name ....................
searchName.keyup(async function (e) {
  searchbox = ``;
  let apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName.val()}`;

  (await searchMealsFetch(apiUrl))
    ? displaySearchResults(await searchMealsFetch(apiUrl), searchbox)
    : await searchMealsFetch(apiUrl);

  searchShowDiv.html(
    displaySearchResults(await searchMealsFetch(apiUrl), searchbox)
  );
  sercahedMeals = $(".meal");

  sercahedMeals.click(async function () {
    mealId = this.id;
    displayDetais(await connectDetailsApi(mealId));
    $(".Recipes").html(fillDetailsIngredients(await connectDetailsApi(mealId)));
    showDetailsLayer();
  });
});
//................................ Search by letter ....................
searchletter.keyup(async function (e) {
  searchbox = ``;
  let apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchletter.val()}`;

  (await searchMealsFetch(apiUrl))
    ? displaySearchResults(await searchMealsFetch(apiUrl), searchbox)
    : await searchMealsFetch(apiUrl);

  searchShowDiv.html(
    displaySearchResults(await searchMealsFetch(apiUrl), searchbox)
  );
  sercahedMeals = $(".meal");

  sercahedMeals.click(async function () {
    mealId = this.id;
    displayDetais(await connectDetailsApi(mealId));
    $(".Recipes").html(fillDetailsIngredients(await connectDetailsApi(mealId)));
    showDetailsLayer();
  });
});
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> automation functions <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<//
async function searchMealsFetch(apiUrl) {
  $(".loading-layer").removeClass("d-none");
  let count = 5;
  while (count > 0) {
    try {
      const searchApiConn = await fetch(apiUrl);
      const apiResponse = await searchApiConn.json();
      const { meals } = apiResponse;
      $(".loading-layer").addClass("d-none");
      $(".error").html(``);
      return meals;
    } catch (error) {
      $(".error").html(
        `Sorry faild to get your data, we are trying agian in ${count}`
      );
    }
    count -= 1;
  }
  $(".error").html(`Faild! Please reload the page`);
}
function displaySearchResults(apiResp, displayBox) {
  displayBox = ``;
  for (let i = 0; i < apiResp.length; i++) {
    displayBox += `
  <div id="${apiResp[i].idMeal}" class="meal col-md-3 col-sm-12 overflow-hidden">
  <div class="overflow-hidden p-0 position-relative rounded-4">
    <img
      class="w-100 img-fluid position-relative"
      src="${apiResp[i].strMealThumb}"
      alt=""
    />
    <div
      class="meal-layer position-absolute top-100 w-100 h-100 bg-white opacity-75 text-center"
    >
    <h4>${apiResp[i].strMeal}</h4>
    </div>
  </div>
</div>
`;
  }
  return displayBox;
}
function fillDetailsIngredients(apiResp) {
  let recipeIngredients = ``;

  for (let i = 1; i < 21; i++) {
    let recipe = `strIngredient${i}`;
    if (apiResp[recipe] != "" && apiResp[recipe] != null) {
      recipeIngredients += `
          <span class="p-2 rounded bg-info mt-2 d-inline-block">${apiResp[recipe]}</span>
          `;
    }
  }
  return recipeIngredients;
}
function showDetailsLayer() {
  $(".active-section").removeClass("active-section");
  $(".details-section").toggleClass("active-section");
  $(".close-details-btn").click(() => {
    $(".details-section").removeClass("active-section");
    $(".Search").addClass("active-section");
  });
}
function displayDetais(apiResp) {
  $(".details-show-div").html(`
  <figure id="${apiResp.idMeal}" class="col-lg-4 col-md-10 m-lg-0 m-md-auto    mb-lg-5 ">
        <div class="text-center d-flex flex-column justify-content-start align-items-center ">
          <img class="w-100 img-fluid mb-md-2" src="${apiResp.strMealThumb}" alt="">
          <h1>${apiResp.strMeal}</h1>
        </div>
      </figure>
      <figcaption class=" col-lg-8 col-md-10 pe-4 m-md-auto">
        <h1>Instructions
        </h1>
        <p>${apiResp.strInstructions}</p>
        <div class="d-flex flex-column justify-content-between mb-5">
          <h4 class="my-2">Area: ${apiResp.strArea}</h4>
          <h4 class="mb-2">Category: ${apiResp.strCategory}</h4>
          <h4 class="mb-2">Recipes:</h4>
          <p class="Recipes text-dark "></p>
        </div>
        <h4 >Tags:</h4>
        <a class="fw-bolder text-decoration-none btn btn-success mt-3" href="${apiResp.strSource}" target="_blank">Source</a>
        <a class=" fw-bolder text-decoration-none btn btn-success mt-3 " href="${apiResp.strYoutube}" target="_blank"><li class="fa-brands fa-youtube me-1 text-danger"></li>Youtube</a>
      </figcaption>
  `);
}
async function connectDetailsApi(id) {
  $(".loading-layer").removeClass("d-none");
  let count = 5;
  while (count > 0) {
    try {
      const mealDeatilsApiConn = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const apiDetailsResponse = await mealDeatilsApiConn.json();
      const { meals } = apiDetailsResponse;
      $(".loading-layer").addClass("d-none");
      $(".error").html(``);
      return meals[0];
    } catch (error) {
      $(".error").html(
        `Sorry faild to get your data, we are trying agian in ${count}`
      );
    }
    count -= 1;
  }
  $(".error").html(`Faild! Please reload the page`);
}
function displayDetailsOfDetails(currentDiv, apiBase) {
  let showedMeals = $(`${currentDiv}`);
  showedMeals.click(async function () {
    $(".loading-layer").removeClass("d-none");
    let ingredientsBoxChoice = ``;
    let ingredientsName = this.id;
    let apiUrl = `${apiBase}${ingredientsName}`;
    // displaySearchResults(await searchMealsFetch(apiUrl), ingredientsBoxChoice);
    searchShowDiv.html(
      displaySearchResults(await searchMealsFetch(apiUrl), ingredientsBoxChoice)
    );
    $(".active-section").removeClass("active-section");
    $(".Search").addClass("active-section");
    $(".search-div-row").addClass("d-none");
    $(".loading-layer").addClass("d-none");

    let sercahedMeals = $(".meal");
    sercahedMeals.click(async function () {
      mealId = this.id;
      displayDetais(await connectDetailsApi(mealId));
      $(".Recipes").html(
        fillDetailsIngredients(await connectDetailsApi(mealId))
      );
      showDetailsLayer();
    });
  });
}
function displayLoading(currentSectionClass, showBox) {
  setInterval(() => {
    if (
      showBox == `` &&
      $(currentSectionClass).hasClass("active-section") == true
    ) {
      $(".loading-layer").removeClass("d-none");
    } else {
      $(".loading-layer").addClass("d-none");
    }
  }, 500);
}
