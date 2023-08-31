function homePage() {
	const imageSources = [
		'assets/images/seafood-dish1.jpg',
		'assets/images/seafood-dish2.jpg',
		'assets/images/salmon1.jpg',
		'assets/images/salmon2.jpg'
	];

	//DOM objects
	const mainTemplate = document.getElementById('main-template');
	const firstHomeFeatureContainer = document.createElement('div');
	const firstImageLabel = document.createElement('div');
	const firstLabelTitle = document.createElement('h2');
	const firstLabelText = document.createElement('p');
	const lastHomeFeatureContainer = document.createElement('div');
	const lastImageLabel = document.createElement('div');
	const lastLabelTitle = document.createElement('h2');
	const lastLabelText = document.createElement('p');
	const imgFood = document.createElement('img');
	const imgPlace = document.createElement('img');
	const homeInfo = document.createElement('div');
	const homeInfoTitle = document.createElement('h1');
	const homeInfoText = document.createElement('p');
	const homeAvailability = document.createElement('h2');
	const weekdaysAvailability = document.createElement('h3');
	const weekendsAvailability = document.createElement('h3');
	const endImage = document.createElement('img');
	const form = document.createElement('form');
	const label = document.createElement('label');
	const label2 = document.createElement('label');
	const input = document.createElement('input');
	const submitButton = document.createElement('input');
	const thankYouMsg = document.createElement('label');

	//classes and id's attached
	firstHomeFeatureContainer.className = "home-feature-container";
	lastHomeFeatureContainer.className = "home-feature-container";
	firstImageLabel.className = "img-label";
	lastImageLabel.className = "img-label";
	lastLabelTitle.className = "right-side-text";
	homeInfo.className = "home-info";
	form.className = "newsletter-form";
	label2.id = "newsletter-small-text";
	submitButton.className = "submit-form";
	endImage.className = "endImage";

	firstLabelTitle.textContent = "Seafood dishes";
	firstLabelText.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mollis 
    lectus nec urna auctor mollis. In bibendum turpis magna, eu consectetur nisl auctor in. Sed iaculis 
    vitae lorem ac posuere. Donec at nisl risus. Aliquam turpis ipsum, feugiat quis efficitur vitae, mollis ac 
    ex. Nunc efficitur ex quis magna sollicitudin imperdiet. Aenean elementum nunc quis mauris ornare blandit.`;
	lastLabelText.textContent = `Quisque felis nibh, convallis eu egestas et, hendrerit a quam. 
    In ac dolor vel velit aliquet tincidunt et sit amet risus. Aliquam varius dignissim nisi id commodo. 
    Etiam sed purus metus. Vivamus tempus eros a purus tristique, ac vehicula orci gravida. `

	//image dish sources
	imgFood.src = "assets/images/salmon1.jpg";
	imgFood.width = '400';
	imgPlace.src = 'assets/images/blue.jpg'
	imgPlace.width = '400';

	//restaurant short description and avalability output
	lastLabelTitle.textContent = "Our place";
	homeInfoTitle.textContent = "Blueswan's Seafood Cuisine";
	homeInfoText.textContent = `Aliquam turpis ipsum, feugiat quis efficitur vitae, mollis ac ex. 
    Nunc efficitur ex quis magna sollicitudin imperdiet. Aenean elementum nunc quis mauris ornare blandit. 
    Quisque felis nibh, convallis eu egestas et, hendrerit a quam. In ac dolor vel velit aliquet 
    tincidunt et sit amet risus. Aliquam varius dignissim nisi id commodo. 
    Etiam sed purus metus. Vivamus tempus eros a purus tristique, ac vehicula orci gravida. `
	homeAvailability.textContent = "Availability";
	weekdaysAvailability.textContent = "Monday-Friday: 9:30a.m - 8:00p.m";
	weekendsAvailability.textContent = "Saturday-Sunday: 9:30a.m - 5:00p.m";
	endImage.src = 'assets/images/seaside-resort.jpg';

	//newsletter form
	input.type = "text";
	input.placeholder = "Enter your email address";
	input.required = true;
	label.textContent = "Subscribe to our Newsletter for latest updates";
	label2.textContent = "We'll inform you about our new products";
	submitButton.type = "submit";
	submitButton.value = "Subscribe";
	thankYouMsg.textContent = "Thanks for submission."
	function handleForm(e) {
		if (input.value !== "") {
			e.preventDefault();
			form.removeChild(input);
			form.removeChild(submitButton);
			form.appendChild(thankYouMsg);
		}
	}

	form.addEventListener('submit', handleForm);

	homeInfo.id = "home-info";
	mainTemplate.insertBefore(firstHomeFeatureContainer, document.querySelector('footer'));
	firstHomeFeatureContainer.append(firstImageLabel, imgFood);
	firstImageLabel.append(firstLabelTitle, firstLabelText);
	mainTemplate.insertBefore(lastHomeFeatureContainer, document.querySelector('footer'));
	lastHomeFeatureContainer.append(imgPlace, lastImageLabel);
	lastImageLabel.append(lastLabelTitle, lastLabelText);
	mainTemplate.insertBefore(homeInfo, document.querySelector('footer'));
	homeInfo.append(homeInfoTitle, homeInfoText, homeAvailability,
		weekdaysAvailability, weekendsAvailability);
	mainTemplate.insertBefore(endImage, document.querySelector('footer'));
	mainTemplate.insertBefore(form, document.querySelector('footer'));
	form.append(label, label2, input, submitButton);

	let index = 0;
	setInterval(() => {
		if (index === imageSources.length) {
			index = 0;
		}
		imgFood.src = imageSources[index];
		index++;
	}, 4000);
};

export { homePage };