//Business logic

//UI logic
window.addEventListener("load", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
       e.preventDefault();

      const singer = document.getElementById("singer").value;
      const holiday = document.getElementById("holiday").value;
      const cLang = document.getElementById("c-lang");
      const jsLang = document.getElementById("js-lang");
      const reactLang = document.getElementById("react-lang");

      let result;

      if (singer === "tay" && holiday  === "halloween") {
        result = cLang.removeAttribute("class");
      } else if (singer === "rob") {
        result = jsLang.removeAttribute("class");
      } else {
        result = reactLang.removeAttribute("class");
      } 
    });
});
