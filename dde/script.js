// Windows are draggable
$('.terminal-wrapper').draggable();
$('#terminal, .terminal-wrapper, .terminal-header').addClass('close-terminal')

$(document).on('click', (e) => {
  if (e.target.classList.contains('input')) $('.terminal-wrapper').draggable('disable')
  if (e.target.id == 'terminal' || e.target.classList.contains('path-input-wrapper')) {
    $('.input').focus()
  } 
})

$('.input').focus()

// Terminal maximize, minimize and close buttons
$('.terminal-max-btn').on('click', () => {
  $('.terminal-wrapper').toggleClass('maximize-terminal')
  $('.taskbar').toggleClass('minimize-taskbar')
})

$('.terminal-min-btn').on('click', () => {
  $('#terminal').addClass('minimize-terminal')
  $('.terminal-wrapper').css({
      'transition': 'opacity 300ms ease-out, box-shadow 100ms ease-out',
      'box-shadow': 'none'
  })
  $('.terminal-header').toggleClass('minimize-terminal-header')
})

$('.terminal-close-btn').on('click', () => {
  $('#terminal, .terminal-wrapper, .terminal-header').addClass('close-terminal')
  $('.active-icon').css('opacity', '0')
})

// The terminal is opened and its taskbar icon is clicked
$('.taskbar-terminal-icon').on('click', () => {
  if ($('#terminal').hasClass('minimize-terminal')) {
    $('#terminal').removeClass('minimize-terminal')
    $('.terminal-wrapper').css({
      'transition': 'opacity 300ms ease-out, box-shadow 150ms ease-out 400ms',
      'box-shadow': '9px 9px 24px rgba(0, 0, 0, .3)'
    })
    $('.terminal-header').removeClass('minimize-terminal-header')
  }
  
  else {
    if (!$('#terminal').hasClass('close-terminal')) {
      $('.terminal-wrapper').css({
        animation: 'terminalShake 600ms ease-out'
      })
    
      setTimeout(() => {
        $('.terminal-wrapper, .terminal-header').css({
          animation: 'none'
        })
      }, 600)
      
    } else {
      // If the taskbar icon is clicked but the terminal has been closed
      $('.active-icon').css('opacity', '1')
      $('#terminal, .terminal-wrapper, .terminal-header').removeClass('close-terminal')
    }
  }
})

// Animate taskbar icons on click
$('.taskbar-content > img').on('click', (e) => {
  var icon = e.target
  icon.css({
    animation: 'taskbarIconClick 150ms ease-out'
  })
  
  setTimeout(() => {
    icon.css({
      animation: 'none'
    })
  }, 300)
})

// Get day and hour
function setDate() {
  var getDate = new Date().toString().split(' ')
  var dayOfTheWeek = getDate[0]
  var hourOfTheDay = getDate[4].slice(0, 5)

  var date = document.querySelector('.date')
  date.textContent = `${dayOfTheWeek} ${hourOfTheDay}`
  
  setTimeout(() => {
    setDate()
  }, 60000)
}

setDate()

// Loading animation
function loadingAnimation() {
  setTimeout(() => {
    $('.loading-bar').animate({
      opacity: 0
    }, 600)
  }, 700)

  setTimeout(() => {
    $('.loading-screen').animate({
      opacity: 0
    }, 200)

    $('.loading-logo').animate({
      width: '120px',
      opacity: 0
    }, 900)
  }, 1200)

  setTimeout(() => {
    $('.background').css({
      animation: 'unBlur 2400ms forwards'
    })
  }, 800)

  setTimeout(() => {
    $('.loading-screen').css({
      display: 'none'
    })
    $('header').animate({
      marginTop: 0
    }, 900)
    $('.taskbar').animate({
      bottom: 0
    }, 900)
  }, 2000)
}

loadingAnimation()