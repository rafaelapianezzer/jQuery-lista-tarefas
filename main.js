$('form').on('submit', function(e) {
    e.preventDefault();
  
    $('#lista-tarefa').append('<li>' + $('#adicionar-tarefa').val() + '</li>');
    
  });
  
  
  $('#lista-tarefa').on('click', 'li', function() {
    $(this).css('text-decoration', 'line-through');
  });
  