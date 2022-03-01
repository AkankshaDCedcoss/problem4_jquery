$(document).ready(function () {
  $("#button1").click(function () {
    var input = $("#input1").text();
    var radio = $("input[name='input2']:checked").val();
    console.log(radio);
    if (radio == "Farenheit") {
      var C = (5 / 9) * (input - 32);
      $("#output").text(C + " Celcious");
      console.log(C);
    }
    if (radio == "Celcious") {
      var F = input * 1.8 + 32;
      $("#output").text(F + " Farenheit");
      console.log(F);
    }
  });
});
