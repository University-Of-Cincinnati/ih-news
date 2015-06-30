# Top News (Material Design)

Top news pagelet for PeopleSoft Interaction Pub (Portal)

## Features

* Material Design style news cards
* Leverages delivered News Publication Pagelet
* Built with React (http://facebook.github.io/react/) and Essence (http://essence.pearlhq.com/)

## Location Installation

* Install node.js or io.js
* From project folder run `npm install`

## Interaction Hub Installation

* Essence CSS and fonts must be copied to a web accessible host
* Using Branding Work Center add the following CSS and script references:

```html
<link rel="stylesheet" href="[path to host]/icons.css" >
<link rel="stylesheet" href="[path to host]/essence.css" >
```

* Using Pagelet Wizard, create a pagelet of type news publication.
* Apply custom XSL from project folder (transform.xml)

## Viewing Local Example

* From project folder run `webpack; npm run start`
