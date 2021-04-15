import { LightningElement } from 'lwc';

export default class EmployeeParent extends LightningElement {
    empDetails = [
        {
            id: 1,
            Name: "PV",
            Email: "pv@notBatman.com",
            Phone: 9886858468
        },
        {
            id: 2,
            Name: "Batman",
            Email: "bat@Batman.com",
            Phone: 9886858469
        },
        {
            id: 3,
            Name: "IronMan",
            Email: "realironman@stark.com",
            Phone: 9886858466
        },
        {
            id: 4,
            Name: "Phil",
            Email: "Phil@shield.com",
            Phone: 9886858463
        }
    ]
}