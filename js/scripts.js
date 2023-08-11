//Business logic

//UI logic
window.addEventListener("load", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
       e.preventDefault();
      const singer = document.getElementById("singer").value;
      const holiday = document.getElementById("holiday").value;
      const cLang = document.getElementById("c-lang").innerHTML;
      const jsLang = document.getElementById("js-lang").innerHTML;
      const reactLang = document.getElementById("react-lang").innerHTML;
      let result;
      if (singer === "tay" && holiday  === "halloween") {
        result = cLang;
      } else if (singer === "rob" && holiday === "halloween") {
        result = jsLang;
      } else if (holiday === "still-halloween"){
        result = reactLang;
      } 
      document.getElementById("printed-answer").innerHTML = result;
    });
  
});
