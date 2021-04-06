import React from "react";
import { isEmpty } from "lodash";

import { formatPrice, sanitize } from '../../utils/index'
import { GatsbyImage } from 'gatsby-plugin-image'
import parse from 'html-react-parser'
import { IoCartOutline } from 'react-icons/io5'

const ProductDetail = ( props ) => {
	const { product } = props;

	console.log(product)
	
	const productImage = {
		img: product.node.product.localFiles[0].childImageSharp.gatsbyImageData || ``,
		// alt: product.node.image.altText || ``,
	}

	const displayProductImages = () => {
        if (!isEmpty(product.node.product.localFiles)) {
			return (
				<figure>
					<GatsbyImage
						image={productImage.img}
						// alt={productImage.alt}
					/>
				</figure>
			)
		} else {
			return null;
		}
	}

	return (
		// @TODO Need to handle Group products differently.
		!isEmpty( product ) ? (
			<div className="single-product-page container py-5">
				<div className="row">
					<div className="col-lg-5 col-md-6 mb-5 product-image-wrap">
						<div className="product-image">
							{ displayProductImages() }
						</div>
					</div>
					<div className="col-lg-7 col-md-6 mb-5">
						<div className="single-product-desc">
							<h3>{ product.node.product.name ? product.node.product.name : "" }</h3>
							{ !isEmpty( product.node.product.description ) ? (
								// <p dangerouslySetInnerHTML={ { __html: sanitize( product.node.product.description ) } }/>
								<p>{parse(product.node.product.description)}</p>
							) : null }
                            <div className="single-product-add-to-cart">
								<h6 className="card-subtitle mb-3">{formatPrice(product.node.unit_amount, product.node.currency)}</h6>
								<button><IoCartOutline /></button>
							</div>
						</div>
					</div>
				</div>
			</div>
		) : null
	);
};

export default ProductDetail;
