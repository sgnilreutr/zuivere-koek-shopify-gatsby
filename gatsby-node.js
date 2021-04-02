const path = require( 'path' );
const createFrontPage = require('./src/create-pages/front-page');
const createShopPage = require( './src/create-pages/shop' );
// const createContactPage = require('./create-pages/contact');
// const createOverPage = require( './create-pages/over' );
// const createPosts = require( './create-pages/posts' );
// const createPages = require( './create-pages/pages' );

// Create all pages.
exports.createPages = async ( { actions, graphql } ) => {
	await createFrontPage({ actions, graphql });
	await createShopPage( { actions, graphql } );
	// await createContactPage({ actions, graphql });
	// await createOverPage( { actions, graphql } );
	// await createPosts( { actions, graphql } );
	// await createPages( { actions, graphql } );
	};

/**
 * Since the node_modules ( packages ) live outside the theme directory, making an alias for them.
 *
 * So Gutenberg styles can be accessed like so `@import "~@wordpress/base-styles/colors"`
 *
 * @param stage
 * @param actions
 */
exports.onCreateWebpackConfig = ({ stage, actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				'~': path.resolve(__dirname, '../../node_modules')
			}
		},
	})
};
