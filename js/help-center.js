// accordion
window.addEventListener("load", function () {



    // FAQ 페이지
    let faqPage = this.document.querySelector('.faq-page');

    let qna = document.querySelector(".qna-chk-wrap");

    let titleList = qna.querySelectorAll(".qna-title");
    let answerList = qna.querySelectorAll(".answer");
    let crampsList = qna.querySelectorAll(".cramps");

    let current = null;
    let currentElement = null;

    qna.onclick = function (e) {
        var isQna = e.target.classList.contains("qna-title");
        var isCramp = e.target.classList.contains("cramps");


        if (!isQna && !isCramp)
            return;

        if (isQna) {

            // title 클릭
            current = e.target;

            e.target.classList.add("active");
            for (i = 0; i < titleList.length; i++) {
                if (current != null) {
                    current.classList.remove("active");
                    crampsList[i].classList.remove("active");
                    answerList[i].classList.add("d-none");
                }

                if (titleList[i] == e.target) {
                    answerList[i].classList.remove("d-none");
                    crampsList[i].classList.add("active");
                    currentElement = i;
                }

            }
        }

        // 꺽쇠
        if (isCramp) {
            current.classList.remove("active");
            crampsList[currentElement].classList.remove("active");
            answerList[currentElement].classList.add("d-none");
        }

    }

    //1:1문의 게시판 페이지

    const questionPage = this.document.querySelector('.question-page');
    const questionContainer = questionPage.querySelectorAll('.question-container');
    const questionBoard = questionPage.querySelector('.question-board');
    const inputContainer = questionPage.querySelector('.input-container');
    const questionAnswer = questionPage.querySelectorAll('.question-answer');
    const writeBtn = questionPage.querySelector('.write-btn');
    const cancelBtn = questionPage.querySelector('.cancel-btn');
    const registBtn = questionPage.querySelector('.regist-btn');

// jihyeon




//

    for (let i = 0; i < questionContainer.length; i++) {
        questionContainer[i].onclick = function (e) {
            let cramp = questionContainer[i].querySelector(".cramps");

            if (questionAnswer[i].classList.contains('d-none')){
                questionAnswer[i].classList.remove('d-none');
                cramp.classList.add("active");
            }
            
            else if (!questionAnswer[i].classList.contains('d-none')){
                questionAnswer[i].classList.add('d-none')
                cramp.classList.remove("active");
            }
        }
    }

    writeBtn.onclick = function (e) {
        if (inputContainer.classList.contains('d-none')) {
            inputContainer.classList.remove('d-none')
            writeBtn.classList.add('d-none')
            cancelBtn.classList.remove('d-none')
            registBtn.classList.remove('d-none')
        }
    }

    cancelBtn.onclick = function (e) {
        if(!inputContainer.classList.contains('d-none'))
            inputContainer.classList.add('d-none');
            cancelBtn.classList.add('d-none');
            registBtn.classList.add('d-none');
            writeBtn.classList.remove('d-none');
    }

    //덕템이용방법 페이지
    let methodPage = this.document.querySelector('.method-page');
    let mannerCategoryBtn = methodPage.querySelector('.manner-category-btn');
    let wordCategoryBtn = methodPage.querySelector('.word-category-btn');
    let methodCategoryBtn = methodPage.querySelector('.method-category-btn');

    let mannerCategory = methodPage.querySelector('.manner-category');
    let wordCategory = methodPage.querySelector('.word-category');
    let methodCategory = methodPage.querySelector('.method-category');


    mannerCategoryBtn.onclick = function (e) {
        if(mannerCategoryBtn.style.backgroundColor = "rgba(128, 128, 128, 0.2)") {
            mannerCategoryBtn.style.backgroundColor = "var(--color-primary)";
            wordCategoryBtn.style.backgroundColor = "rgba(128, 128, 128, 0.2)"
            methodCategoryBtn.style.backgroundColor = "rgba(128, 128, 128, 0.2)"
        }

        if (mannerCategory.classList.contains('d-none')) {
            mannerCategory.classList.remove('d-none');
            wordCategory.classList.add('d-none');
            methodCategory.classList.add('d-none');
        }
    }

    wordCategoryBtn.onclick = function (e) {
        if(wordCategoryBtn.style.backgroundColor = "rgba(128, 128, 128, 0.2)") {
            wordCategoryBtn.style.backgroundColor = "var(--color-primary)";
            mannerCategoryBtn.style.backgroundColor = "rgba(128, 128, 128, 0.2)"
            methodCategoryBtn.style.backgroundColor = "rgba(128, 128, 128, 0.2)"
        }

        if (wordCategory.classList.contains('d-none')) {
            mannerCategory.classList.add('d-none');
            wordCategory.classList.remove('d-none');
            methodCategory.classList.add('d-none');
        }
    }

    methodCategoryBtn.onclick = function (e) {
        if(methodCategoryBtn.style.backgroundColor = "rgba(128, 128, 128, 0.2)") {
            methodCategoryBtn.style.backgroundColor = "var(--color-primary)";
            wordCategoryBtn.style.backgroundColor = "rgba(128, 128, 128, 0.2)"
            mannerCategoryBtn.style.backgroundColor = "rgba(128, 128, 128, 0.2)"
        }

        if (methodCategory.classList.contains('d-none')) {
            mannerCategory.classList.add('d-none');
            wordCategory.classList.add('d-none');
            methodCategory.classList.remove('d-none');
        }
    }

    //덕템이용정책 페이지
    let policyPage = this.document.querySelector('.policy-page');


    // grid-menu

    let gridMenu = this.document.querySelector('.grid-menu');
    let menuFaq = gridMenu.querySelector('.menu-faq');
    let menuQuestion = gridMenu.querySelector('.menu-question');
    let menuMethod = gridMenu.querySelector('.menu-method');
    let menuPolicy = gridMenu.querySelector('.menu-policy');

    menuFaq.onclick = function (e) {
        if(menuFaq.style.borderBottom = "none") {
            menuFaq.style.borderBottom = "3px solid gray";
            menuQuestion.style.borderBottom = "none";
            menuMethod.style.borderBottom = "none";
            menuPolicy.style.borderBottom = "none";
        }

        if (faqPage.classList.contains('d-none')) {
            faqPage.classList.remove('d-none');
            questionPage.classList.add('d-none');
            methodPage.classList.add('d-none');
            policyPage.classList.add('d-none');
        }
    }

    menuQuestion.onclick = function (e) {
        if(menuQuestion.style.borderBottom = "none") {
            menuQuestion.style.borderBottom = "3px solid gray";
            menuFaq.style.borderBottom = "none";
            menuMethod.style.borderBottom = "none";
            menuPolicy.style.borderBottom = "none";
        }

        if (questionPage.classList.contains('d-none')) {
            questionPage.classList.remove('d-none');
            faqPage.classList.add('d-none')
            methodPage.classList.add('d-none');
            policyPage.classList.add('d-none');
        }
    }

    menuMethod.onclick = function (e) {
        if(menuMethod.style.borderBottom = "none") {
            menuMethod.style.borderBottom = "3px solid gray";
            menuFaq.style.borderBottom = "none";
            menuQuestion.style.borderBottom = "none";
            menuPolicy.style.borderBottom = "none";
        }

        if (methodPage.classList.contains('d-none')) {
            methodPage.classList.remove('d-none');
            faqPage.classList.add('d-none')
            questionPage.classList.add('d-none');
            policyPage.classList.add('d-none');
        }
    }

    menuPolicy.onclick = function (e) {
        if(menuPolicy.style.borderBottom = "none") {
            menuPolicy.style.borderBottom = "3px solid gray";
            menuFaq.style.borderBottom = "none";
            menuQuestion.style.borderBottom = "none";
            menuMethod.style.borderBottom = "none";
        }

        if (policyPage.classList.contains('d-none')) {
            policyPage.classList.remove('d-none');
            faqPage.classList.add('d-none')
            questionPage.classList.add('d-none');
            methodPage.classList.add('d-none');
        }
    }




});