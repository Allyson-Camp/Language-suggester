//Business logic

//UI logic
window.addEventListener("load", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const singer = document.getElementById("singer").value;
        const season = document.getElementById("season").value;
    });
});
