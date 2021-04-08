import { LightningElement } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    firstNumber;
    secondNumber;
    result;
    isSelected = false;
    historyData = [];
    id;

    handleFirstNum(event) {
        this.firstNumber = event.target.value;
    }

    handleSecondNum(event) {
        this.secondNumber = event.target.value;
    }

    handleAdd() {
        this.result = `The result of ${this.firstNumber} + ${this.secondNumber} is: ${parseFloat(this.firstNumber) + parseFloat(this.secondNumber)}`;
        this.historyData.push(this.result);
    }

    handleSub() {
        this.result = `The result of ${this.firstNumber} - ${this.secondNumber} is: ${parseFloat(this.firstNumber) - parseFloat(this.secondNumber)}`;
        this.historyData.push(this.result);
    }

    handleMul() {
        this.result = `The result of ${this.firstNumber} * ${this.secondNumber} is: ${parseFloat(this.firstNumber) * parseFloat(this.secondNumber)}`;
        this.historyData.push(this.result);
    }

    handleDiv() {
        if(this.secondNumber > 0) {
            this.result = `The result of ${this.firstNumber} / ${this.secondNumber} is: ${parseFloat(this.firstNumber) / parseFloat(this.secondNumber)}`;
        }
        else {
            this.result = "Invalid Input";
        }
        this.historyData.push(this.result);
        
    }

    handleclear() {
        this.firstNumber = '';
        this.secondNumber = '';
        this.result = '';
    }

    handleClick() {
        this.isSelected = !this.isSelected;
        showHistory(this.isSelected);
    }

    showHistory(isSelected) {
        if(isSelected) {
            this.showHistoryData = true;
        }
    }
    handleClearHistory() {
        this.historyData = [];
    }
}