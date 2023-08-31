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

export { menuPage };