import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
    userName = 'World';

    handleOnChange(event) {
        this.userName = event.target.value;
    }
}