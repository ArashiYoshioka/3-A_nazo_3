function checkAnswer() {
    const answerInput = document.getElementById('answerInput').value;
    const result = document.getElementById('result');

    if (answerInput === "アンタレス") {
        result.textContent = "未決定";
    } else {
        result.textContent = "残念";
    }
}
