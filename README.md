Thinh The Diep

Assignment 1 – Static Website

COSC 2430 – Web Programming

Prof. Thanh Nguyen Ngoc

2-11-2019

-----------------------------------------------------------------

	A. Introduction
For assignment 1 of this class, I have built Autochess Advisor, a fully responsive website containing useful information about a popular mobile game, Autochess Mobile. Players of the game would find much useful information about the game, important news and how to improve their skills, since the nature of the game is complex. The website is built with HTML5, CSS and Bootstrap 4, with additional functionalities thanks to JavaScript and jQuery.

-----------------------------------------------------------------

	B. Structure and details
The website contains 8 pages plus 1 CSS document and 1 JavaScript document. Below I will provide details on each of the page and its features, in the order that I have built them.

		1. index.html
This is the homepage of the website and serve as the main navigation page of the whole website.
In every page, there is a banner at the top of the website (using BS4 jumbotron) that the user can click on to go back to the homepage. If it is the first time a user has opened a website, there will be a blue “Personalize” button, which will be explained later.

The navbar is located below the banner. It contains links to different section of the website. It sticks to the top of the website if they scroll past it. It is built using the BS4 navbar class.

Scroll down and user can see a news carousel with images. User can click on each of the image to be taken to different pages.
Below, there will be different sections that contains link buttons that would take the user to different, important topics of the game. At the moment, it will actually take them to a “empty landing” page that will display a message that says that the page they are trying to reach is not yet built (same for the links in the navbar). The reason is that this empty page acts as a placeholder until further development is made.

Lastly, there is a Comments section link button that will take users to a Feedback page.

The website’s font is styled with Google Web Fonts: “Nunito:light”.

		2.championship-news.html
This page is built next and serve as the second static page. It contains information about a recent championship that has been concluded.


		3.grimtouch-news.html
This page is the third static page. It contains useful information of additions that are being made to the game. There is a link that takes the user to a page about the time of the update (update-news.html). The main difficulty about this page is playing around with d-flex and grid to make the page looks nice and be responsive.

		4.update-news.html
This page is the fourth static page. It contains information on when an update is coming to the game and what’s new in the game. In each of the section, I use BS4 list-group to make each new information a list-item, helping them look nice and be responsive. User can click on the first 2 items to go the grimtouch-news.html. Clicking on the “Temporarily Removed Pieces” items take user to the empty-page.html (there is supposed to be individual page for each of these items).


		5.empty-page.html
This is the page user will be taken to if they click on a link leading to a page that not yet exists, acting as a placeholder until the page is built. It displays a apology message explaining to the user what’s happening and there is a button that would take the user back to the homepage.


		6.comments.html
This page contains a form that let user send a message to the page owners. Each field in the form needs to be filled out with appropriate values. The form is validated using a short jQuery script. When the user clicks on the Submit button, they will be sent to a page that display a message that says message have been received. In reality, they will only be sent to this page to simulate what a user will see in a real website and no actual data is recorded from their forms.


		7.comments-success.html
This page displays a message that let user know that their message/feedback has been received. There is a button that take them back to the homepage.


		8.username.html
In the website’s localStorage object, there exists two pairs with key “display-name” and “gender”. When these keys do not exist in the localStorage (when a user opens the page for the first time, for example), the banner on top of the page displays a message and a button that when clicked would take them to this page. In this page, there are input field for user to choose a display name and their gender. Clicking the submit button will store what the user has input to the website localStorage object and take the user back to the homepage. There is validation in the form. When the pairs with keys “display-name” and “gender” exist in the localStorage, the banner will display a personalized message. There will be a button to change these values, if the user so choose. Clicking that button will remove the values (and the pairs key-value) in the localStorage and take the user back to this page. The display is accomplished using JavaScript and jQuery (functions defined in the .js file). 

This feature is similar to the way website displays username. However, user credentials are almost never stored in localStorage, but instead pushed to server-side. We have not yet learned about server-side of web programming, so I design this feature to only mirror the display aspect. This feature satisfies the assignment’s advanced HTML5 features requirement.

-----------------------------------------------------------------

	C. Technologies
Here’s a list of technologies that I have learned to use in my website:

HTML

	localStorage
	
	Google Web Fonts

CSS

	Bootstrap 4
	D-flex
	Form
	Icon
	Navbar
	Img
	Grid
	List Group

JavaScript

jQuery

etc.

-----------------------------------------------------------------

	D.Future Plans
If I continue this project, there are a few things I would like to work on:

1. Make all the other missing pages for the other information


2. Better styling for the website


3. In the update-news.html, there is a part where the page informs the user when the update is happening. I would like to make so that the website can extract the user’s time zone and automatically display the predefined time in the user’s local time. This was my original plan for the assignment’s advanced HTML5 features (I plan to use Geolocation to get user’s location, therefore their time zone). I find out that time zone is not one of the returned data in the Geolocation object, so I abandon this approach. Instead I could get the user’s time zone with a window.date object and manipulate the displayed information. I would like to further explore this function.

