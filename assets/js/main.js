function Calculator() {
  this.display = document.querySelector('.display')

  this.startCalculator = () => {
    this.buttonClick()
    this.keypressEvent()
  }

  this.performCalculation = () => {
    const value = this.display.value

    if (value === 'π') {
      this.calculationPI()
      return
    }

    try {
      const calculation = eval(value)
      if (!calculation) {
        alert('Conta inválida')
        return
      }
      this.display.value = calculation
    } catch (e) {
      alert('Contá inválida')
      return
    }
  }

  this.buttonClick = () => {
    document.addEventListener('click', e => {
      let el = e.target

      if (el.classList.contains('btn-num')) {
        const value = el.innerText
        this.addValueInDisplay(value)
      }
      if (el.classList.contains('btn-clear')) this.clearDisplay()
      if (el.classList.contains('btn-del')) this.deleteOneCaractere()
      if (el.classList.contains('btn-eq')) this.performCalculation()
      if (el.classList.contains('btn-pi')) this.display.value = el.innerText
    })
  }
  this.keypressEvent = () => {
    document.addEventListener('keyup', e => {
      if (e.keyCode === 13) {
        this.performCalculation()
      }
    })
  }
  this.addValueInDisplay = value => {
    this.display.value += value
    this.display.focus() //Sempre ao adicionar uma tecla o foco irá para o input!
  }

  this.clearDisplay = () => (this.display.value = '')
  this.deleteOneCaractere = () =>
    (this.display.value = this.display.value.slice(0, -1))
  this.calculationPI = () => (this.display.value = 3.14159265359)
}

const runCalculator = new Calculator()
runCalculator.startCalculator()
