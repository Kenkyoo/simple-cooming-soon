$('#clock').countdown('2025/10/10', function(event) {
  $(this).html(event.strftime('%D days %H:%M:%S'));
})
.on('finish.countdown', function(event) {
  $(this).html('The end!')
});