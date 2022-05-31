import { LightningElement } from 'lwc';
import positiveIcon from '@salesforce/resourceUrl/positiveIcon';
import negetiveIcon from '@salesforce/resourceUrl/negetiveIcon';


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

    get dynamicIcon() {
        return positiveIcon;
    }
}