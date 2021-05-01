const path = require( 'path' );
const createFrontPage = require('./src/create-pages/front-page');
const createShopPage = require( './src/create-pages/shop' );
const createSingleProductPage = require( './src/create-pages/single-product' );
const createCartPage = require( './src/create-pages/cart' );
const createPages = require( './src/create-pages/pages' );
// const createTermsPage = require( './src/create-pages/terms' );
// const createPosts = require( './create-pages/posts' );

// Create all pages.
exports.createPages = async ( { actions, graphql } ) => {
	await createFrontPage({ actions, graphql });
	await createShopPage( { actions, graphql } );
	await createSingleProductPage( { actions, graphql } );
	await createCartPage( { actions, graphql } );
	await createPages( { actions, graphql } );
	// await createTermsPage( { actions, graphql } );
	// await createPosts( { actions, graphql } );
	};