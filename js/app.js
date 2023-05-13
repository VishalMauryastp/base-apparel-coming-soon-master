$(document).ready(function () {
  $("#sub_btn").click(function (e) {
    var email = $("#Email").val();

    if (email != 0) {
      if (isValidEmailAddress(email)) {
        $(".input_btn").css({
          border: "2px solid hsl(0, 36%, 70%)",
        });
        $(".icon-error").css({
          display: "none",
        });
        $(".error").css({
          display: "block",
        });
        $(".error").css({
          color: "green",
        });
        $("#Email").val("");
        $(".error").text("Email successfully Submitted");
        setTimeout(() => {
          $(".error").text("");
        }, 2000);
      } else {
        $(".input_btn").css({
          border: "2px solid red",
        });
        $(".icon-error").css({
          display: "block",
        });
        $(".error").css({
          display: "block",
        });
        $(".error").css({
          color: "red",
        });
        $(".error").text("please provide a valid email");
      }
    } else {
      $(".input_btn").css({
        border: "2px solid red",
      });
      $(".error").css({
        display: "block",
      });
      $(".error").css({
        color: "red",
      });
      $(".icon-error").css({
        display: "block",
      });
    }
  });
});

function isValidEmailAddress(email) {
  var pattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );
  return pattern.test(email);
}
