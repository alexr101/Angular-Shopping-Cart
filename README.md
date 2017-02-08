#My Stride Code Test Submission

###Special Instructions

Install all dependencies first with 'npm install'.

Now you can run the project with 'npm run build'. This will run Gulp and Karma to set up everything for you. 

1. Gulp and Browsersync will launch the application in your default web browser. 

2. Karma will run the tests in your terminal console with Phantomjs.

You can also type 'gulp' if you decide to edit the code and see it live.

Everything else is the same. [Click here](#setup) for the default setup.

###Application Structure

Before starting to code I thought about the application requirements, and also considered the blog post on the recommendations
for this test. I went for simple, maintainable and scalable. The project is divided into four main files

1. Assets - Resources like CSS & JS - Any javascript or external libraries like angular will live here. This keeps all these from mixing up with the actual angular application.

2. Components - Angular Components - Dividing the code into components made the most sense for this project. Using folders named "controllers" or "views" would've worked for this small application, however I wanted to keep scalability in mind. In the spec it mentioned I was tasked with building the shopping cart. Meaning there are more modules that will be coming into play.

3. Data - Json data - I just wanted to keep the json data separate from everything else.

4. Shared - Shared Angular Factories or Views - This folder is for components, directives, view, etc that may be shared with different controllers. The modal cart view lives here, because I considered the possibility of another page of the app having a "view cart" button. This way it can be referenced by a templateUrl to this location.

I believe this approach keeps the application modular and scalable while not being broken down into too many small components and subfolders. 

However, if the application became way bigger this structure might not be ideal. Further modularizing the components, or separating them by views. For example a "views/items" folder could contain all the components and views for its REST routes. eg:"item/:id" "item/:id/delete", etc.

###Tests

All of the components are tested, and the tests can be found inside of each component's folder. This makes it way easier to find and work with them on the spot as opposed to looking for the tests file, and trying to find the specific test inside of it.

###The Shopping Cart 

This is the meat and bones of the application. It lives in the "shared/factories" folder, and is shared by different controllers. This keeps the controllers pretty clean and simple.  

I divided the methods inside this class into private and public API methods (Just used comments for that). Here you are able to add, remove, and clear the cart. I divided these tasks into smaller tasks to keep the code functional, and flexible.

###CSS 

All html tags are first normalized using "normalize.css" to create a uniform experience throughout browsers.

I decided also break the sheets down into components. It made it easier to find stylesheets while developing. However this simple structure can make sheets pile up quick, and might make it hard to find them after a while. These can be divided into folders later. For example a folder named "Shopping Cart" for all the stylesheets of this module. "Payment" for payment module sheets etc.

###Thanks!

That's pretty much it, I look forward to the review/critique!



# Stride's web code test

## Instructions

Implement the feature, [described](#prompt) below, using Javascript, HTML and CSS.

Choose one of the following Javascript frameworks: Angular, React or "vanilla" JS. Please avoid any other frameworks (for Javascript or CSS), pre-processors (Babel or another transpiler is okay) or libraries (with the exception of jasmine & karma for testing).

Add tests/specs as needed. This project includes a karma/[jasmine](http://jasmine.github.io/2.3/introduction.html) runner (described in [test](#test) below). Using it is optional, but tests are required.

We have provided a starter setup, which serves `public/` statically. The details are [below](#run). You're free to use it or not (it won't affect your grade either way). We just ask that if you change the way the application runs, you let us know.

Send any questions to [codetest@stridenyc.com](mailto:codetest@stridenyc.com).

## Submission

Please submit your code as a zip file.

If you're not using the supplied [running method](#run), instruct us on how to run your project.

Update README.md with any instructions you have for us, along with any notes you may want to share.

#### Leave your name out

Please do not add your name, github profile or any identifying information to any file. Code tests will be anonymized before grading.

## Grading

This project is designed to test your knowledge of Javascript, HTML and CSS.

Your project will be graded on:
  - Code design and architecture.
  - Code quality metrics such as cleanliness, readability, maintainability, breakdown of responsibilities and simplicity.
  - Test quality and maintainability.
  - Application and demonstrated knowledge of the aforementioned technologies and best practices.

Please give us code you would be proud of.

Your project will not be graded on:
  - Aesthetic design
  - Build setup

This test is not timed, so you will not be graded on how quickly you submit it. Please take your time and focus on the above.

## Tests

You will be graded on the quality of your tests as much as by the quality of your code, so please take the time to add them.

## Prompt

Our client is Sugar Sweet Chocolate Treats (SSCT). SSCT is looking to grow their online presence, and you've been tasked with building their shopping cart.

## Spec

SSCT would like a single-page application.

It should work on mobile and desktop (between 768px wide and 1200px).

It must display their inventory, prices, and have the ability to add chocolates to their cart.

Each item will have the chocolate type, description, price, and an Add to Cart button.

Clicking Add to Cart multiple times will increase the count of that item in the cart.

It will have a button to view cart.

The cart will be a modal overlayed on the inventory page.

The cart should show the user's total.

If the cart is empty, it will show the message "There are no items in your cart".

Each item in the cart should have a remove button and a quantity count.

The cart should have a Clear button. It should clear the users cart, and close the modal.

The cart should have a Close button. It should close the modal, but not clear the cart.


### Mockup

```
Inventory page:

+---------------------------------------------------------------+
|                                                               |
|                   Sugar Sweet Chocolate Treats                |
|                            (header)                           |
+---------------------------------------------------------------+
|        +---------------------------------+      +----------+  |
|        |Chocolate type   Price      Add  |      |View cart |  |
|        |Description               to cart|      |(# items) |  |
|        +---------------------------------+      +----------+  |
|        +---------------------------------+                    |
|        |Chocolate type   Price      Add  |                    |
|        |Description               to cart|                    |
|        +---------------------------------+                    |
|        +---------------------------------+                    |
|        |Chocolate type   Price      Add  |                    |
|        |Description               to cart|                    |
|        +---------------------------------+                    |
|        +---------------------------------+                    |
|        |Chocolate type   Price      Add  |                    |
|        |Description               to cart|                    |
|        +---------------------------------+                    |
|        +---------------------------------+                    |
|        |Chocolate type   Price      Add  |                    |
|        |Description               to cart|                    |
|        +---------------------------------+                    |
|                                                               |
+---------------------------------------------------------------+


Cart:

+---------------------------------------------------------------+
|                                                               |
|                                                               |
|                                                               |
|                                                               |
|                                                               |
|            +-----------------------------------+              |
|            |          Your cart                |              |
|            |                                   |              |
|            |   +----------------------------+  |              |
|            |   |Item     Price  Qty         |  |              |
|            |   |                            |  |              |
|            |   +----------------------------+  |              |
|            |   +----------------------------+  |              |
|            |   |Dark     $1.50   3  Remove  |  |              |
|            |   |                            |  |              |
|            |   +----------------------------+  |              |
|            |                                   |              |
|            |   Total: $X.XX                    |              |
|            |                                   |              |
|            +----------+-----------+            |              |
|            | Clear    |  Close    |            |              |
|            +----------+-----------+------------+              |
|                                                               |
|                                                               |
|                                                               |
|                                                               |
|                                                               |
|                                                               |
|                                                               |
|                                                               |
|                                                               |
+---------------------------------------------------------------+

```

### Inventory data

Inventory, including types of chocolate and prices, are available in `public/data/inventory.json`.


## Setup

1. Install [NodeJS](nodejs.org)
2. Run `npm install`

## Run

We added a default setup, which runs all files in `public/` as static assets.

To run the default setup:

1. Add your work inside `public`. If you're using a compiled language, save it elsewhere and compile it to `public/`.
2. `npm run serve` - Serves the `public/` directory at [localhost:3000](http://localhost:3000).

If you're running the non-default setup, be sure to tell us how to start your project up.

## Test

1. `npm run test` - Runs [Jasmine](http://jasmine.github.io/2.3/introduction.html) units tests in [Karma](https://karma-runner.github.io/0.12), through [PhantomJS](http://phantomjs.org) (This is installed for you by `npm`).
  - Runs every file ending in `-spec.js` inside `test/`
  - If you'd like to configure it, see `karma.config.js`
