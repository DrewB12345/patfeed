function checkIt() {
  // Initialize scores
  var english = 0;
  var history = 0;
  var math = 0;
  var science = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'english') {
        english++;
      }
      else if (e.value == 'history') {
        history++;
      }
      else if (e.value == 'math') {
        math++;
      }
      else if (e.value == 'science') {
        science++;
      }
    }

  }

  // Determine result
  var counts = "English: " + english + ", " +
               "History: " + history  + ", " +
               "Math: " + math  + ", " +
               "Science: " + science;

  // What is the highest value?
  //var max = Math.max(english, history, math, science);

  // Form a message
  /* Default:
  var message;

  if (max == english) {
    message = "You like English.";
  }
  else if (max == history) {
    message = "You like history.";
  }
  else if (max == math) {
    message = "You like math.";
  }
  else if (max == science) {
    message = "You like science.";
  }
Improved: */
  var message;

  var num = Math.floor((Math.random() * 2) + 1);

  if (english == history && english == 2) {
    if (num == 1) {
      message = "We can guess your favorite subject. <br><h3>You got: English </h3>Do you really like to overanalyze books?<br><br><img src=\"img/favorite_subject/english.jpg\">"
    }
    else {
      message = "We can guess your favorite subject. <br><h3>You got: History </h3>You enjoy history so much that you think it is General E. Lee fun.<br><br><img src=\"img/favorite_subject/history.jpg\">"
    }
  }

  else if (english == math && english == 2) {
    if (num == 1) {
      message = "We can guess your favorite subject. <br><h3>You got: English </h3>Do you really like to overanalyze books?<br><br><img src=\"img/favorite_subject/english.jpg\">"
    }
    else {
      message = "We can guess your favorite subject. <br><h3>You got: Math </h3>You're so nerdy that you can differentiate between good and bad math jokes.<br><br><img src=\"img/favorite_subject/math.jpg\">"
    }
  }

  else if (english == science && english == 2) {
    if (num == 1) {
      message = "We can guess your favorite subject. <br><h3>You got: English </h3>Do you really like to overanalyze books?<br><br><img src=\"img/favorite_subject/english.jpg\">"
    }
    else {
      message = "We can guess your favorite subject. <br><h3>You got: Science </h3>You already know what happens, you just want to know the science behind it.<br><br><img src=\"img/favorite_subject/science.jpg\">"
    }
  }

  else if (history == math && history == 2) {
    if (num == 1) {
      message = "We can guess your favorite subject. <br><h3>You got: History </h3>You enjoy history so much that you think it is General E. Lee fun.<br><br><img src=\"img/favorite_subject/history.jpg\">"
    }
    else {
      message = "We can guess your favorite subject. <br><h3>You got: Math </h3>You're so nerdy that you can differentiate between good and bad math jokes.<br><br><img src=\"img/favorite_subject/math.jpg\">"
    }
  }

  else if (history == science && history == 2) {
    if (num == 1) {
      message = "We can guess your favorite subject. <br><h3>You got: History </h3>You enjoy history so much that you think it is General E. Lee fun.<br><br><img src=\"img/favorite_subject/history.jpg\">"
    }
    else {
      message = "We can guess your favorite subject. <br><h3>You got: Science </h3>You already know what happens, you just want to know the science behind it.<br><br><img src=\"img/favorite_subject/science.jpg\">"
    }
  }

  else if (math == science && math == 2) {
    if (num == 1) {
      message = "We can guess your favorite subject. <br><h3>You got: Math </h3>You're so nerdy that you can differentiate between good and bad math jokes.<br><br><img src=\"img/favorite_subject/math.jpg\">"
    }
    else {
      message = "We can guess your favorite subject. <br><h3>You got: Science </h3>You already know what happens, you just want to know the science behind it.<br><br><img src=\"img/favorite_subject/science.jpg\">"
    }
  }

  else {
    var max = Math.max(english, history, math, science);

    if (max == english) {
      message = "We can guess your favorite subject. <br><h3>You got: English </h3>Do you really like to overanalyze books?<br><br><img src=\"img/favorite_subject/english.jpg\">"
    }

    else if (max == history) {
      message = "We can guess your favorite subject. <br><h3>You got: History </h3>You enjoy history so much that you think it is General E. Lee fun.<br><br><img src=\"img/favorite_subject/history.jpg\">"
    }

    else if (max == math) {
      message = "We can guess your favorite subject. <br><h3>You got: Math </h3>You're so nerdy that you can differentiate between good and bad math jokes.<br><br><img src=\"img/favorite_subject/math.jpg\">"
    }

    else if (max == science) {
      message = "We can guess your favorite subject. <br><h3>You got: Science </h3>You already know what happens, you just want to know the science behind it.<br><br><img src=\"img/favorite_subject/science.jpg\">"
    }
  }

  // Display result
  // document.getElementById('result').innerHTML = counts;
  document.getElementById('result').innerHTML = message;
}
