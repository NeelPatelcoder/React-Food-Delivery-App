import React,{useState} from 'react'
import Menu from './MenuCard'
import Itmes from './items'
import '../App.css'


const Resturent = () => {
    const [menudata, setMenudata] = useState(Menu)

    console.log(menudata)
    return (
        <>
            <nav className='navbar'>
                <div className='btn-group'>
                    <button className='btn-group__item'>BreakFast</button>
                    <button className='btn-group__item'>Lunch</button>
                    <button className='btn-group__item'>Dinner</button>
                    <button className='btn-group__item'>All</button>
                </div>
            </nav>



        <Itmes menuData={menudata}/>

        </>
    )
}

export default Resturent
