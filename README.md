# amazonas/product-summary

An Amazon inspired product summary component for displaying essential product information such as name, company, price, and rating. The component is  equipped to show multiple image views with hover-over zoom capability, as well as flexibily render buying options with varying styles of user input. 

## About the Project

This repository contains the sourcecode for a single component of an Amazon inspired product details page; built with a microservice architecture. The component is designed as a full stack service and includes an in-store memeory database, along with a web server which serves a client application and a restful api.

For this project, a team of developers each contributed individual components which were combined into a full listing page. To view the complete listing application, check out the related listing page repo.

### Features
 
 - Dynamically renders a variety of Buying Options based on the type of product
 - Hovering over image selectors dynamically swaps the main image
 - Zoom modal appears upon hovering over main image
 - Ratings modal appears when hovering over stars

![](https://github.com/team-arendelle/product-summary/blob/master/product-summary.gif)

# Technical Information

## Usage

### Install Dependencies

npm install

### Build Bundle

npm run build-prod

### Run Server Locally

node ./server/index.js

## Requirements

- Node v10.15.0
- npm
- JS ES6
- Webpack
- Webpack-dev-server
- React
- Sass
- SQLite

## Related Projects

- https://github.com/team-arendelle/vinnyA3-add-to-cart
- https://github.com/team-arendelle/RossHathaway-reviews

