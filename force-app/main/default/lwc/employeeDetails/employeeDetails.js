import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import myMsgService from '@salesforce/messageChannel/empdata_transfer__c';

export default class EmployeeDetails extends LightningElement {
    name;
    phone;
    mail;
    ctc;
    isShown = false;
    isSelected = false;

    @wire(MessageContext) messageContext;

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
    handleSubmit() {
        console.log('Submit is clicked');
        const payload = {message1:this.name, message2:this.phone, message3:this.mail, message4:this.ctc};
        publish(this.messageContext, myMsgService, payload);
    }
}