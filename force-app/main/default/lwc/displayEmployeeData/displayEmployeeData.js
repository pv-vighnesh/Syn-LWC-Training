import { LightningElement, wire } from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import myMsgService from '@salesforce/messageChannel/empdata_transfer__c';

export default class DisplayEmployeeData extends LightningElement {
    name;
    phone;
    mail;
    ctc;

    subscription = null;

    @wire(MessageContext) messageContext;

    connectedCallback() {
        this.subcribeToMessageChannel();
    }

    subcribeToMessageChannel() {
        this.subscription = subscribe(
            this.messageContext,
            myMsgService,
            (message) => this.handleMessage(message)
        );
    }

    handleMessage() {
        this.name  = message.message1;
        this.phone = message.message2;
        this.mail  = message.message3;
        this.ctc   = message.message4;
    }
}