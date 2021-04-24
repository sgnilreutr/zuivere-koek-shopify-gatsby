import React, { useContext } from 'react'
import { MenuItem } from '../Menu/MenuStyles'
import { IoCartOutline } from 'react-icons/io5'
import Badge from '@material-ui/core/Badge'
import StoreContext from '~/context/StoreContext'
import reduce from 'lodash/reduce'

const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

const CART_URL = '/cart'

const MenuCart = () => {
  const [hasItems, quantity] = useQuantity()

  return (
    <MenuItem to={CART_URL}>
      <Badge badgeContent={quantity} color="primary">
        <IoCartOutline size={30} />
      </Badge>
    </MenuItem>
  )
}

export default MenuCart
