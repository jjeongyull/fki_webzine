$(document).on('click', '#btn_menu_toggle', function(){
  $('#side_menu').addClass('open');
});
$(document).on('click', '#close_menu', function(){
  $('#side_menu').removeClass('open');
  $('.submenu').removeClass('open');
  $('.has-submenu').removeClass('active');
});
$(document).on('click', '.has-submenu', function(e){
  e.preventDefault();
  if($(this).hasClass('active')){
    $('.has-submenu').removeClass('active');
    $('.submenu').removeClass('open');
  }else{
    $('.has-submenu').removeClass('active');
    $('.submenu').removeClass('open');
    $(this).next('.submenu').addClass('open');
    $(this).addClass('active');
  }
});