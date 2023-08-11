//Business logic
function hideAnswer() {
    document.getElementById("printed-answer").setAttribute("class", "hidden");
}

function showAnswer() {
    document.getElementById("printed-answer").removeAttribute("class", "hidden");
}

function computeAnswer() {
    const singer = document.getElementById("singer").value;
    const holiday = document.getElementById("holiday").value;
    const cLang = document.getElementById("c-lang").innerHTML;
    const jsLang = document.getElementById("js-lang").innerHTML;
    const reactLang = document.getElementById("react-lang").innerHTML;

    let result;
    if (singer === "tay" && holiday === "halloween") {
        result = cLang;
    } else if (singer === "rob" && holiday === "halloween") {
        result = jsLang;
    } else if (holiday === "still-halloween") {
        result = reactLang;
    }
    document.getElementById("printed-answer").innerHTML = result;
}



//UI logic
function formSubmission(event) {
    event.preventDefault();
    computeAnswer();
    showAnswer();
}

window.addEventListener("load", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", formSubmission);
    hideAnswer();
});
