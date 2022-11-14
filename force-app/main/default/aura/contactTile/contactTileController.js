({
	handleDrag : function(component, event, helper) {
		var contact = component.get('v.contact');
        var id = contact.Id;
        var dom = document.getElementById(id);
        dom.classList.add('ccc');
        event.dataTransfer.setData("contact", JSON.stringify(contact));
	}
})