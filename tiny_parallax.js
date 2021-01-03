class Paralax {
  constructor() {
    if(!this.setVars()) return;
    this.setListeners();
  }

  setVars() {
    this.elements = document.body.querySelectorAll('[data-parallax]');
    if (!this.elements.length) return false;

    each(this.elements, (key, val)=>{
      val.style.transition = 'transform 0.4s ease-out'
    });
    return true;
  }

  setListeners() {
    this.moveElements = this.moveElements.bind(this);
    window.addEventListener('scroll', this.moveElements, {passive: true});
  }

  moveElements (e) {
    this.elements.forEach(el => {
      let top = el.getBoundingClientRect().top;

      if (top > 0 && top < innerHeight) {
        el.style.transform = `translateY(${(1 - (top / innerHeight) ) * 100}%)`
      }
    })
  }
}

export default Paralax;