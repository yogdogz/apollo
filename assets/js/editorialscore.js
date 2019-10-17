$(document).ready(function() {

 $(function() {
            $('#first').click(() => {
                let data = !parseInt($('#progress').html(), 10) ? 0 : parseInt($('#progress').html());
                $('#first').prop('checked') ? 1 : 0;
                if($('#first').prop('checked')) {
                    data += 10;
                } else {
                    data -= 10;
                }
                console.log(data);
                $('#progress').html(data);
            })

            $('#second').click(() => {
                let data = !parseInt($('#progress').html(), 10) ? 0 : parseInt($('#progress').html());
                $('#second').prop('checked') ? 1 : 0;
                if($('#second').prop('checked')) {
                    data += 10;
                } else {
                    data -= 10;
                }
                console.log(data);
                $('#progress').html(data);
            })
        })




$('input').on('click', function(){
  var valeur = $('#progress');
  $('input:checked').each(function(){
    if ( $('#progress') > valeur )
    {
        valeur =  $('#progress');
       }
  });
  $('.progress-bar').css('width', valeur+'%').attr('aria-valuenow', valeur).html(valeur+'%');
});
});




