function toggle(buttonNumber) {
  const onOffButton = document.querySelector(`.button-${buttonNumber}`);

  const checkClassList = onOffButton.classList.contains("is-toggled");

  if (buttonNumber === "1") {
    if (!checkClassList) {
      add('1');
      remove('2');
      remove('3');
    } else {
    remove('1');
    }
  } else if (buttonNumber === "2") {
    if (!checkClassList) {
      add('2');
      remove('1');
      remove('3');
    } else {
      remove('2');
    }
  } else if (buttonNumber === "3") {
    if (!checkClassList) {
      add("3");
      remove("1");
      remove("2");
    } else {
      remove("3");
    }
  }
}

function add(buttonNumber) {
  document.querySelector(`.button-${buttonNumber}`).classList.add("is-toggled");
}

function remove(buttonNumber) {
  document
    .querySelector(`.button-${buttonNumber}`)
    .classList.remove("is-toggled");
}
