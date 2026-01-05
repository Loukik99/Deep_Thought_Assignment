const toggleBtn = document.getElementById("toggleBoard");
const toggleBtnInner = document.getElementById("toggleBoardInner");
const journeyBoard = document.getElementById("journeyBoard");

function toggleJourneyBoard() {
  journeyBoard.classList.toggle("expanded");
}

toggleBtn.addEventListener("click", toggleJourneyBoard);
toggleBtnInner.addEventListener("click", toggleJourneyBoard);
