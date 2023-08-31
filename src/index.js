import { Template } from './modules/template-page.js';
import { homePage } from './modules/home.js';
import { menuPage } from './modules/menu.js';
import { aboutPage } from './modules/about.js';
import { contactsPage } from './modules/contacts.js';
import { Map } from './map.js';

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