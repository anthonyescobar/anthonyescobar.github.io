$('#accordion').on('hidden.bs.collapse', function () {
//do something...
})

$('#accordion .accordion-toggle').click(function (e){
  var chevState = $(e.target).siblings("i.indicator").toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
  $("i.indicator").not(chevState).removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");
});
