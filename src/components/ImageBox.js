import "../styles/ImageBox.css"
import Mars from '../images/mars.jpg'
import Andromeda from '../images/andromeda.jpg'
import Saggitarius from '../images/blackhole.png'
import { Link } from 'react-router-dom'

function ImageBox() {
    return (
        <div>
            <div className='destinationsContainer'>
                <div className='destinationColumns'>
                    <img className='destinationImages' src={Mars} alt=''></img>
                    <div class="layer">
                        <h1>Mars</h1>
                    </div>
                </div>

                <div className='destinationColumns'>
                    <img className='destinationImages' src={Saggitarius} alt=''></img>
                    <div class="layer">
                        <h1>Saggiatrius A*</h1>
                    </div>
                </div>

                <div className='destinationColumns'>
                    <img className='destinationImages' src={Andromeda} alt=''></img>
                    <div class="layer">
                        <h1>Andromeda</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ImageBox;

