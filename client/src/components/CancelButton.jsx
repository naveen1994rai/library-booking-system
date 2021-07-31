import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
//import "react-awesome-button/dist/themes/theme-amber.css";

function CancelButton(props) {
    return <AwesomeButton type={props.type} ripple href={props.href}>{props.tag}</AwesomeButton>;
}

export default CancelButton;