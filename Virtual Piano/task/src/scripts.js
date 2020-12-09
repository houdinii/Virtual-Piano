document.addEventListener("keydown", function(event) {
  let status = "";
  switch (event.code) {
    case "KeyA":
      let aAudio = new Audio("./sounds/A.mp3");
      status = aAudio.play();
      break;
    case "KeyS":
      let sAudio = new Audio("./sounds/S.mp3");
      status = sAudio.play();
      break;
    case "KeyD":
      let dAudio = new Audio("./sounds/D.mp3");
      status = dAudio.play();
      break;
    case "KeyF":
      let fAudio = new Audio("./sounds/F.mp3");
      status = fAudio.play();
      break;
    case "KeyG":
      let gAudio = new Audio("./sounds/G.mp3");
      status = gAudio.play();
      break;
    case "KeyH":
      let hAudio = new Audio("./sounds/H.mp3");
      status = hAudio.play();
      break;
    case "KeyJ":
      let jAudio = new Audio("./sounds/J.mp3");
      status = jAudio.play();
      break;
    case "KeyW":
      let wAudio = new Audio("./sounds/W.mp3");
      status = wAudio.play();
      break;
    case "KeyE":
      let eAudio = new Audio("./sounds/E.mp3");
      status = eAudio.play();
      break;
    case "KeyT":
      let tAudio = new Audio("./sounds/T.mp3");
      status = tAudio.play();
      break;
    case "KeyY":
      let yAudio = new Audio("./sounds/Y.mp3");
      status = yAudio.play();
      break;
    case "KeyU":
      let uAudio = new Audio("./sounds/U.mp3");
      status = uAudio.play();
      break;
    default:
      break;
  }
});

