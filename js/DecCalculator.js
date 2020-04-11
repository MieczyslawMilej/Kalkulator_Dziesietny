import Calculator from "./Calculator";

class DecCalculator extends Calculator {
  constructor(settings) {
    super(settings);
    console.log(this.getName());
  }

  add(numberX, numberY) {
    let result = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = numberX.length - 1; i >= 0; i--) {
      let carry = 0;
      let resulo = 0;
      debugger;
      if (numberX[i] + numberY[i] >= 10) {
        carry = Math.floor((numberX[i] + numberY[i] + carry) / 10);
        resulo = Math.floor((numberX[i] + numberY[i] + result[i]) % 10);
      } else {
        result[i] = Math.floor(numberX[i] + numberY[i] + result[i]);
      }
      console.log(carry);
      if (carry > 0) {
        result[i] = resulo;
        result[i - 1] = carry;
      }
    }
    return result;
  }

  changeNumber(root) {
    let activeElement = root.querySelector(".active");
    activeElement.setAttribute("contenteditable", "true");
    activeElement.focus();
  }

  updateResult() {
    let root = this.$calculatorDOMElement;
    this.resultNumberArray.reverse();
    let $resultNumber = root.querySelectorAll(".result-bit > span");
    for (let i = $resultNumber.length - 1; i >= 0; i--) {
      $resultNumber[i].innerText = this.resultNumberArray[i];
    }
  }

  initEvents() {
    super.initEvents();

    this.$calculatorDOMElement.addEventListener("click", event => {
      if (event.target.parentElement.classList.contains("operator-bar")) {
        this.checkNumber();
        this.updateResult();
      }
    });
  }
}

export default DecCalculator;
