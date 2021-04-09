import { LightningElement } from 'lwc';

export default class EmployeeDetails extends LightningElement {
    name;
    phone;
    mail;
    ctc;
    isShown = false;
    isSelected = false;

    handleName(event) {
        this.name = event.target.value;
    }
    handlePhone(event) {
        this.phone = event.target.value;
    }
    handleMail(event) {
        this.mail = event.target.value;
    }
    handleCtc(event) {
        this.ctc = event.target.value;
    }
    handleClick() {
        this.isSelected = !this.isSelected;
        showDetails(this.isSelected);
    }
    showDetails(isSelected) {
        if(isSelected) {
            this.isShown = true;
        }
    }
}