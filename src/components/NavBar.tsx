interface NavParameters{
    items: string[]
}

function NavBar({items}:NavParameters){
    return(
        <>
            <nav>
                <ul>
                    {items.map(item => <li><button>{item}</button></li>)}
                </ul>
            </nav>
        </>
    )
}

export default NavBar;