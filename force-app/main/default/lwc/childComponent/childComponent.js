import { api, LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {
    handlePrevious() {
        console.log('Previous is Clicked');
        const prevEvent = new CustomEvent('previous');
        this.dispatchEvent(prevEvent);
    }
    handleNext() {
        console.log('Next is clicked');
        const nextEvent = new CustomEvent('next');
        this.dispatchEvent(nextEvent);
    }
}