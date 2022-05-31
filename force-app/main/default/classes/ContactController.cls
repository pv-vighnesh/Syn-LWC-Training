public class ContactController {

    @AuraEnabled(cacheable = true)
    public static List<Case> getCasesRelatedToContact(String contactId) {
        List<Case> lCases = [SELECT Id, Subject, LastModifiedDate, ContactId, Status FROM Case WHERE ContactId =: contactId and Status = 'Closed'];
        return lCases;
    }
}