document.getElementById('dark1').onclick = function() {
    document.getElementById('main').classList.remove('light');
    document.getElementById('main').classList.add('dark');
    document.getElementById('main').classList.add('transition');
  }
  document.getElementById('light1').onclick = function() {
    document.getElementById('main').classList.remove('dark');
    document.getElementById('main').classList.add('light');
  }

  const anchors = document.querySelectorAll('a.up')
  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href')
      
      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }