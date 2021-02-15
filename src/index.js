import "./styles.css";

const grid = document.getElementById("app");
var elements = grid.childNodes;

function gridSetup() {
  grid.innerHTML = "";
  var count = 0;
  for (var row = 0; row < 40; row++) {
    for (var column = 0; column < 40; column++) {
      count++;
      var div = document.createElement("div");
      // div.style.fontSize = "8px";
      div.style.left = row * 2.5 + "vw";
      div.style.top = column * 2.5 + "vh";

      // div.innerHTML = count;
      if (count == 0) {
        div.innerHTML = "A";
      }

      mouseEvents(div);

      grid.appendChild(div);
    }
  }

  elements[175].innerHTML =
    "<video src='../media/00048-3.mp4' style='width: 100%; height: 100%;' autoplay muted loop/>";

  function mouseEvents(item) {
    item.addEventListener("mouseenter", function () {
      var hello = Array.from(item.parentNode.children).indexOf(item);

      var toRight = elements[hello - row];
      var toLeft = elements[hello + row];
      var toTop = elements[hello + 1];
      var toBottom = elements[hello - 1];
      if (toTop && toBottom && toRight && toLeft) {
        item.style.transform = "translateZ(70px)";
        toTop.style.transform = "translateZ(50px)";
        toBottom.style.transform = "translateZ(50px)";
        toRight.style.transform = "translateZ(30px)";
        toLeft.style.transform = "translateZ(30px)";
        item.style.transform = "translateZ(70px)";

        item.style.transition = "transform .2s ease, background-color .1s ease";
        toTop.style.transition =
          "transform .2s ease, background-color .1s ease";
        toBottom.style.transition =
          "transform .2s ease, background-color .1s ease";
        toRight.style.transition =
          "transform .2s ease background-color, .1s ease";
        toLeft.style.transition =
          "transform .2s ease, background-color .1s ease";
        item.style.transition = "transform .2s ease, background-color .1s ease";

        toTop.style.backgroundColor = "yellow";
        toBottom.style.backgroundColor = "magenta";
        toRight.style.backgroundColor = "red";
        toLeft.style.backgroundColor = "cyan";

        setTimeout(function () {
          item.style.transition =
            "transform 1.6s, ease background-color .6s ease";
          toTop.style.transition =
            "transform 1.6s, ease background-color .6s ease";
          toBottom.style.transition =
            "transform 1.6s, ease background-color .6s ease";
          toRight.style.transition =
            "transform 1.6s, ease background-color .6s ease";
          toLeft.style.transition =
            "transform 1.6s, ease background-color .6s ease";
          item.style.transition =
            "transform 1.6s, ease background-color .6s ease";

          item.style.transform = "translateZ(0px) ";
          toTop.style.transform = "translateZ(0px) ";
          toRight.style.transform = "translateZ(0px)";
          toBottom.style.transform = "translateZ(0px) ";
          toLeft.style.transform = "translateZ(0px)";
          // item.style.zIndex = "inherit";
          // toTop.style.zIndex = "inherit";
          // toBottom.style.zIndex = "inherit";
          // toRight.style.zIndex = "inherit";
          // toLeft.style.zIndex = "inherit";
          // item.style.zIndex = "inherit";
          toTop.style.backgroundColor = "white";
          toBottom.style.backgroundColor = "white";
          toRight.style.backgroundColor = "white";
          toLeft.style.backgroundColor = "white";
        }, Math.floor(Math.random() * 200) + 1000);
      }
    });
  }
  console.log(elements.length);
}
gridSetup();
window.addEventListener("resize", gridSetup);
function spinRandomElement() {
  setTimeout(function () {
    var item = elements[Math.floor(Math.random() * elements.length)];
    item.style.transition = "transform 1.2s ease";
    item.style.transform = "rotateY(180deg)";
    setTimeout(() => {
      item.style.transition = "transform 0s ease";
      item.style.transform = "rotateY(0deg)";
      setTimeout(() => {
        item.style.transition = "transform 0.4s ease";
      }, 400);
    }, 1200);
    spinRandomElement();
  }, 5000);
}
spinRandomElement();

// var wheeled = 0;
// window.addEventListener("wheel", function () {
//   wheeled++;
//   for (var wheel = 0; 0 < elements.length; wheel++) {
//     elements[wheel].style.transform = "tranlateZ(" + wheeled + "px)";
//   }
// });
