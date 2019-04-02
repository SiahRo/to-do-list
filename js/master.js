
var inputBox = $("#text-box");
var list = $("#list-items");

$("#addButton").click(function() {
  if (inputBox.val() !="" ) {
    $(list).append('<li class="list-item"><input class="list-check" type="checkbox"></input>'+ inputBox.val() + '</li>');
    inputBox.val("");

    $("li").on("click", ".list-check", function() {
      $(this).parent().remove();
    });
  }
});
