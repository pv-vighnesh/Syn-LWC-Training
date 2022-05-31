public class ContactController {

    @AuraEnabled(cacheable = true)
    public static List<Case> getCasesRelatedToContact(String contactId) {
        List<Case> lCases = [SELECT Id, Subject, LastModifiedDate, ContactId FROM Case WHERE ContactId =: contactId];
        return lCases;
    }
}