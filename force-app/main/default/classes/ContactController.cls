public class ContactController {

    @AuraEnabled(cacheable = true)
    public static List<Case> getCasesRelatedToContact(String contactId, Integer noOfRecordsToDisplay) {
        List<Case> lCases = [SELECT Id, Subject, LastModifiedDate, ContactId, Status, Origin FROM Case WHERE ContactId =: contactId and Status = 'Closed' LIMIT: noOfRecordsToDisplay];
        return lCases;
    }
}