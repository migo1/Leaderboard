import "./style.css";
import resetForm from "./module/resetForm.js";

const key = "MfujXl6jxDd6wIDe9hiA";

const fetchScores = async () => {
  const res = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${key}/scores/`);
  const json = await res.json();
  return json.result;
};

const postScore = async (user, score) => {
  await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${key}/scores/`, {
    method: "POST",
    body: JSON.stringify({ user, score }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const user = document.getElementById("user");
  const score = document.getElementById("score");
  postScore(user.value, score.value);
  resetForm();
});

const displayLeaderboard = () => {
  const scores = fetchScores();
  const leaderboard = document.querySelector("#leaderboard-list");
  leaderboard.innerHTML = "";
  scores.then((result) => {
    result.sort((a, b) => b.score - a.score);
    result.forEach((leadBoard, index) => {
      const li = document.createElement("li");
      li.classList.add("leaderboard-item");
      if (index % 2 !== 0) {
        li.classList.add("darker");
      }
      li.innerHTML = `${index + 1}. ${leadBoard.user} : ${leadBoard.score}`;
      leaderboard.appendChild(li);
    });
  });
};

const refreshButton = document.getElementById("refresh");
refreshButton.addEventListener("click", displayLeaderboard);

displayLeaderboard();
