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

export { Template };