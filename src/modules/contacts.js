function contactsPage() {
	const mainTemplate = document.getElementById('main-template');
	const contactsPageWrapper = document.createElement('div');
	const contactsHeaderBorder1 = document.createElement('div');
	const contactsHeaderBorder2 = document.createElement('div');
	const contactsHeaderBorder3 = document.createElement('div');
	const contactsHeader = document.createElement('h1');
	const contactsContainer = document.createElement('div');
	const contactsInfoContainer = document.createElement('div');
	const contactsLocation = document.createElement('div');
	const contactsMap = document.createElement('div');
	const contactsForm = document.createElement('form');
	const inputName = document.createElement('input');
	const inputEmail = document.createElement('input');
	const inputMessage = document.createElement('input');
	const submitForm = document.createElement('input');

	contactsPageWrapper.id = "contacts-page";
	contactsContainer.setAttribute('class', 'contact-box');
	contactsInfoContainer.setAttribute('class', 'contacts-info-container');
	contactsLocation.id = "contact-location-info";
	contactsLocation.textContent = `(888) 888-8888
    blueswanfoods@allblue.com 
    12345 Gallagher Street 
    Placeholder City 
    NC 28540`
	contactsHeader.textContent = "Contact Us";
	contactsHeader.className = "contacts-header";
	contactsHeaderBorder3.className = "header-border3"
	contactsHeaderBorder2.className = "header-border2"
	contactsHeaderBorder1.className = "header-border1"
	contactsMap.id = "map";

	//form
	inputName.placeholder = "Enter your name..";
	inputEmail.placeholder = "Enter your email..";
	inputMessage.placeholder = "Enter your message..";
	inputName.required = true;
	inputEmail.required = true;
	inputMessage.required = true;
	inputMessage.style.height = "80px";
	submitForm.type = "submit";
	submitForm.value = "Enter";

	function submit(e) {
		e.preventDefault();
		if (inputName.value !== "" && inputEmail.value !== ""
			&& inputMessage.value !== "") {
			contactsForm.removeChild(inputName);
			contactsForm.removeChild(inputEmail);
			contactsForm.removeChild(inputMessage);
			contactsForm.removeChild(submitForm);
			contactsForm.append("We'll contact you soon");
		}
	}
	contactsForm.addEventListener('submit', submit);
	mainTemplate.insertBefore(contactsPageWrapper, document.querySelector('footer'));
	contactsPageWrapper.append(contactsContainer, contactsMap, contactsForm);
	contactsContainer.append(contactsHeaderBorder3, contactsInfoContainer);
	contactsInfoContainer.append(contactsLocation, contactsForm);
	contactsHeaderBorder3.appendChild(contactsHeaderBorder2);
	contactsHeaderBorder2.appendChild(contactsHeaderBorder1);
	contactsHeaderBorder1.appendChild(contactsHeader);
	contactsForm.append(inputName, inputEmail, inputMessage, submitForm);
};

export { contactsPage };