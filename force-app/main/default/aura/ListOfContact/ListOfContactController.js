({
	doInit : function(component, event, helper) {
		var action = component.get('c.getContactList');
        action.setCallback(this, function(response){
            var state = response.getState();
            if(state === 'SUCCESS'){
                component.set('v.contact', response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
	}
})