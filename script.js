$(document).ready(() => {
  window.onscroll = (ev) => {
    if (window.scrollY > 200) {
      $('#header').addClass('bg-dark')
    }
    else {
      $('#header').removeClass('bg-dark')
    }
  }

  $('.fa-hamburger').click(() => {
    $('.fa-hamburger').toggleClass('fa-times')
    $('nav').toggleClass('nav-toggle')
  })
  $('#dot1').click(() => {
    $('#dot1').css('background', 'yellow');

    $('#dot2').css('background', 'white');

    $('#dot3').css('background', 'white');
    $('.vid1').css({ 'display': 'block' })
    $('.vid2').css({ 'display': 'none' })
    $('.vid3').css({ 'display': 'none' })

  })
  $('#dot2').click(() => {

    $('#dot2').css('background', 'yellow');
    $('#dot1').css('background', 'white')
    $('#dot3').css('background', 'white')
    $('.vid2').css('display', 'block')
    $('.vid1').css('display', 'none')
    $('.vid3').css('display', 'none')

  })
  $('#dot3').click(() => {
    $('#dot3').css('background', 'yellow');
    $('#dot1').css('background', 'white')
    $('#dot2').css('background', 'white')
    $('.vid3').css('display', 'block')
    $('.vid1').css('display', 'none')
    $('.vid2').css('display', 'none')
  })
})