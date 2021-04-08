import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {

    bmi;
    weight;
    height;
    result;

    handleWeight(event) {
        this.weight = event.target.value;
    }
    handleHeight(event) {
        this.height = event.target.value;
    }

    handleCalculate() {
       this.heightInMeter = parseFloat(this.height) / 100;
       this.bmi = parseFloat(this.weight) / (this.heightInMeter);
       this.result = this.bmi / this.heightInMeter;
    }

    handleClear() {
        this.height = '';
        this.weight = '';
        this.result = '';
    }
}