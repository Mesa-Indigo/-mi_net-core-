
/* function to show container */
$(function() {
  function display(bool) {
    if (bool) {
      $("#mainscreen").show();
    } else {
      $("#mainscreen").hide();
    }
  }

  display(false)

  window.addEventListener('message', function(event) {
    var item = event.data;
    if (item.type === "ui") {
        if (item.status == true) {
            display(true)
        } else {
            display(false)
        }
    }
  })

  document.onkeyup = function (data) {
    if (data.which == 27) {
        $.post('http://nui2/exit', JSON.stringify({}));
        return
    }
  };

})