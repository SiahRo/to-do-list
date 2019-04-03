
var inputBox = $("#text-box");
var list = $("#list-items");

$("#addButton").click(function() {
  if (inputBox.val() !="" ) {

    var checkBox = $("<input/>", {type:"checkbox"})
    var newListItem = $("<li/>", {class:"list-item", text: inputBox.val()});
    var line = $("<hr/>");
    list.append(newListItem);
    inputBox.val("");
    newListItem.prepend(checkBox);
    newListItem.append(line);

    checkBox.on("click", function() {

      $("#toast").css("display", "block");
      $("#toast").text("Task completed!");
      $(this).parent().remove();
      setTimeout(function(){
        $("#toast").hide();
      }, 3000);

    });
  }
});
