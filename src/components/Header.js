import './Header.css';
const Header = (props) => {
    // Pour récupéré les propriétés qui viennent avec l'appel au composant, le paramètre props est à renseigner comme paramètre de la fonction du composant
    return (
        <header>
            <h1>{props.titre}</h1>
        </header>
    )
}

export default Header;