import React from 'react'
import { connect } from 'react-redux'

import { AddItemBasket, RemoveItemBasket } from '../../store/app'

const Cart = ({basketItems}) => {
    return (
        <div>
            {basketItems.length > 0 && basketItems.map((basketItem) => (<span>{basketItems.name}</span>))}
        </div>
    )
}

export default connect(
  state => ({
    basketItems: state.app.basketItems,
  }),
  null
)(Cart)
