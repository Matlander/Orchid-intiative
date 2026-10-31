document.addEventListener("DOMContentLoaded", () => {
  const scene = document.getElementById("tree-scene");
  const growButton = document.getElementById("grow-button");
  const resetButton = document.getElementById("grow-reset");
  const status = document.getElementById("grow-status");
  const count = document.getElementById("grow-count");
  const progress = document.getElementById("grow-progress");
  if (!scene || !growButton || !resetButton || !status || !count || !progress) return;

  let taps = 0;
  const totalTaps = 12;

  function render() {
    let stage = "seed";
    let message = "Your virtual seed is ready.";
    if (taps >= 12) {
      stage = "grown";
      message = "Your virtual tree is fully grown!";
    } else if (taps >= 8) {
      stage = "young";
      message = "Your young tree is growing stronger.";
    } else if (taps >= 4) {
      stage = "sapling";
      message = "Your sapling has new leaves.";
    } else if (taps > 0) {
      stage = "sprout";
      message = "Your seed has sprouted.";
    }

    scene.dataset.stage = stage;
    scene.disabled = taps === totalTaps;
    scene.setAttribute("aria-label", taps === totalTaps ? "Virtual tree fully grown" : "Tap to grow the virtual tree");
    status.textContent = message;
    count.textContent = `${taps} of ${totalTaps} growth taps`;
    progress.value = taps;
    progress.textContent = `${taps} of ${totalTaps}`;
    growButton.disabled = taps === totalTaps;
    growButton.textContent = taps === totalTaps ? "Virtual tree grown" : "Tap to help it grow";
    resetButton.hidden = taps === 0;
  }

  const grow = () => {
    taps = Math.min(taps + 1, totalTaps);
    render();
  };
  growButton.addEventListener("click", grow);
  scene.addEventListener("click", grow);

  resetButton.addEventListener("click", () => {
    taps = 0;
    render();
    growButton.focus();
  });

  render();
});
