// side bar
window.addEventListener("load", function () {
    let main = document.querySelector(".main-wrap");

    let section = document.querySelector(".header-wrap");
    let burger = section.querySelector(".burger-icon");
    let menuBarCategory = section.querySelector(".menu-bar-category");

    // 버거 클릭시에 켜지기 
    burger.onclick = function (e) {
        if (!burger.classList.contains('active')) {
            burger.classList.add("active");
            menuBarCategory.classList.add("active");
        }
        else if (burger.classList.contains('active')) {
            burger.classList.remove("active");
            menuBarCategory.classList.remove("active");
        }
    };



    // =================================검색창
    let search = document.querySelector(".search-wrap");
    let searchIcon = document.querySelector(".search-icon");
    let searchBack = document.querySelector(".search-input-back");
    // 알람
    let alarmIcon = document.querySelector(".alarm-icon");
    let alarm = document.querySelector(".alarm-container");

    //덕템톡 알람
    let chatIcon = document.querySelector(".chat-icon");
    let chatAlarm = document.querySelector(".chatting-alarm-container");

    searchIcon.onclick = function (e) {
        if (!alarm.classList.contains("d-none")) {
            alarm.classList.add("d-none")
        }
        if (!chatAlarm.classList.contains("d-none")) {
            chatAlarm.classList.add("d-none")
        }

        search.classList.remove("d-none");
    }


    // 메인 클릭 시에 꺼지기
    main.onclick = function (e) {
        if (!main.classList.contains('active')) {
            burger.classList.remove("active");
            menuBarCategory.classList.remove("active");
        }

        if (!search.classList.contains('active')) {
            search.classList.add("d-none");
        }


        if (!alarm.classList.contains('active')) {
            alarm.classList.add("d-none");
        }

        if (!chatAlarm.classList.contains('active')) {
            chatAlarm.classList.add("d-none");
        }
    };

    searchBack.onclick = function (e) {
        search.classList.add("d-none");
    }


    chatIcon.onclick = function (e) {
        console.log("chat");
    }

    // =========================================알림


    alarmIcon.onclick = function (e) {
        if (!search.classList.contains("d-none"))
            search.classList.add("d-none")

        if (!chatAlarm.classList.contains("d-none"))
            chatAlarm.classList.add("d-none")

        alarm.classList.remove("d-none");
    }

    alarm.onclick = function (e) {
        if (e.target.classList.contains("alarm-close"))
            alarm.classList.add("d-none");

    }


    // =========================================덕템톡 알림


    chatIcon.onclick = function (e) {
        if (!search.classList.contains("d-none"))
            search.classList.add("d-none")

        if (!alarm.classList.contains("d-none"))
            alarm.classList.add("d-none")

        chatAlarm.classList.remove("d-none");
    }

    chatAlarm.onclick = function (e) {
        if (e.target.classList.contains("chatting-alarm-close"))
            chatAlarm.classList.add("d-none");

    }
})
