$(document).ready(function() {
  $("#blank form").submit(function(event) {
    var answer1 = $("#question1 option:selected").val();
    var answer2 = $("#question2 option:selected").val();
    var answer3 = $("#question3 option:selected").val();
    var answer4 = $("#question4 option:selected").val();
    var answer1Int = parseInt(answer1);
    var answer2Int = parseInt(answer2);
    var answer3Int = parseInt(answer3);
    var answer4Int = parseInt(answer4);

    var count = 0;

    if (answer1Int === 1)  {
      var count = count + 1;
    } else if ((answer4Int != 1) && (answer4Int != 2)){
      var count = count + 10;
      console.log(count);
    } else {
      var count = count + 2;

    }
    if (answer2Int === 1) {
      var count = count + 1;
    }else if ((answer2Int != 1) && (answer2Int != 2)){
      var count = count + 10;
    }else {
      var count = count + 2;
      console.log(count);
    }
    if (answer3Int === 1) {
      var count = count + 1;
    }else if ((answer3Int != 1) && (answer3Int != 2)){
      var count = count + 10;
    }else {
      var count = count + 2;
      console.log(count);
    }
    if (answer4Int === 1) {
      var count = count + 1;
    } else if ((answer4Int != 1) && (answer4Int != 2)){
      var count = count + 10;
    } else {
      var count = count + 2;
      console.log(count);
    }

    if ((count <= 5) && (count >=4)) {
      $("h1").text("You are a Republican!");
      $("#political-form").hide();
    } if (count === 6) {
      $("h1").text("You are an Independant!");
      $("#political-form").hide();
    } if ((count >= 7) && (count <=8)) {
      $("h1").text("You are a Democrat!");
      $("#political-form").hide();
    } if ((count <=3) || (count >=9)) {
      $("h1").text("Please answer all questions!");
    }
    event.preventDefault();
  });
});
