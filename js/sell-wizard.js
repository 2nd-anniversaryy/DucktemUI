
+//=======================================================================//
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

        //==================페이지에서 나가야됨-==================//

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
    // ====================    이미지 넣기 (1번째 페이지)    ================//
    //=======================================================================//



    const imgInput = document.querySelector(".img-input");
    const imgInputAfter = document.querySelector(".img-input-after");
    const fileInput = document.querySelector(".file-input");
    let inputBox = document.querySelector(".input-box")
    let newimgInputAfter;



    let imgNum = this.document.querySelector(".img-num")
    let imgIndex = 0;
    imgNum.innerHTML = imgIndex;








    imgInput.onclick = function () {
        console.log(imgIndex);
        if (imgIndex < 4) {
            let event = new MouseEvent("click", {
                'view': window,
                'bubbles': true,
                'cancelable': true
            });

            fileInput.dispatchEvent(event);



        }
    }




    fileInput.oninput = function () {

        let url = fileInput.files[0];

        let reader = new FileReader();
        reader.onload = (evt) => {


            newimgInputAfter = imgInputAfter.cloneNode(true);
            inputBox.insertBefore(imgInput, imgInputAfter)
            inputBox.appendChild(newimgInputAfter);
            imgInputAfter.src = evt.target.result;
            imgInputAfter.classList.remove("d-none");
            imgIndex++;
            imgNum.innerHTML = imgIndex;


        }



        reader.readAsDataURL(url);

    }










    //=======================================================================//
    // ====================    카테고리 선택 (2번째 페이지)    ================//
    //=======================================================================//

    let supercateValue;
    let category = document.querySelector("#category");
    let cate = document.querySelector(".category-select");
    let supercate = document.querySelector(".supercategory-select");
    let subcate = document.querySelectorAll(".subcategory-select");
    let value;
    let background = document.querySelector(".background");



    //-------카테고리 선택 시작을 위한 함수
    cate.onclick = function (e) {
        e.preventDefault();
        supercate.classList.remove("d-none");
        background.classList.add("background-dark")
        
    }




    //-------대분류 선택을 위한 함수

    supercate.onclick = function (e) {

        if (e.target.classList.contains("exit")){
            background.classList.remove("background-dark");
            supercate.classList.add("d-none");
        }


        if (e.target.checked) {
            value = e.target.getAttribute("id");
            category.value = value;
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

                if (e.target.classList.contains("exit")){
                    subcate[supercateValue].classList.add("d-none");
                    background.classList.remove("background-dark");
                }


                if (value != undefined && e.target.classList.contains("final")) {
                    background.classList.remove("background-dark");
                    subcate[supercateValue].classList.add("d-none");
                    category.value=value;
                }


                if (e.target.checked) {
                    value = e.target.getAttribute("id");
                }
                console.log(value);

            }


        }


    }




    //=======================================================================//
    // ====================    태그추가 (3번째 페이지)    ================//
    //=======================================================================//


    const tagInput = document.querySelector(".tag-input");
    const tag = document.querySelector(".tag-default");
    const addBtn = document.querySelector(".btn-add");
    const tagBox = document.querySelector(".tag-box")
    console.log(tag)
    

    let tagIndex = 0
    let blankPattern = /^\s+|\s+$/g;


    tagInput.onclick = function () {
        if (tagIndex == 5) {
            alert("태그는 5개까지만 추가 가능합니다.")
        }


    }



    addBtn.onclick = function () {
        if(!tagInput.value|| (tagInput.value.replace(blankPattern, '' ) == "")){
            alert("공백이 입력되었습니다.")
            return;
        }
        console.log(tagIndex);
        if (tagIndex < 5) {


            newTag = tag.cloneNode(true);
            tagBox.appendChild(newTag);
            tagBox.insertBefore(tag, null)



            tag.innerHTML = tagInput.value;

            tag.classList.remove("d-none")
            tagIndex++;
            tagInput.value = "";
            tagInput.setAttribute(Placeholder, "태그를 입력해주세요");
            

        }
    }



})


