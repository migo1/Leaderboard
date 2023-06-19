import "./style.css";
import leaderboardItems from "./module/dummyData.js";

const leaderboard = document.querySelector("#leaderboard-list");

leaderboardItems.forEach((item) => {
  const li = document.createElement("li");
  li.classList.add("leaderboard-item");
  if (item.id % 2 === 0) {
    li.classList.add("darker");
  }
  li.innerHTML = `${item.name} : ${item.score}`;
  leaderboard.appendChild(li);
});
