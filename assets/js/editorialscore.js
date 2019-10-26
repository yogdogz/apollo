$(document).ready(function() {
  $('input').on('click', function(){
    var valeur = 0;
    $('input:checked').each(function(){
      console.log("This value : "+parseInt($(this).attr('value')));
      valeur += parseInt($(this).attr('value'));
    });
    $('.progress-bar').css('width', valeur+'%').attr('aria-valuenow', valeur).html(valeur+'%');
  });

  var maxValue = 0;
  $(":checkbox").each(function(){
  	maxValue += parseInt($(this).attr('value'));
  });
  console.log("max value = "+maxValue);
  $('.progress-bar').attr('aria-valuemax',maxValue);

  var perValue = 0;
  $(":checkbox").each(function(){
    perValue = parseInt((($(valeur) / $(maxValue)) * 100),10);
  });
  console.log("percentage value = "+perValue);
  $('.progress-bar').attr('aria-valuenow',perValue);




  /*// get box count
  var count = 0;
  var checked = 0;
  function countBoxes() {
    count = $("input[type='checkbox']").length;
    console.log(count);
  }

  countBoxes();
  $(":checkbox").click(countBoxes);

  // count checks

  function countChecked() {
    checked = $("input:checked").length;

    var percentage = parseInt(((checked / count) * 100),10);
    $(".progressbar-bar").progressbar({
            value: percentage
        });
    $(".progressbar-label").text(percentage + "%");
  }


  countChecked();
  $(":checkbox").click(countChecked);*/
});