function checkIt() {
  // Initialize scores
  var apcompsci = 0;
  var apprin = 0;
  var compprog = 0;
  var webdes = 0;

  // Get all checkbox elements from form
  var elements = document.getElementsByClassName('answer');

  // Tally results
  for (var e of elements) {

    if (e.checked) {
      if (e.value == 'apcompsci') {
        apcompsci++;
      }
      else if (e.value == 'apprin') {
        apprin++;
      }
      else if (e.value == 'compprog') {
        compprog++;
      }
      else if (e.value == 'webdes') {
        webdes++;
      }
    }

  }

  // Determine result
  var counts = "AP Computer Science: " + apcompsci + ", " +
               "AP Computer Science Principles: " + apprin  + ", " +
               "Computer Programming: " + compprog  + ", " +
               "Webpage Design: " + webdes;

  // What is the highest value?
  //var max = compprog.max(apcompsci, apprin, compprog, webdes);

  // Form a message
  /* Default:
  var message;

  if (max == apcompsci) {
    message = "You like apcompsci.";
  }
  else if (max == apprin) {
    message = "You like apprin.";
  }
  else if (max == compprog) {
    message = "You like compprog.";
  }
  else if (max == webdes) {
    message = "You like webdes.";
  }
Improved: */
  var message;

  var num = Math.floor((Math.random() * 2) + 1);

  if (apcompsci == apprin && apcompsci == 2) {
    if (num == 1) {
      message = "We can tell you which computer class to take. <br><h3>You got: AP Computer Science </h3>In this class, you will make cool things with Java.<br><br><img src=\"img/computer_class/apcompsci.jpg\">"
    }
    else {
      message = "We can tell you which computer class to take. <br><h3>You got: AP Computer Science Principles </h3>In this class, you will learn about the history of computers.<br><br><img src=\"img/computer_class/apprin.jpg\">"
    }
  }

  else if (apcompsci == compprog && apcompsci == 2) {
    if (num == 1) {
      message = "We can tell you which computer class to take. <br><h3>You got: AP Computer Science </h3>In this class, you will make cool things with Java.<br><br><img src=\"img/computer_class/apcompsci.jpg\">"
    }
    else {
      message = "We can tell you which computer class to take. <br><h3>You got: Computer Programming </h3>You're so nerdy that you can differentiate between good and bad compprog jokes.<br><br><img src=\"img/computer_class/compprog.jpg\">"
    }
  }

  else if (apcompsci == webdes && apcompsci == 2) {
    if (num == 1) {
      message = "We can tell you which computer class to take. <br><h3>You got: AP Computer Science </h3>In this class, you will make cool things with Java.<br><br><img src=\"img/computer_class/apcompsci.jpg\">"
    }
    else {
      message = "We can tell you which computer class to take. <br><h3>You got: Webpage Design </h3>In this class, you use HTML and a little bit of JavaScript to make detailed websites.<br><br><img src=\"img/computer_class/webdes.jpg\">"
    }
  }

  else if (apprin == compprog && apprin == 2) {
    if (num == 1) {
      message = "We can tell you which computer class to take. <br><h3>You got: AP Computer Science Principles </h3>In this class, you will learn about the history of computers.<br><br><img src=\"img/computer_class/apprin.jpg\">"
    }
    else {
      message = "We can tell you which computer class to take. <br><h3>You got: Computer Programming </h3>You're so nerdy that you can differentiate between good and bad compprog jokes.<br><br><img src=\"img/computer_class/compprog.jpg\">"
    }
  }

  else if (apprin == webdes && apprin == 2) {
    if (num == 1) {
      message = "We can tell you which computer class to take. <br><h3>You got: AP Computer Science Principles </h3>In this class, you will learn about the history of computers.<br><br><img src=\"img/computer_class/apprin.jpg\">"
    }
    else {
      message = "We can tell you which computer class to take. <br><h3>You got: Webpage Design </h3>In this class, you use HTML and a little bit of JavaScript to make detailed websites.<br><br><img src=\"img/computer_class/webdes.jpg\">"
    }
  }

  else if (compprog == webdes && compprog == 2) {
    if (num == 1) {
      message = "We can tell you which computer class to take. <br><h3>You got: Computer Programming </h3>You're so nerdy that you can differentiate between good and bad compprog jokes.<br><br><img src=\"img/computer_class/compprog.jpg\">"
    }
    else {
      message = "We can tell you which computer class to take. <br><h3>You got: Webpage Design </h3>In this class, you use HTML and a little bit of JavaScript to make detailed websites.<br><br><img src=\"img/computer_class/webdes.jpg\">"
    }
  }

  else {
    var max = Math.max(apcompsci, apprin, compprog, webdes);

    if (max == apcompsci) {
      message = "We can tell you which computer class to take. <br><h3>You got: AP Computer Science </h3>In this class, you will make cool things with Java.<br><br><img src=\"img/computer_class/apcompsci.jpg\">"
    }

    else if (max == apprin) {
      message = "We can tell you which computer class to take. <br><h3>You got: AP Computer Science Principles </h3>In this class, you will learn about the history of computers.<br><br><img src=\"img/computer_class/apprin.jpg\">"
    }

    else if (max == compprog) {
      message = "We can tell you which computer class to take. <br><h3>You got: Computer Programming </h3>You're so nerdy that you can differentiate between good and bad compprog jokes.<br><br><img src=\"img/computer_class/compprog.jpg\">"
    }

    else if (max == webdes) {
      message = "We can tell you which computer class to take. <br><h3>You got: Webpage Design </h3>In this class, you use HTML and a little bit of JavaScript to make detailed websites.<br><br><img src=\"img/computer_class/webdes.jpg\">"
    }
  }

  // Display result
  // document.getElementById('result').innerHTML = counts;
  document.getElementById('result').innerHTML = message;
}
