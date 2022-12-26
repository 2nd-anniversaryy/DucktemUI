// window.addEventListener('load', function(){
//     let vectorLeft = this.document.querySelector('.vector-left');
//     let vectorRight = this.document.querySelector('.vector-right');
//     let bannerWrap = document.querySelector('.banner-wrap');
//     let isMoved = true;

//     let current = 0;

//     vectorLeft.onclick = function(e) {
//         if(current>0){
//             current--;
//         }
//         if(current==0)
//             bannerWrap.style.transform = 'translate(0vw)';
//         if(current==1)
//             bannerWrap.style.transform = 'translate(-100vw)';
//         if(current==2)
//             bannerWrap.style.transform = 'translate(-200vw)';
        
//     }

//     vectorRight.onclick = function(e) {
//         if(current<2){
//             current++;
//         }

//         // console.log(current);
//         if(current==0)
//             bannerWrap.style.transform = 'translate(0vw)';
//         if(current==1)
//             bannerWrap.style.transform = 'translate(-100vw)';

//         if(current==2)
//             bannerWrap.style.transform = 'translate(-200vw)';



//     }
    
// });
window.addEventListener('load', function(){
    let vectorLeft = this.document.querySelector('.vector-left');
    let vectorRight = this.document.querySelector('.vector-right');
    let bannerWrap = document.querySelector('.banner-wrap');
    let isMoved = true;

    let current = 0;

    vectorLeft.onclick = function(e) {
        if(current>-1){
            current--;
        }
        if(current>=3 || current==-1)
            current=2;

        if(current==0)
            bannerWrap.style.transform = 'translate(0vw)';
        else if(current==1)
            bannerWrap.style.transform = 'translate(-100vw)';
        else if(current==2)
            bannerWrap.style.transform = 'translate(-200vw)';
        
    }

    vectorRight.onclick = function(e) {
        if(current<3){
            current++;
        }
        if(current<=-1 || current==3)
            current=0;


        if(current==0)
            bannerWrap.style.transform = 'translate(0vw)';
        else if(current==1)
            bannerWrap.style.transform = 'translate(-100vw)';
        else if(current==2)
            bannerWrap.style.transform = 'translate(-200vw)';




    }
    
});