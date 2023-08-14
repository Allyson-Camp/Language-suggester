function hideAnswer() {
    document.getElementById("printed-answer-div").setAttribute("class", "hidden");
}

function showAnswer() {
    document.getElementById("printed-answer-div").removeAttribute("class", "hidden");
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
    document.getElementById("printed-answer-div").innerHTML = result;

}

function resetAnswer() {
    const reset = document.querySelector("button#reset");
    reset.addEventListener("click", function () {
        document.getElementById("printed-answer-div").innerText = "";
    });
}

function formSubmission(event) {
    event.preventDefault();
    computeAnswer();
    showAnswer();
    resetAnswer();
}

window.addEventListener("load", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", formSubmission);
    hideAnswer();
});
