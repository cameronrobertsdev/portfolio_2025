import {Link} from '@tanstack/react-router';

interface NavParameters{
    items: string[]
}

function NavBar({items}:NavParameters){
    return(
        <>
            <nav>
                <ul>
                    {items.map(item => 
                    <li>
                        <Link to={'/' + item.toLowerCase()}>
                            {item}
                        </Link>
                    </li>)}
                </ul>
            </nav>
        </>
    )
}

export default NavBar;