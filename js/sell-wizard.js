







//=======================================================================//
// ====================    상품등록 (이전 이후 넘기기)    ================//
//=======================================================================//
window.addEventListener("load", function () {


    let firstClick = document.querySelector("#first-click");
    let secondClick = document.querySelector("#second-click");
    let thirdClick = document.querySelector("#third-click");
    let wizard = document.getElementsByClassName("wizard");



    firstClick.addEventListener("click", function () {
        document.querySelector("#one").classList.add("d-none");
        document.querySelector("#two").classList.remove("d-none");
        wizard[0].classList.remove("first");
        wizard[1].classList.add("second");
    })
    secondClick.addEventListener("click", function () {
        document.querySelector("#two").classList.add("d-none");
        document.querySelector("#third").classList.remove("d-none");
        wizard[1].classList.remove("second");
        wizard[2].classList.add("third");
    })
    thirdClick.addEventListener("click", function () {
        document.querySelector("#third").classList.add("d-none");
        document.querySelector("#four").classList.remove("d-none");
        wizard[2].classList.remove("third");
        wizard[3].classList.add("fourth");
    })


    let quitReg = document.querySelector("#quit-reg");
    let secondBack = document.querySelector("#second-back");
    let thirdBack = document.querySelector("#third-back");
    let fourthBack = document.querySelector("#fourth-back");


    quitReg.addEventListener("click", function () {
        document.querySelector("#one").classList.add("d-none");
        document.querySelector("#two").classList.remove("d-none");
        wizard[0].classList.remove("first");
        wizard[1].classList.add("second");
    })
    secondBack.addEventListener("click", function () {
        document.querySelector("#two").classList.add("d-none");
        document.querySelector("#one").classList.remove("d-none");
        wizard[1].classList.remove("second");
        wizard[0].classList.add("first");
    })
    thirdBack.addEventListener("click", function () {
        document.querySelector("#third").classList.add("d-none");
        document.querySelector("#two").classList.remove("d-none");
        wizard[2].classList.remove("third");
        wizard[1].classList.add("second");
    })
    fourthBack.addEventListener("click", function () {
        document.querySelector("#four").classList.add("d-none");
        document.querySelector("#third").classList.remove("d-none");
        wizard[3].classList.remove("fourth");
        wizard[2].classList.add("third");
    })







    //=======================================================================//
    // ====================    카테고리 선택 (2번째 페이지)    ================//
    //=======================================================================//

    let supercateValue;
    let category = document.querySelector("#category");
    let cate = document.querySelector(".category-select");
    let supercate = document.querySelector(".supercategory-select");
    let subcate = document.querySelectorAll(".subcategory-select");
    let value;



    //-------카테고리 선택 시작을 위한 함수
    cate.onclick = function (e) {
        e.preventDefault();
        supercate.classList.remove("d-none");
    }




    //-------대분류 선택을 위한 함수

    supercate.onclick = function (e) {

        if (e.target.classList.contains("exit"))
            supercate.classList.add("d-none");


        if (e.target.checked) {
            value = e.target.getAttribute("id");
        }


        if (value != undefined && e.target.classList.contains("next-btn")) {
            supercate.classList.add("d-none");

            switch (value) {
                case "공식굿즈":
                    supercateValue = 0;
                    subcate[0].classList.remove("d-none");
                    break;

                case "비공식굿즈":
                    supercateValue = 1;
                    subcate[1].classList.remove("d-none");
                    break;


                case "대리티켓팅":
                    supercateValue = 2;
                    subcate[2].classList.remove("d-none");
                    break;
            }


            subcate[supercateValue].onclick = function (e) {

                if (e.target.classList.contains("exit"))
                    subcate[supercateValue].classList.add("d-none");


                if (value != undefined && e.target.classList.contains("final")) {
                    subcate[supercateValue].classList.add("d-none");
                    category.value = value;
                }


                if (e.target.checked) {
                    value = e.target.getAttribute("id");
                }
                console.log(value);

            }


        }


    }



})