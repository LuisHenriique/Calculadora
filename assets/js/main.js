function calculator() {
  return {
    display: document.querySelector('.display'),

    startCalculator() {
      this.clickButton()
      this.keypressValue()
    },

    performCalculations() {
      const value = this.display.value

      if (value === 'π') {
        this.calculationPI()
        return
      }

      try {
        let calculation = eval(value)

        if (!calculation) {
          alert('Conta inválida')
        }

        this.display.value = calculation
      } catch (e) {
        alert('Conta inválida')
      }
    },

    keypressValue() {
      document.addEventListener('keypress', e => {
        if (e.keyCode === 13) {
          this.performCalculations()
        }
      })
    },
    clickButton() {
      document.addEventListener('click', e => {
        const el = e.target

        if (el.classList.contains('btn-num')) {
          const value = el.innerText
          this.addValueInDisplay(value)
        }

        if (el.classList.contains('btn-clear')) {
          this.clearDisplayValue()
        }

        if (el.classList.contains('btn-del')) {
          this.deleteOneCaractere()
        }

        if (el.classList.contains('btn-eq')) {
          this.performCalculations()
        }

        if (el.classList.contains('btn-pi')) {
          this.display.value = el.innerText
        }
      })
    },

    addValueInDisplay(value) {
      this.display.value += value
    },

    clearDisplayValue() {
      this.display.value = ''
    },

    deleteOneCaractere() {
      this.display.value = this.display.value.slice(0, -1)
    },

    calculationPI() {
      const pi = 3.14159265359
      this.display.value = pi
    }
  }
}

const runCalculator = calculator()
runCalculator.startCalculator()
