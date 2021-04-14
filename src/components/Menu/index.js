import React, { useContext } from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { MenuItem, MenuWrapper } from './MenuStyles'
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

const Menu = () => {
  const [hasItems, quantity] = useQuantity()

  const MenuOptions = [
    { link: '/shop', name: 'Shop' },
    { link: '/over-ons', name: 'Over ons' },
    { link: '/faq', name: 'FAQ' },
    { link: '/contact', name: 'Contact' },
    {
      link: '/cart',
      name: (
        <Badge badgeContent={quantity} color="primary">
          <IoCartOutline size={30} />
        </Badge>
      ),
    },
  ]

  return (
    <MenuWrapper>
      {MenuOptions &&
        MenuOptions.map((item, index) => {
          return (
            <MenuItem key={index} to={item.link}>
              {item.name}
            </MenuItem>
          )
        })}
    </MenuWrapper>
  )
}

export default Menu
