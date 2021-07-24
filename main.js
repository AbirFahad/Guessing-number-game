let givenNum = document.getElementById("take-digit");
let submitBtn = document.getElementById("guess-btn");
let reloadBtn = document.getElementById("load-page");
let correctScr = document.getElementById("right-score");
let wrongScr = document.getElementById("wrong-score");
const correctProgress = document.getElementById("correct-progress");
const wrongProgress = document.getElementById("wrong-progress");
const correctBox = document.getElementById("result-list-right");
const wrongBox = document.getElementById("result-list-wrong");
let alrt = document.getElementById("alert");

// setting starting number
let count = 0;
let correct = 0;
let wrong = 0;

function handleBtn() {
  count++;
  let guessDigit = parseInt(givenNum.value);
  let randomNum = Math.floor(Math.random() * 7) + 1;
  let listItem = document.createElement("li");
  listItem.classList.add("list-group-item");

  if (guessDigit <= 7 && guessDigit >= 1 && guessDigit !== "") {
    if (count >= 5) {
      givenNum.setAttribute("readonly", null);
      submitBtn.setAttribute("disabled", "disabled");
    } else {
      if (randomNum == guessDigit) {
        correct++;
        givenNum.value = "";
        correctScr.textContent = correct;
        listItem.style.listStyle = "none";
        listItem.style.border = "solid 3px #03f4fc";
        listItem.style.color = "#62fc03";
        listItem.classList = "text-center mt-2";
        correctProgress.innerHTML = correct * 25 + "% Correct";
        correctProgress.style.width = correct * 25;
        listItem.innerHTML = "Cool, You are lucky!!";
        correctScr.innerHTML = correct;
        correctBox.appendChild(listItem);
      } else {
        wrong++;
        wrongScr.textContent = wrong;
        givenNum.value = "";
        (listItem.style.listStyle = "none"),
          (listItem.style.border = "solid 3px #fccf03");
        listItem.style.color = "#fc0303";
        listItem.classList = "text-center mt-2";
        wrongProgress.innerHTML = wrong * 25 + "% Wrong";
        wrongProgress.style.width = (25 / 100) * wrong;
        listItem.innerHTML = "ops!! Bad luck. Random Number Was " + randomNum;
        wrongScr.innerHTML = wrong;
        wrongBox.appendChild(listItem);
      }
    }

    if (count == 4) {
      givenNum.setAttribute("readonly", null);

      reloadBtn.innerHTML = "play again";
      reloadBtn.classList = "btn-danger p-1";
      reloadBtn.style.color = "white";
      reloadBtn.style.cursor = "pointer";
      reloadBtn.style.borderRadius = "3px";
      reloadBtn.style.marginTop = "3px";
      reloadBtn.addEventListener("click", () => {
        location.reload();
      });
      let prompt = document.createElement("div");
      prompt.classList =
        "alert alert-danger alert-dismissible fade show text-center";
      prompt.innerText = "Game over";
      prompt.style.marginTop = "3px";
      prompt.style.fontSize = "20px";
      prompt.style.borderRadius = "0px";
      alrt.appendChild(prompt);
    }
  } else {
    const message = "please enter a number between 1 to 7";
    alert(message);
    givenNum.value = "";
  }
}
