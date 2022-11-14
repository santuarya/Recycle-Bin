public class getContact {
    @AuraEnabled
    public static List<Contact> getContactList(){
        List<Contact> con = [SELECT Id, Name, Email FROM Contact];
        return con;
    }
    
    @AuraEnabled
    public static void deleteContact(String contactId){
        contact[] con = [SELECT Id,Name FROM Contact WHERE Id =: contactId];
        try{
            delete con;
        }
        catch (DmlException e){
            
        }
    }

}