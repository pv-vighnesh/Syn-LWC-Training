import { LightningElement } from 'lwc';

export default class Hello extends LightningElement {
    userName = 'World';

    handleOnChange(event) {
        this.userName = event.target.value;
    }
}