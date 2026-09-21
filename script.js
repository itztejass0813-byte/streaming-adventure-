let score = 0;
let round = 1;

const exploreRewards = [
    {points: 0, text: "😴 Terrible movie"},
    {points: 2, text: "🙄 Boring movie"},
    {points: 4, text: "🙂 Average movie"},
    {points: 8, text: "😍 Great discovery"},
    {points: 10, text: "🏆 New favorite movie!"}
];

const exploitRewards = [
    {points: 4, text: "👍 Reliable choice"},
    {points: 5, text: "😊 Enjoyable movie"},
    {points: 6, text: "⭐ Favorite genre"}
];

function updateGame(reward) {

    if (round > 10) return;

    score += reward.points;

    document.getElementById("score").textContent = score;

    document.getElementById("result").innerHTML =
        reward.text + "<br>+" + reward.points + " points";

    round++;

    if (round <= 10) {
        document.getElementById("round").textContent = round;
    } else {
        document.getElementById("result").innerHTML +=
            "<h2>Game Over!</h2><p>Final Score: " + score + "</p>";
    }
}

function explore() {
    const reward =
        exploreRewards[Math.floor(Math.random() * exploreRewards.length)];

    updateGame(reward);
}

function exploit() {
    const reward =
        exploitRewards[Math.floor(Math.random() * exploitRewards.length)];

    updateGame(reward);
}
