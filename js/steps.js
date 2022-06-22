document.addEventListener("DOMContentLoaded", function () {
  var walking = document.querySelector("#stepsEnt");

  function walkingSound() {
    walking.components.sound.playSound();
  }

  function walkingSoundStop() {
    walking.components.sound.pauseSound();
  }

  document.addEventListener("keydown", function (evt) {
    // check if keys pressed are W, A, S, D and Up, Down, Left, Right
    if (
      evt.key == 87 ||
      evt.key == 65 ||
      evt.key == 83 ||
      evt.key == 68 ||
      evt.key == 38 ||
      evt.key == 37 ||
      evt.key == 39 ||
      evt.key == 40
    ) {
      walkingSound();
    }
  });
  document.addEventListener("keyup", function (evt) {
    // check if keys pressed are W, A, S, D and Up, Down, Left, Right
    if (
      evt.key == 87 ||
      evt.key == 65 ||
      evt.key == 83 ||
      evt.key == 68 ||
      evt.key == 38 ||
      evt.key == 37 ||
      evt.key == 39 ||
      evt.key == 40
    ) {
      walkingSoundStop();
    }
  });
});
