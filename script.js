$(function () {
  const $todoList = $("#todoList");
  const $todoInput = $("#todoInput");

  $("#todoAdd").on("click", function () {
    if (!$todoInput.val()) {
      return false;
    }
    $todoList.append(
      "<li>" +
        $todoInput.val() +
        '<button class="delete">&#10006</button>' +
        "</li>"
    );
    $todoInput.val("");

    $(".delete").on("click", function () {
      let $parent = $(this).parent();
      $parent.remove();
    });
  });
});



