function checkAnswers() {
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  let score = 0;

  if (q1 && q1.value === "B") score++;
  if (q2 && q2.value === "C") score++;

  const result = document.getElementById("result");
  if (score === 2) {
    result.textContent = "🎉 Szuper! Mindkét válasz helyes!";
  } else if (score === 1) {
    result.textContent = "🙂 Jó próbálkozás! 1 helyes válasz.";
  } else {
    result.textContent = "😅 Próbáld újra! Egyik válasz sem volt helyes.";
  }
}
