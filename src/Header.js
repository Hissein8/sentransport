import './Header.css'
import DateActuelle from './Date'
function Header () {
    return (
        <header className='header'>
            <h1 className='header-titre'>SenTransport</h1>
            <p className='header-soustitre'>Votre guide du transport en commun a Dakar</p>
            <p className='header-oustitre'> <DateActuelle /> </p>
        </header>
    );

}

export default Header