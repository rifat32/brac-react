const backToTop = (): void => {
    let backtotop = document.querySelector('.back-to-top') as HTMLElement
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active')
        } else {
          backtotop.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      window.addEventListener('scroll',toggleBacktotop)
    }
}
export {backToTop}