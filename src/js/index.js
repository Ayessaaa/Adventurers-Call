window.onload = function () {
  function classListModifier(element) {
    element.classList.add("bg-white");
    element.classList.remove("bg-brown3");
    element.classList.add("text-blue1");
    element.classList.remove("text-gray1");
  }

  function classListReset(element) {
    element.classList.remove("bg-white");
    element.classList.add("bg-brown3");
    element.classList.remove("text-blue1");
    element.classList.add("text-gray1");
  }

  const choiceArray = ["sd", "di", "ne", "ag", "sa"];

  var selectedArray = ["", "", "", "", "", "", "", "", "", "", "", ""];

  choiceArray.forEach((choice) => {
    for (let i = 1; i <= 12; i++) {
      var button = document.getElementById(choice + i);
      button.addEventListener("click", function () {
        choiceArray.forEach((option) => {
          classListReset(document.getElementById(option + i));
        });
        selectedArray[i - 1] = choice + i;
        classListModifier(document.getElementById(choice + i));
        console.log(selectedArray);
      });
    }
  });

  const button = document.getElementById("button");
  button.addEventListener("click", function () {
    scores();
  });

  function scores() {
    var wizardScore = 0;
    var kingScore = 0;
    var knightScore = 0;
    var sheriffScore = 0;

    [1, 5, 9].forEach((question) => {
      wizardScore += scoreCalculator(selectedArray[question - 1]);
    });

    [2, 6, 10].forEach((question) => {
      kingScore += scoreCalculator(selectedArray[question - 1]);
    });

    [3, 7, 11].forEach((question) => {
      knightScore += scoreCalculator(selectedArray[question - 1]);
    });

    [4, 8, 12].forEach((question) => {
      sheriffScore += scoreCalculator(selectedArray[question - 1]);
    });

    console.log(wizardScore, kingScore, knightScore, sheriffScore);

    const charactersScore = [wizardScore, kingScore, knightScore, sheriffScore];
    const maxScore = Math.max.apply(null, charactersScore)
    var maxCount = 0

    charactersScore.forEach(score => {
      if (score === maxScore){
        maxCount += 1
      }
    });
  
    if (maxCount === 1){
      if(maxScore === wizardScore){
      window.location.href = "wizard.html";
    } else if (maxScore === kingScore){
      window.location.href = "king.html";
    } else if (maxScore === sheriffScore){
      window.location.href = "sheriff.html"
    } else {
      window.location.href = "knight.html"
    }
    } else if (wizardScore === kingScore === maxCount){
      window.location.href = "tiebreaker/w_kg.html"
    } else if (wizardScore === knightScore === maxCount){
      window.location.href = "tiebreaker/w_kt.html"
    } else if (wizardScore === sheriffScore === maxCount){
      window.location.href = "tiebreaker/w_s.html"
    } else if (kingScore === knightScore === maxCount){
      window.location.href = "tiebreaker/kg_kt.html"
    } else if (kingScore === sheriffScore === maxCount){
      window.location.href = "tiebreaker/kg_s.html"
    } else {
      // knight and sheriff
      window.location.href = "tiebreaker/kt_s.html"
    }
    

  }

  function scoreCalculator(answer) {
    value = answer.slice(0, 2);
    if (value === "sd") {
      return 1;
    } else if (value === "di") {
      return 2;
    } else if (value === "ne") {
      return 3;
    } else if (value === "ag") {
      return 4;
    } else {
      return 5;
    }
  }
};
