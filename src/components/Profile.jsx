import ProfileImage from '../assets/avatar-jessica.jpeg'
import Buttons from '../components/Buttons.jsx'

function Profile(){
    return (
        <div className = " profile">
            <img className="imge-el" src={ProfileImage} alt="" />
            <h1 className="title"> Jessica Randall</h1>
            <h4 className="location">London,United Kingdom</h4>
            <p className="description">"Front-and Developer and avid reader"</p>

            <Buttons text={"GitHub"}/>
            <Buttons text={"Fronted Mentor"}/>
            <Buttons text={"Linkedin"}/>
            <Buttons text={"Twitter"}/>
            <Buttons text={"Instagram"}/>

           

        </div>
    )

}

export default Profile