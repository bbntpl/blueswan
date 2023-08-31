/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 205:
/***/ ((module) => {

const API_URL = 'https://maps.googleapis.com/maps/api/js'
const CALLBACK_NAME = '__googleMapsApiOnLoadCallback'

const optionsKeys = ['channel', 'client', 'key', 'language', 'region', 'v']

let promise = null

module.exports = function (options = {}) {
  promise =
    promise ||
    new Promise(function (resolve, reject) {
      // Reject the promise after a timeout
      const timeoutId = setTimeout(function () {
        window[CALLBACK_NAME] = function () {} // Set the on load callback to a no-op
        reject(new Error('Could not load the Google Maps API'))
      }, options.timeout || 10000)

      // Hook up the on load callback
      window[CALLBACK_NAME] = function () {
        if (timeoutId !== null) {
          clearTimeout(timeoutId)
        }
        resolve(window.google.maps)
        delete window[CALLBACK_NAME]
      }

      // Prepare the `script` tag to be inserted into the page
      const scriptElement = document.createElement('script')
      const params = [`callback=${CALLBACK_NAME}`]
      optionsKeys.forEach(function (key) {
        if (options[key]) {
          params.push(`${key}=${options[key]}`)
        }
      })
      if (options.libraries && options.libraries.length) {
        params.push(`libraries=${options.libraries.join(',')}`)
      }
      scriptElement.src = `${options.apiUrl || API_URL}?${params.join('&')}`

      // Insert the `script` tag
      document.body.appendChild(scriptElement)
    })
  return promise
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./src/modules/template-page.js
class Template {
	static rendertemplate() {
		//creating instances of DOM elements
		const content = document.getElementById('content');
		const mainTemplate = document.createElement('div');
		const mainHeader = document.createElement('div');
		const mainLogo = document.createElement('img');
		const mainHeaderText = document.createElement('header');
		const mainNavBar = document.createElement('div');
		const navbarList = document.createElement('ul');
		const homeButton = document.createElement('li');
		const menuButton = document.createElement('li');
		const aboutButton = document.createElement('li');
		const contactButton = document.createElement('li');
		const instaIcon = document.createElement('li');
		const fbIcon = document.createElement('li');
		const twitterIcon = document.createElement('li');
		const mainFooter = document.createElement('footer');
		const githubIcon = document.createElement('i');
		const githubLink = document.createElement('a');

		//DOM property manipulation
		mainTemplate.id = "main-template";
		mainHeader.id = "main-header";
		mainLogo.src = 'assets/images/compass.png';
		mainLogo.height = '100';
		mainHeaderText.textContent = "Blueswan";
		mainNavBar.id = "main-nav-bar";
		homeButton.textContent = "Home";
		homeButton.className = "navbar-text";
		homeButton.id = "home-button";
		menuButton.textContent = "Menu";
		menuButton.className = "navbar-text";
		menuButton.id = "menu-button";
		contactButton.textContent = "Contact";
		contactButton.className = "navbar-text";
		contactButton.id = "contact-button";
		aboutButton.textContent = "About";
		aboutButton.className = "navbar-text";
		aboutButton.id = "about-button";
		instaIcon.className = `fab fa-instagram`;
		fbIcon.className = `fab fa-facebook`;
		twitterIcon.className = `fab fa-twitter`;
		githubIcon.className = `fa fa-github`;
		githubLink.href = "https://github.com/bvrbryn445";

		//attach each elements to its corresponding parents
		content.appendChild(mainTemplate);
		mainTemplate.append(mainHeader, mainNavBar, mainFooter);
		mainHeader.append(mainLogo, mainHeaderText);
		mainNavBar.appendChild(navbarList);
		navbarList.append(homeButton, menuButton, aboutButton,
			contactButton, instaIcon, fbIcon, twitterIcon);
		mainFooter.append("Maintained by ", githubLink);
		githubLink.append(githubIcon, " B.B Antipolo");
	};
}


;// CONCATENATED MODULE: ./src/modules/home.js
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


;// CONCATENATED MODULE: ./src/modules/menu.js
function menuPage() {
	const mainTemplate = document.getElementById('main-template');
	const menuPageWrapper = document.createElement('div');
	const menuBackground = document.createElement('div');
	const menuHeaderWrapper = document.createElement('div');
	const menuHeader = document.createElement('div');
	const menuHeaderText = document.createElement('h1');
	const menuCategoryContainer = document.createElement('div');
	const menuAppetizerHeader = document.createElement('h2');
	const menuAppetizerContainer = document.createElement('div');
	const menuLunchHeader = document.createElement('h2');
	const menuLunchContainer = document.createElement('div');
	const menuDinnerHeader = document.createElement('h2');
	const menuDinnerContainer = document.createElement('div');
	const menuDrinksHeader = document.createElement('h2');
	const menuDrinksContainer = document.createElement('div');
	const menuSpecialsHeader = document.createElement('h2');
	const menuSpecialsContainer = document.createElement('div');

	menuBackground.id = 'menu-background';
	menuPageWrapper.id = "menu-page";
	menuHeaderWrapper.id = "menu-header-wrapper";
	menuHeader.id = "menu-header";
	menuHeaderText.textContent = "Menu";
	menuCategoryContainer.id = "menu-category-container";
	menuAppetizerHeader.textContent = `Appetizers`;
	menuLunchHeader.textContent = `Lunch`;
	menuDinnerHeader.textContent = "Dinner";
	menuDrinksHeader.textContent = "Drinks";
	menuSpecialsHeader.textContent = "Specials";

	mainTemplate.insertBefore(menuPageWrapper, document.querySelector('footer'));
	menuPageWrapper.appendChild(menuBackground);
	menuBackground.appendChild(menuHeaderWrapper);
	menuHeaderWrapper.appendChild(menuHeader);
	menuHeader.appendChild(menuHeaderText);
	menuPageWrapper.appendChild(menuCategoryContainer);
	menuCategoryContainer.append(menuAppetizerHeader, menuAppetizerContainer, menuLunchHeader,
		menuLunchContainer, menuDinnerHeader, menuDinnerContainer, menuDrinksHeader,
		menuDrinksContainer, menuSpecialsHeader, menuSpecialsContainer);

	//generate item list-esque format
	document.querySelectorAll('#menu-category-container > div').forEach((e, i) => {
		for (let i = 0; i < 3; i++) {
			const itemBox = document.createElement('div');
			const imageWrapper = document.createElement('div');
			const foodInfoContainer = document.createElement('div');
			const foodLabel = document.createElement('div');
			const foodTitle = document.createElement('h3');
			const foodPrice = document.createElement('p');
			const foodPara = document.createElement('p');

			itemBox.className = "item-box";
			foodTitle.textContent = `Dish ${i + 1}`;
			foodPrice.textContent = `$9.99`;
			imageWrapper.className = 'image-holder';
			foodInfoContainer.className = 'food-info-container';
			foodLabel.className = 'food-label';
			foodPara.textContent = `Maecenas nec pellentesque urna. Aenean nibh purus, 
            efficitur vitae dolor at, vulputate lacinia ipsum. `
			e.appendChild(itemBox);
			itemBox.append(imageWrapper, foodInfoContainer);
			foodInfoContainer.append(foodLabel, foodPara);
			foodLabel.append(foodTitle, foodPrice);
		}
	})
};


;// CONCATENATED MODULE: ./src/modules/about.js
function aboutPage() {
	const mainTemplate = document.getElementById('main-template');
	const aboutPageWrapper = document.createElement('div');
	const aboutPageHeader = document.createElement('h1');
	const divSection1 = document.createElement('div');
	const paraSection1 = document.createElement('p');
	const aboutImage = document.createElement('img');
	const divSection2 = document.createElement('div');
	const paraSection2 = document.createElement('p');

	aboutPageWrapper.id = "about-page";
	aboutPageHeader.textContent = "About Us";
	aboutPageHeader.id = "about-us";
	divSection1.className = "about-section";
	divSection2.className = "about-section";
	paraSection1.textContent = `    Maecenas nec pellentesque urna. Aenean nibh purus, efficitur vitae dolor at, 
    vulputate lacinia ipsum. Mauris felis purus, aliquet sed orci lacinia, 
    bibendum volutpat velit. Sed at lectus magna. Phasellus sagittis mattis 
    tincidunt. Curabitur quis ante vel elit mattis facilisis. Suspendisse 
    convallis varius lorem, quis rutrum orci placerat id. 

    Mauris condimentum eget leo et congue. Ut vulputate pulvinar imperdiet. 
    Curabitur molestie metus elit, in condimentum ligula hendrerit vitae. 
    Fusce consequat et dui quis laoreet. Mauris convallis nisl vitae 
    pharetra suscipit. Vestibulum ante ipsum primis in faucibus orci luctus
    et ultrices posuere cubilia curae; Proin a tincidunt metus. Vestibulum 
    feugiat tincidunt mauris, non iaculis tellus accumsan et. Donec 
    convallis nunc blandit tortor mollis mattis. Nunc vehicula aliquet velit 
    non molestie. Vivamus nec elit eu massa sagittis aliquet eu rhoncus elit. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    
    Praesent id tortor convallis, porttitor ex sed, sodales orci.`;
	aboutImage.src = 'assets/images/front.jpg';
	paraSection2.textContent = `     Curabitur molestie metus elit, in condimentum ligula hendrerit vitae.
     Fusce consequat et dui quis laoreet. Mauris convallis nisl vitae pharetra 
     suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices 
     posuere cubilia curae; Proin a tincidunt metus. Vestibulum feugiat tincidunt 
     mauris, non iaculis tellus accumsan et. Donec convallis nunc blandit tortor 
     mollis mattis. Nunc vehicula aliquet velit non molestie. Vivamus nec elit 
     eu massa sagittis aliquet eu rhoncus elit. Lorem ipsum dolor sit amet, 
     consectetur adipiscing elit. Praesent id tortor convallis, porttitor ex 
     sed, sodales orci. Salamat po.`

	mainTemplate.insertBefore(aboutPageWrapper, document.querySelector('footer'));
	aboutPageWrapper.append(aboutPageHeader, divSection1, aboutImage, divSection2);
	divSection1.appendChild(paraSection1);
	divSection2.appendChild(paraSection2);

};

;// CONCATENATED MODULE: ./src/modules/contacts.js
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


;// CONCATENATED MODULE: ./src/map.js
const loadGoogleMapsApi = __webpack_require__(205);

class Map {
	static loadGoogleMapsApi() {
		return loadGoogleMapsApi({ key: `AIzaSyAQF8f08sj8KWB2NPw_dNFGgdaeUvUb38U` });
	} static createMap(googleMaps, mapElement) {
		return new googleMaps.Map(mapElement, {
			center: { lat: 36.5748441, lng: 139.2394179 },
			zoom: 14
		});
	}
}


;// CONCATENATED MODULE: ./src/index.js







(function () {
	Template.rendertemplate();
	homePage();
	navbar();
})();

function navbar() {
	const content = document.getElementById('content');
	const homeBtn = document.getElementById('home-button');
	const menuBtn = document.getElementById('menu-button');
	const aboutBtn = document.getElementById('about-button');
	const contactsBtn = document.getElementById('contact-button');
	const mainTemplate = document.getElementById('main-template');

	homeBtn.addEventListener('click', () => {
		content.removeChild(mainTemplate);
		Template.rendertemplate();
		navbar();
		homePage();
	});
	menuBtn.addEventListener('click', () => {
		content.removeChild(mainTemplate);
		Template.rendertemplate();
		navbar();
		menuPage();
	});
	aboutBtn.addEventListener('click', () => {
		content.removeChild(mainTemplate);
		Template.rendertemplate();
		navbar();
		aboutPage();
	});
	contactsBtn.addEventListener('click', () => {
		content.removeChild(mainTemplate);
		Template.rendertemplate();
		contactsPage();
		let mapElement = document.getElementById('map');

		Map.loadGoogleMapsApi().then(function (googleMaps) {
			Map.createMap(googleMaps, mapElement);
		});
		navbar();
	});
}
})();

/******/ })()
;