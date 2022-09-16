function calculator() {
  return {
    display: document.querySelector('.display'),

    startCalculator() {
      this.clickButton()
    },

    clickButton() {
      document.addEventListener('click', e => {
        const el = e.target

        if (el.classList.contains('btn-num')) {
          const value = el.innerText
          this.displayText(value)
        }

        if (el.classList.contains('btn-clear')) {
          this.clearDisplay()
        }

        if (el.classList.contains('btn-del')) {
          this.deleteOne()
        }
      })
    },


    displayText(value) {
      this.display.value += value
    },

    clearDisplay() {
      this.display.value = ''
    },

    deleteOne() {
      this.display.value = this.display.value.slice(0, -1)
    }
  }
}

const soma = calculator()
soma.startCalculator()
