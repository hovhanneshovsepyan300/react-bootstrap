import React from 'react'

const menu = [
    'users',
    'speakers',
    'global lists',
    'company lists',
    'income goals',
    'reports',
    'sales search',
    'templates',
    'action lists'
]

const SideBar = ({active}) => {

    const menuMap = menu.map(e => <li key={e}><a href={`/${e}`}>{e}</a></li>)

    return(
        <nav className={`sidebar ${active?'active':''}`}>
        
                <ul className="list-unstyled components">
                    {menuMap}
                    
                </ul>
        
            </nav>

    )
}

export default SideBar