const wrapper = document.querySelector('.wave')

const someText = 'LOADING...'

function createLetters() {
  return new Promise(resolve => {
    let i = 0
    const text = someText
      .split('')
      .forEach(item => {
        i++
        const node = document.createElement('span')
        node.style = `--i: ${i}`
        node.innerHTML = item
        wrapper.append(node)
      })
      resolve()
    
  })
}


createLetters()
  .then(() => {
    /* code... */
  })