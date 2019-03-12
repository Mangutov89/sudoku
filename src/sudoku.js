import $ from 'jquery';

export function checkRow1(where) {
  var one = 0;
  var two = 0;
  var three = 0;
  var four = 0;
  var five = 0;
  var six = 0;
  var seven = 0;
  var eight = 0;
  var nine = 0;
  var isValid = true;

  var input;
  var input2;
  var input3;
  var input4;
  var input5;
  var input6;
  var input7;
  var input8;
  var input9;
  var location;

  if(where == "row1") {
    input = $("#one").val();
    input2 = $("#two").val();
    input3 = $("#three").val();
    input4 = $("#eleven").val();
    input5 = $("#twelve").val();
    input6 = $("#thirteen").val();
    input7 = $("#twenty-one").val();
    input8 = $("#twenty-two").val();
    input9 = $("#twenty-three").val();
    location = "row1";
  }
  if(where == "row2") {
    input = $("#four").val();
    input2 = $("#five").val();
    input3 = $("#six").val();
    input4 = $("#fourteen").val();
    input5 = $("#fifteen").val();
    input6 = $("#sixteen").val();
    input7 = $("#twenty-four").val();
    input8 = $("#twenty-five").val();
    input9 = $("#twenty-six").val();
    location = "row2";
  }
  if(where == "row3") {
    input = $("#seven").val();
    input2 = $("#eight").val();
    input3 = $("#nine").val();
    input4 = $("#seventeen").val();
    input5 = $("#eighteen").val();
    input6 = $("#nineteen").val();
    input7 = $("#twenty-seven").val();
    input8 = $("#twenty-eight").val();
    input9 = $("#twenty-nine").val();
    location = "row3";
  }
  if(where == "row4") {
    input = $("#thirty-one").val();
    input2 = $("#thirty-two").val();
    input3 = $("#thirty-three").val();
    input4 = $("#fourty-one").val();
    input5 = $("#fourty-two").val();
    input6 = $("#fourty-three").val();
    input7 = $("#fifty-one").val();
    input8 = $("#fifty-two").val();
    input9 = $("#fifty-three").val();
    location = "row4";
  }
  if(where == "row5") {
    input = $("#thirty-four").val();
    input2 = $("#thirty-five").val();
    input3 = $("#thirty-six").val();
    input4 = $("#fourty-four").val();
    input5 = $("#fourty-five").val();
    input6 = $("#fourty-six").val();
    input7 = $("#fifty-four").val();
    input8 = $("#fifty-five").val();
    input9 = $("#fifty-six").val();
    location = "row5";
  }
  if(where == "row6") {
    input = $("#thirty-seven").val();
    input2 = $("#thirty-eight").val();
    input3 = $("#thirty-nine").val();
    input4 = $("#fourty-seven").val();
    input5 = $("#fourty-eight").val();
    input6 = $("#fourty-nine").val();
    input7 = $("#fifty-seven").val();
    input8 = $("#fifty-eight").val();
    input9 = $("#fifty-nine").val();
    location = "row6";
  }
  if(where == "row7") {
    input = $("#sixty-one").val();
    input2 = $("#sixty-two").val();
    input3 = $("#sixty-three").val();
    input4 = $("#seventy-one").val();
    input5 = $("#seventy-two").val();
    input6 = $("#seventy-three").val();
    input7 = $("#eighty-one").val();
    input8 = $("#eighty-two").val();
    input9 = $("#eighty-three").val();
    location = "row7";
  }
  if(where == "row8") {
    input = $("#sixty-four").val();
    input2 = $("#sixty-five").val();
    input3 = $("#sixty-six").val();
    input4 = $("#seventy-four").val();
    input5 = $("#seventy-five").val();
    input6 = $("#seventy-six").val();
    input7 = $("#eighty-four").val();
    input8 = $("#eighty-five").val();
    input9 = $("#eighty-six").val();
    location = "row8";
  }
  if(where == "row9") {
    input = $("#sixty-seven").val();
    input2 = $("#sixty-eight").val();
    input3 = $("#sixty-nine").val();
    input4 = $("#seventy-seven").val();
    input5 = $("#seventy-eight").val();
    input6 = $("#seventy-nine").val();
    input7 = $("#eighty-seven").val();
    input8 = $("#eighty-eight").val();
    input9 = $("#eighty-nine").val();
    location = "row9";
  }

  input = parseInt(input);
  input2 = parseInt(input2);
  input3 = parseInt(input3);
  input4 = parseInt(input4);
  input5 = parseInt(input5);
  input6 = parseInt(input6);
  input7 = parseInt(input7);
  input8 = parseInt(input8);
  input9 = parseInt(input9);
  var inputNumbers = [input, input2, input3, input4, input5, input6, input7, input8, input9];
  var numbers = [1, 2, 3, 4, 5, 6, 7 ,8 ,9];

  if(input, input2, input3, input4, input5, input6, input7, input8, input9) {
    var length = inputNumbers.length;
    var numberLength = numbers.length;
    for (var i = 0; i < length; i++) {
      if(inputNumbers[i] == 1) {
        one = one + 1;
      }
      if(inputNumbers[i] == 2) {
        two = two + 1;
      }
      if(inputNumbers[i] == 3) {
        three = three + 1;
      }
      if(inputNumbers[i] == 4) {
        four = four + 1;
      }
      if(inputNumbers[i] == 5) {
        five = five + 1;
      }
      if(inputNumbers[i] == 6) {
        six = six + 1;
      }
      if(inputNumbers[i] == 7) {
        seven = seven + 1;
      }
      if(inputNumbers[i] == 8) {
        eight = eight + 1;
      }
      if(inputNumbers[i] == 9) {
        nine = nine + 1;
      }
    }
    if(one == 1 && two == 1 && three == 1) {
    } else {
      isValid = false;
    }
    if((four == 1 && five == 1 && six == 1)) {
    } else {
      isValid = false;
    }
    if((seven == 1 && eight == 1 && nine == 1)) {
    } else {
      isValid = false;
    }
    if(isValid == true) {
      $("." + location).css("background-color", "green");
    }
    if(isValid == false) {
      $("." + location).css("background-color", "red");
    }
  }
}

export function checkCol1(where) {
  var one = 0;
  var two = 0;
  var three = 0;
  var four = 0;
  var five = 0;
  var six = 0;
  var seven = 0;
  var eight = 0;
  var nine = 0;
  var isValid = true;

  var input;
  var input2;
  var input3;
  var input4;
  var input5;
  var input6;
  var input7;
  var input8;
  var input9;
  var location;

  if(where == "col1") {
    input = $("#one").val();
    input2 = $("#four").val();
    input3 = $("#seven").val();
    input4 = $("#thirty-one").val();
    input5 = $("#thirty-four").val();
    input6 = $("#thirty-seven").val();
    input7 = $("#sixty-one").val();
    input8 = $("#sixty-four").val();
    input9 = $("#sixty-seven").val();
    location = "col1";
  }
  if(where == "col2") {
    input = $("#two").val();
    input2 = $("#five").val();
    input3 = $("#eight").val();
    input4 = $("#thirty-two").val();
    input5 = $("#thirty-five").val();
    input6 = $("#thirty-eight").val();
    input7 = $("#sixty-two").val();
    input8 = $("#sixty-five").val();
    input9 = $("#sixty-eight").val();
    location = "col2";
  }
  if(where == "col3") {
    input = $("#three").val();
    input2 = $("#six").val();
    input3 = $("#nine").val();
    input4 = $("#thirty-three").val();
    input5 = $("#thirty-six").val();
    input6 = $("#thirty-nine").val();
    input7 = $("#sixty-three").val();
    input8 = $("#sixty-six").val();
    input9 = $("#sixty-nine").val();
    location = "col3";
  }
  if(where == "col4") {
    input = $("#eleven").val();
    input2 = $("#fourteen").val();
    input3 = $("#seventeen").val();
    input4 = $("#fourty-one").val();
    input5 = $("#fourty-four").val();
    input6 = $("#fourty-seven").val();
    input7 = $("#seventy-one").val();
    input8 = $("#seventy-four").val();
    input9 = $("#seventy-seven").val();
    location = "col4";
  }
  if(where == "col5") {
    input = $("#twelve").val();
    input2 = $("#fifteen").val();
    input3 = $("#eighteen").val();
    input4 = $("#fourty-two").val();
    input5 = $("#fourty-five").val();
    input6 = $("#fourty-eight").val();
    input7 = $("#seventy-two").val();
    input8 = $("#seventy-five").val();
    input9 = $("#seventy-eight").val();
    location = "col5";
  }
  if(where == "col6") {
    input = $("#thirteen").val();
    input2 = $("#sixteen").val();
    input3 = $("#nineteen").val();
    input4 = $("#fourty-three").val();
    input5 = $("#fourty-six").val();
    input6 = $("#fourty-nine").val();
    input7 = $("#seventy-three").val();
    input8 = $("#seventy-six").val();
    input9 = $("#seventy-nine").val();
    location = "col6"
  }
  if(where == "col7") {
    input = $("#twenty-one").val();
    input2 = $("#twenty-four").val();
    input3 = $("#twenty-seven").val();
    input4 = $("#fifty-one").val();
    input5 = $("#fifty-four").val();
    input6 = $("#fifty-seven").val();
    input7 = $("#eighty-one").val();
    input8 = $("#eighty-four").val();
    input9 = $("#eighty-seven").val();
    location = "col7";
  }
  if(where == "col8") {
    input = $("#twenty-two").val();
    input2 = $("#twenty-five").val();
    input3 = $("#twenty-eight").val();
    input4 = $("#fifty-two").val();
    input5 = $("#fifty-five").val();
    input6 = $("#fifty-eight").val();
    input7 = $("#eighty-two").val();
    input8 = $("#eighty-five").val();
    input9 = $("#eighty-eight").val();
    location = "col8";
  }
  if(where == "col9") {
    input = $("#twenty-three").val();
    input2 = $("#twenty-six").val();
    input3 = $("#twenty-nine").val();
    input4 = $("#fifty-three").val();
    input5 = $("#fifty-six").val();
    input6 = $("#fifty-nine").val();
    input7 = $("#eighty-three").val();
    input8 = $("#eighty-six").val();
    input9 = $("#eighty-nine").val();
    location = "col9";
  }

  input = parseInt(input);
  input2 = parseInt(input2);
  input3 = parseInt(input3);
  input4 = parseInt(input4);
  input5 = parseInt(input5);
  input6 = parseInt(input6);
  input7 = parseInt(input7);
  input8 = parseInt(input8);
  input9 = parseInt(input9);
  var inputNumbers = [input, input2, input3, input4, input5, input6, input7, input8, input9];
  var numbers = [1, 2, 3, 4, 5, 6, 7 ,8 ,9];

  if(input, input2, input3, input4, input5, input6, input7, input8, input9) {
    var length = inputNumbers.length;
    var numberLength = numbers.length;
    for (var i = 0; i < length; i++) {
      if(inputNumbers[i] == 1) {
        one = one + 1;
      }
      if(inputNumbers[i] == 2) {
        two = two + 1;
      }
      if(inputNumbers[i] == 3) {
        three = three + 1;
      }
      if(inputNumbers[i] == 4) {
        four = four + 1;
      }
      if(inputNumbers[i] == 5) {
        five = five + 1;
      }
      if(inputNumbers[i] == 6) {
        six = six + 1;
      }
      if(inputNumbers[i] == 7) {
        seven = seven + 1;
      }
      if(inputNumbers[i] == 8) {
        eight = eight + 1;
      }
      if(inputNumbers[i] == 9) {
        nine = nine + 1;
      }
    }
    if((one == 1 && two == 1 && three == 1)) {
    } else {
      isValid = false;
    }
    if((four == 1 && five == 1 && six == 1)) {
    } else {
      isValid = false;
    }
    if((seven == 1 && eight == 1 && nine == 1)) {
    } else {
      isValid = false;
    }
    if(isValid == true) {
      $("." + location).css("background-color", "green");
    }
    if(isValid == false) {
      $("." + location).css("background-color", "red");
    }
  }
}









export function square(where) {
  var one = 0;
  var two = 0;
  var three = 0;
  var four = 0;
  var five = 0;
  var six = 0;
  var seven = 0;
  var eight = 0;
  var nine = 0;
  var isValid = true;

  var input;
  var input2;
  var input3;
  var input4;
  var input5;
  var input6;
  var input7;
  var input8;
  var input9;
  var location;

  if(where == "top-left") {
    input = $("#one").val();
    input2 = $("#two").val();
    input3 = $("#three").val();
    input4 = $("#four").val();
    input5 = $("#five").val();
    input6 = $("#six").val();
    input7 = $("#seven").val();
    input8 = $("#eight").val();
    input9 = $("#nine").val();
    location = "top-left";
  }
  if(where == "top-middle") {
    input = $("#eleven").val();
    input2 = $("#twelve").val();
    input3 = $("#thirteen").val();
    input4 = $("#fourteen").val();
    input5 = $("#fifteen").val();
    input6 = $("#sixteen").val();
    input7 = $("#seventeen").val();
    input8 = $("#eighteen").val();
    input9 = $("#nineteen").val();
    location = "top-middle";
  }
  if(where == "top-right") {
    input = $("#twenty-one").val();
    input2 = $("#twenty-two").val();
    input3 = $("#twenty-three").val();
    input4 = $("#twenty-four").val();
    input5 = $("#twenty-five").val();
    input6 = $("#twenty-six").val();
    input7 = $("#twenty-seven").val();
    input8 = $("#twenty-eight").val();
    input9 = $("#twenty-nine").val();
    location = "top-right";
  }
  if(where == "middle-left") {
    input = $("#thirty-one").val();
    input2 = $("#thirty-two").val();
    input3 = $("#thirty-three").val();
    input4 = $("#thirty-four").val();
    input5 = $("#thirty-five").val();
    input6 = $("#thirty-six").val();
    input7 = $("#thirty-seven").val();
    input8 = $("#thirty-eight").val();
    input9 = $("#thirty-nine").val();
    location = "middle-left";
  }
  if(where == "middle") {
    input = $("#fourty-one").val();
    input2 = $("#fourty-two").val();
    input3 = $("#fourty-three").val();
    input4 = $("#fourty-four").val();
    input5 = $("#fourty-five").val();
    input6 = $("#fourty-six").val();
    input7 = $("#fourty-seven").val();
    input8 = $("#fourty-eight").val();
    input9 = $("#fourty-nine").val();
    location = "middle";
  }
  if(where == "middle-right") {
    input = $("#fifty-one").val();
    input2 = $("#fifty-two").val();
    input3 = $("#fifty-three").val();
    input4 = $("#fifty-four").val();
    input5 = $("#fifty-five").val();
    input6 = $("#fifty-six").val();
    input7 = $("#fifty-seven").val();
    input8 = $("#fifty-eight").val();
    input9 = $("#fifty-nine").val();
    location = "middle-right"
  }
  if(where == "bottom-left") {
    input = $("#sixty-one").val();
    input2 = $("#sixty-two").val();
    input3 = $("#sixty-three").val();
    input4 = $("#sixty-four").val();
    input5 = $("#sixty-five").val();
    input6 = $("#sixty-six").val();
    input7 = $("#sixty-seven").val();
    input8 = $("#sixty-eight").val();
    input9 = $("#sixty-nine").val();
    location = "bottom-left";
  }
  if(where == "bottom-middle") {
    input = $("#seventy-one").val();
    input2 = $("#seventy-two").val();
    input3 = $("#seventy-three").val();
    input4 = $("#seventy-four").val();
    input5 = $("#seventy-five").val();
    input6 = $("#seventy-six").val();
    input7 = $("#seventy-seven").val();
    input8 = $("#seventy-eight").val();
    input9 = $("#seventy-nine").val();
    location = "bottom-middle";
  }
  if(where == "bottom-right") {
    input = $("#eighty-one").val();
    input2 = $("#eighty-two").val();
    input3 = $("#eighty-three").val();
    input4 = $("#eighty-four").val();
    input5 = $("#eighty-five").val();
    input6 = $("#eighty-six").val();
    input7 = $("#eighty-seven").val();
    input8 = $("#eighty-eight").val();
    input9 = $("#eighty-nine").val();
    location = "bottom-right";
  }

  input = parseInt(input);
  input2 = parseInt(input2);
  input3 = parseInt(input3);
  input4 = parseInt(input4);
  input5 = parseInt(input5);
  input6 = parseInt(input6);
  input7 = parseInt(input7);
  input8 = parseInt(input8);
  input9 = parseInt(input9);
  var inputNumbers = [input, input2, input3, input4, input5, input6, input7, input8, input9];
  var numbers = [1, 2, 3, 4, 5, 6, 7 ,8 ,9];

  if(input, input2, input3, input4, input5, input6, input7, input8, input9) {
    var length = inputNumbers.length;
    var numberLength = numbers.length;
    for (var i = 0; i < length; i++) {
      if(inputNumbers[i] == 1) {
        one = one + 1;
      }
      if(inputNumbers[i] == 2) {
        two = two + 1;
      }
      if(inputNumbers[i] == 3) {
        three = three + 1;
      }
      if(inputNumbers[i] == 4) {
        four = four + 1;
      }
      if(inputNumbers[i] == 5) {
        five = five + 1;
      }
      if(inputNumbers[i] == 6) {
        six = six + 1;
      }
      if(inputNumbers[i] == 7) {
        seven = seven + 1;
      }
      if(inputNumbers[i] == 8) {
        eight = eight + 1;
      }
      if(inputNumbers[i] == 9) {
        nine = nine + 1;
      }
    }
    if((one == 1 && two == 1 && three == 1)) {
    } else {
      isValid = false;
    }
    if((four == 1 && five == 1 && six == 1)) {
    } else {
      isValid = false;
    }
    if((seven == 1 && eight == 1 && nine == 1)) {
    } else {
      isValid = false;
    }
    if(isValid == true) {
      $("." + location).css("background-color", "green");
    }
    if(isValid == false) {
      $("." + location).css("background-color", "red");
    }
  }
}
function checkRow(row, int) {
  var array = [];
  var isValid = true;
  console.log(row);
  $("." + row).each(function() {
    var sum = parseFloat($(this).val());
    if(sum) {
      console.log(sum);

    }
    if(sum == int) {
      isValid = false;
      console.log("Is False");
      return isValid;
    }
  });
}


function checkColumn(column, int) {
  var array = [];
  var isValid = true;
  $("." + column).each(function() {
    if(this == int) {
      isValid = false;
    }
  });
  return isValid;

}


function checkBox(box, int) {
  var array = [];
  var isValid = true;

  $(".box" + box).each(function() {
    if(this == int) {
      isValid = false;
    }
  });
  return isValid;

}


function findBox(row, column) {
  if(row >= 1 && row <=  3) {
    if(column >= 1 && column <= 3) {
      return 1;
    } else if (column >= 4 && column <= 6) {
      return 2;
    } else if(column >=7 && column <=9) {
      return 3;
    }
  }
  if(row >= 4 && row <=  6) {
    if(column >= 1 && column <= 3) {
      return 4;
    } else if (column >= 4 && column <= 6) {
      return 5;
    } else if(column >=7 && column <=9) {
      return 6;
    }
  }
  if(row >= 7 && row <=  9) {
    if(column >= 1 && column <= 3) {
      return 7;
    } else if (column >= 4 && column <= 6) {
      return 8;
    } else if(column >=7 && column <=9) {
      return 9;
    }
  }
}



export function placeRandom() {
  var random = Math.floor((Math.random() * 10) + 1);
  random = random + 10;
  var locations = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "thirty-one", "thirty-two", "thirty-three", "thirty-four", "thirty-five", "thirty-six", "thirty-seven", "thirty-eight", "thirty-nine", "fourty-one", "fourty-two", "fourty-three", "fourty-four", "fourty-five", "fourty-six", "fourty-seven", "fourty-eight", "fourty-nine", "fifty-one", "fifty-two", "fifty-three", "fifty-four", "fifty-five", "fifty-six", "fifty-seven", "fifty-eight", "fifty-nine", "sixty-one", "sixty-two", "sixty-three", "sixty-four", "sixty-five", "sixty-seven", "sixty-eight", "sixty-nine", "seventy-one", "seventy-two", "seventy-three", "seventy-four", "seventy-five", "seventy-six", "seventy-seven", "seventy-eight", "seventy-nine", "eighty-one", "eighty-two", "eighty-three", "eighty-four", "eighty-five", "eighty-six", "eighty-seven", "eighty-eight", "eighty-nine"];
  for (var i = 0; i < random; i++) {
    var place = false;
    while (place == false) {
      // debugger;
      var row = Math.floor((Math.random() * 8) + 1);
      var rows = ["row1", "row2", "row3", "row3", "row4", "row5", "row6", "row7", "row8", "row9"];
      row = rows[row];
      // console.log(row);
      var column = Math.floor((Math.random() * 8) + 1);
      var randomInt = Math.floor((Math.random() * 80));
      console.log(locations.length);
      var number = locations[randomInt];
      console.log(number);
      var randomNumber = Math.floor((Math.random() * 8) + 1);
      debugger;
      var squareCheck = findBox(row, column);
      var rowIsValid = checkRow(row, randomNumber);
      var columnIsValid = checkColumn(column, randomNumber);
      var boxIsValid = checkBox(squareCheck, randomNumber);
      console.log(rowIsValid, columnIsValid, boxIsValid);
      if (rowIsValid == true && columnIsValid == true && boxIsValid == true) {
        document.getElementById(number).setAttribute('readonly', 'readonly');
        document.getElementById(number).value = randomNumber;

        place = true;
      }


    }
    // $("#" + number).css("placeHolder", randomInt);
    // $("#" + number).css("background-color", "black");
    // $("#" + number).css("placeholder", "HI");
  }
}
