import "../styles/Searchbar.css"
import Space from '../images/space.jpg'

function Searchbar() {
    return (
        <div>
            <img className='backgroundImage' src={Space} alt=''></img>
            <h1 className = 'searchbarHeading'>The Possibilites <br></br> Are Endless</h1>
            <form className = 'searchbar'>
                <input type = 'text' placeholder="Book your ticket now!"></input>
                <button type = 'submit'>SEARCH</button>
            </form>
        </div>
    )
}

export default Searchbar;