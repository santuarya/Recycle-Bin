({
	dragOverHandler : function(component, event, helper) {
		event.preventDefault();
        component.set('v.binVariant', 'error');
        var cmpTarget = component.find("dropZone");
        $A.util.addClass(cmpTarget, 'active');
	},
    
    dragLeaveHandler : function(component, event, helper) {
		event.preventDefault();
        component.set('v.binVariant', 'warning');
        var cmpTarget = component.find("dropZone");
        $A.util.removeClass(cmpTarget, 'active');
	},
    
    handleDrop : function(component, event, helper) {
		event.preventDefault();
        var contact = event.dataTransfer.getData("contact");
        var action = component.get('c.deleteContact');
        action.setParams({'contactId': JSON.parse(contact).Id});
        
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === 'SUCCESS'){
                alert('The contact deleted successfully');
            }
        });
        $A.enqueueAction(action);
	},
})