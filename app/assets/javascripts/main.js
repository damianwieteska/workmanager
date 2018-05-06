$(document).on('turbolinks:load', function(){

  $('.sortable-lists').railsSortable({
    axis: "x",
    opacity: 0.9
  });

  $('.sortable-tasks').railsSortable();

  $('.form-datepicker').datepicker({
    format: 'dd/mm/yyyy'
  });

});
