function testCallback(data, redactor_obj)
{
  $("span.status").text("Autosaved successfully!");
  setTimeout(function() {
    $("span.status").text("Last saved 1 min ago")
  }, 6000)
}

$(document).ready(
  function(){
    var csrf_token = $('meta[name=csrf-token]').attr('content');
    var csrf_param = $('meta[name=csrf-param]').attr('content');
    var params;
    if (csrf_param !== undefined && csrf_token !== undefined) {
      params = csrf_param + "=" + encodeURIComponent(csrf_token);
    }


    $('.redactor').redactor({
      "path":"/redactor-rails",
      "css":"style.css",
      "autosave": $(this).closest('.redactor_wrapper').data("url"), 
      "interval": 30,
      autosaveCallback: testCallback
    });
});