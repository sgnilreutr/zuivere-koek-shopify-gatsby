import React from 'react'
import { Link } from "gatsby"
import { useHistory } from 'react-router-dom'
import { IoCartOutline } from 'react-icons/io5'

const Menu = () => {
    const history = useHistory()

    const goToCart = () => {
        history.push(`/cart`)
    }

    console.log(history)

    return (
        <>
            {/* <div onClick={goToCart}><IoCartOutline size={30} style={{color: 'white'}}/></div> */}
            <Link to={"/cart"}><IoCartOutline size={30} style={{color: 'white'}}/></Link>
        </>
    )
}

export default Menu
