window.addEventListener("load", function () {
    let title = document.querySelector(".title");

    let sellingBtn = title.querySelector(".selling-btn");

    let wishListBtn = title.querySelector(".wish-list-btn");

    let reviewBtn = title.querySelector(".review-btn");

    let productPage = document.querySelector(".product-page");
    let wishListPage = document.querySelector(".wishList-page");
    let reviewPage = document.querySelector(".review");

    sellingBtn.onclick = function(e){
        productPage.classList.remove("d-none");
        wishListPage.classList.add("d-none");
        reviewPage.classList.add("d-none");
    }

    wishListBtn.onclick = function(e){
        wishListPage.classList.remove("d-none");
        reviewPage.classList.add("d-none");
        productPage.classList.add("d-none");
    }
    reviewBtn.onclick = function(e){
        
        reviewPage.classList.remove("d-none");
        productPage.classList.add("d-none");
        wishListPage.classList.add("d-none"); 

    }

    // =====키워드 알림======================================================

    let profileSection = document.querySelector(".profile");
    let keywordAlert = profileSection.querySelector(".keyword-alert-btn");
    
    let keywordSection = document.querySelector(".keyword-alert-wrap");

    let keywordClose = keywordSection.querySelector(".keyword-close");
  
    keywordAlert.onclick = function (e) {
        e.preventDefault();

        keywordSection.classList.remove("d-none");
    }

    keywordClose.onclick = function(e){
        keywordSection.classList.add("d-none");
    }

});
