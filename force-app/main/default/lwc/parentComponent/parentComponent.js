import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    pageNumber = 1;

    handlePrevious() {
        if (this.pageNumber > 1) {
            this.pageNumber -= 1;
        }
    }
    handleNext() {
        if (this.pageNumber < 10) {
            this.pageNumber += 1;
        }
    }
}