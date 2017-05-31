document.addEventListener('DOMContentLoaded', function() {

  // get font tags
  let fonts = document.getElementsByTagName("font");

  for (font of fonts) {
    // get class names from each font tags */
    let classNames = font.className.split(" ");

    for (className of classNames) {
      // check textyle's naming convention of under bars
      if (className.slice(0, 1) == "_") {

        /*
        adapt font-size
          example: _24px, 2em, 1.5rem
        */
        if (className.slice(-2, ) == "px" || className.slice(-2, ) == "em") {
          font.style.fontSize = className.slice(1, );
        }

        /*
          adapt color
            example: _#F00, _#DADADA
        */
        else if (className.slice(1, 2) == "#" && (className.length - 2) % 3 == 0) {
          font.style.color = className.slice(1, );
        }
      }
    }
  }

});
