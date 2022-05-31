import { LightningElement, wire, api } from 'lwc';
import getCasesRelatedToContact from '@salesforce/apex/ContactController.getCasesRelatedToContact';

const columns = [{
        label    : 'Subject',
        fieldName: 'Subject',
        sortable : true
    },
    {
        label    : 'LastModifiedDate',
        fieldName: 'LastModifiedDate',
        sortable : true
    }
];

export default class CaseListOnContact extends LightningElement {

    @api recordId;

    cases;

    columns = columns;
    defaultSortDirection = 'desc';
    sortDirection = 'desc';
    sortedBy;

    // Fetching Cases related to Contact
    @wire(getCasesRelatedToContact, {
        contactId: '$recordId'
    }) wiredContactRecord({
        data,
        error
    }) {
        if (data) {
            this.cases = data;
        } else if (error) {
            console.log('error' + JSON.stringify(error));
        }
    }

    // Sorting
    sortBy(field, reverse, primer) {
        const key = primer ?
            function (x) {
                return primer(x[field]);
            } :
            function (x) {
                return x[field];
            };

        return function (a, b) {
            a = key(a);
            b = key(b);
            return reverse * ((a > b) - (b > a));
        };
    }

    onHandleSort(event) {
        const {
            fieldName: sortedBy,
            sortDirection
        } = event.detail;
        const cloneData = [...this.cases];

        cloneData.sort(this.sortBy(sortedBy, sortDirection === 'desc' ? 1 : -1));
        this.cases = cloneData;
        this.sortDirection = sortDirection;
        this.sortedBy = sortedBy;
    }
}