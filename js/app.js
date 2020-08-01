let main = document.getElementById('main')


if(localStorage.getItem('hide') =='dark'){
  main.classList.add('dark');
}
else{
  main.classList.add('light');
}

document.getElementById('dark1').onclick = function() {
  main.classList.remove('light');
  main.classList.add('dark');
  main.classList.add('transition');
    
    const idRemember = document.getElementById('main');
    idRemember.style.color = (idRemember.style.color == '#1A8FE8');
      
    localStorage.setItem('hide', 'dark');
    
  }
  document.getElementById('light1').onclick = function() {
    main.classList.remove('dark');
    main.classList.add('light');

        
    const idRemember = document.getElementById('main');
    idRemember.style.color = (idRemember.style.color == '#1A8FE8');
      
    localStorage.setItem('hide', 'light');
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
  
  teamToShow = document.getElementsByClassName('team__hidden');
  btn = document.getElementById('btn-show');
if(btn)
 btn.onclick = () => {
   console.log('dd')
  for (let i = 0; i<teamToShow.length; i++) {
    teamToShow[i].style.display = 'flex';
  }
    btn.style.display = 'none';
 }
