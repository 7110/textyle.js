function textyle() {

  // get textyle.js targets
  const targets = document.querySelectorAll('[class^="_"]');

  for (let i = 0; i < targets.length; i++) {

    // get class list from each target's tag
    let classList = targets[i].classList;

    for (let j = 0; j < classList.length; j++) {

      let className = classList[j];

      // check textyle's naming convention of under bars
      if (className.slice(0, 1) == '_') {

        /*
        font-size
          example: _24px, _2em, _1.5rem, 150%
        */
        if (className.slice(-2, ) == "px" || className.slice(-2, ) == "em" || className.slice(-1, ) == "%") {
          targets[i].style.fontSize = className.slice(1, );
        }

        /*
        color
          example: _#F00, _#DADADA, rgb(0,0,0), rgba(255,255,255,0.3)
        */
        else if (className.slice(1, 2) == "#" && (className.length - 2) % 3 == 0 || className.slice(1, 4) == "rgb") {
          targets[i].style.color = className.slice(1, );
        }

      }
    }
  }
}


// Execute textyle()
document.addEventListener('DOMContentLoaded', function() {
  textyle();
});
