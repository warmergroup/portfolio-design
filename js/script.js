const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSelections = document.querySelector('.main-content');

function removeActive(args){
  args.forEach(arg=>arg.classList.remove('active'))
}
function PageTransitions() {
  // button click active class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function () {
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
      this.className += ' active-btn';
    })
  }
  // section active class
  allSelections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      // remove selected from other btns
      sectBtns.forEach((btn) => {
        btn.classList.remove('active')
      })
      removeActive(sectBtn)
      e.target.classList.add('active')

      // hide other section
      sections.forEach((section) => {
        section.classList.remove('active')
      })
      const element = document.getElementById(`${id}`);
      element.classList.add('active');
    }
  })

  // togle theme 
  const themeBtn = document.querySelector('.theme-btn');
  themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode')
  })
}

PageTransitions();
