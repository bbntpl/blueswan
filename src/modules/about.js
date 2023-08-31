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
export { aboutPage };