import './Header.css'
import Logo from '../Logo'
import ItensLista from '../ItensLista'

function Header () {
    return(
        <header className='App-header'>
            <Logo />
            <ItensLista />
        </header>
    )

}
export default Header