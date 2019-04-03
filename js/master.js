
var inputBox = $("#text-box");
var list = $("#list-items");

$("#addButton").click(function() {
  if (inputBox.val() !="" ) {

    var checkBox = $("<input/>", {type:"checkbox"})
    var newListItem = $("<li/>", {class:"list-item", text: inputBox.val()});
    list.append(newListItem);
    inputBox.val("");
    newListItem.prepend(checkBox);

    checkBox.on("click", function() {
      $(this).parent().remove();
        alert("task completed!");

    });
  }
});
