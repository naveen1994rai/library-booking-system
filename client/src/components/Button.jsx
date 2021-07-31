import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "react-awesome-button/dist/themes/theme-eric.css";

function Button(props) {
    return <AwesomeButton type={props.type} ripple onPress={props.onPress} href={props.href}>{props.tag}</AwesomeButton>;
}

export default Button;