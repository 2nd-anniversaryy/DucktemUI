// accordion
window.addEventListener("load",function(){
    var qna = document.querySelector(".qna-chk-wrap");

    let titleList = qna.querySelectorAll(".qna-title");
    let answerList = qna.querySelectorAll(".answer");
    let crampsList = qna.querySelectorAll(".cramps");

    let current = null;
    let currentElement = null;
    
    qna.onclick = function(e){
        var isQna = e.target.classList.contains("qna-title");
        var isCramp = e.target.classList.contains("cramps");


        if(!isQna && !isCramp)
            return;

        if(isQna){

            // title 클릭
            current = e.target;
        
            e.target.classList.add("active");
            for(i=0; i < titleList.length ;i++){
                if(current != null){
                    current.classList.remove("active");
                    crampsList[i].classList.remove("active");
                    answerList[i].classList.add("d-none");
                }
                
                if(titleList[i]==e.target){
                    answerList[i].classList.remove("d-none");
                    crampsList[i].classList.add("active");
                    currentElement = i;
                }
                
            }
        }
        
        // 꺽쇠
        if(isCramp){
            current.classList.remove("active");
            crampsList[currentElement].classList.remove("active");
            answerList[currentElement].classList.add("d-none");
        }

    }


})