import logo from "../logo/logo.png"
import Styles from "../styles/logo.module.css"

export default function Logo (){

    return (
        <div className={Styles.container}>
            <img src={logo} alt="" />
        </div>
    )
}