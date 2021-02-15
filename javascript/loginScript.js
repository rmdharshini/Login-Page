$(function () {
  $("#email-incorrect-message").hide();
  $("#password-incorrect-message").hide();

  var error_email = false;
  var error_password = false;

  $("#email").keyup(function () {
    check_email();
  });
  $("#password").keyup(function () {
    check_password();
  });

  // EMAIL VALIDATION
  function check_email() {
    var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email = $("#email").val();
    if (pattern.test(email) && email !== "") {
      $("#email-incorrect-message").hide();
    } else if (email === "") {
      $("#email-incorrect-message").html("This field is required");
      $("#email-incorrect-message").show();
      error_email = true;
    } else {
      $("#email-incorrect-message").html("Valid email is required");
      $("#email-incorrect-message").show();
      error_email = true;
    }
  }

  // PASSWORD VALIDATION
  function check_password() {
    var passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    var password = $("#password").val();
    if (passPattern.test(password) && password !== "") {
      $("#password-incorrect-message").hide();
    } else if (password === "") {
      $("#password-incorrect-message").html("This field is required");
      $("#password-incorrect-message").show();
      error_password = true;
    } else {
      $("#password-incorrect-message").html(
        "Valid password is required <br/> [Password should contain at least one from each a-z, A-Z, 0-9 and special character]"
      );
      $("#password-incorrect-message").show();
      error_password = true;
    }
  }

  $("#login-form").submit(function () {
    error_email = false;
    error_password = false;

    check_email();
    check_password();

    if (error_email === false && error_password === false) {
      // alert("Login Succuessfull");
      $("#email").val(" ");
      $("password").val(" ");
      return true;
    } else {
      return false;
    }
  });
});
