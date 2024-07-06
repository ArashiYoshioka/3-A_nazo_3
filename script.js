function checkAnswer() {
    const answerInput = document.getElementById('answerInput').value;
    const result = document.getElementById('result');

    if (answerInput === "あんたれす") {
        result.textContent = "正解！ 出席番号13番";
    } else if (answerInput === "アンタレス") {
        result.textContent = "主席番号13番";
    } else {
        result.textContent = "残念...";
    }
}
