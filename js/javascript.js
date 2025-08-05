document.addEventListener("DOMContentLoaded", function () {
  function matrixTypeWriter(text, target, index = 0) {
    const matrixChars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let currentText = "";

    function getRandomChar() {
      return matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
    }

    function type() {
      if (index < text.length) {
        currentText += getRandomChar();
        target.innerHTML = currentText + '<span class="cursor">|</span>';

        setTimeout(() => {
          currentText =
            currentText.substring(0, currentText.length - 1) +
            text.charAt(index);
          target.innerHTML = currentText + '<span class="cursor">|</span>';
          index++;
          setTimeout(type, 50);
        }, 100);
      } else {
        target.innerHTML = currentText + '<span class="cursor"></span>';
      }
    }

    type();
  }

  const nameTarget = document.getElementById("typewriter");
  const titleTarget = document.getElementById("typewriter2");

  matrixTypeWriter("Morten Mansaray Hastoft", nameTarget);
  matrixTypeWriter("Application Manager", titleTarget);
});
