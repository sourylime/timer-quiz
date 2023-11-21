document.addEventListener("DOMContentLoaded", function () {
    var bodyEl = document.getElementById("body");
    if (bodyEl) {
        bodyEl.style.backgroundColor = "#CFAFF4"
    }

    var titleEl = document.getElementById("title");
    if (titleEl) {
        titleEl.style.backgroundColor = "lavender";
        titleEl.style.textAlign = "center";
    }


    var startQuizBtnContainer = document.getElementById("button-container");
    if (startQuizBtnContainer) {

        startQuizBtnContainer.style.display = "flex";
        startQuizBtnContainer.style.justifyContent = "center";
        startQuizBtnContainer.style.alignItems = "center";
    }


    var startQuizBtn = document.getElementById("startBtn");
    if (startQuizBtn) {
        startQuizBtn.style.margin = "auto";
    }
});

