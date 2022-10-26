import styles from "./styles";
import {TouchableOpacity} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function FloatingButton(props){
    const {action} = props;
    return (
        <TouchableOpacity
            style={styles.content}
            onPress={action}
        >
            <Ionicons name={"add"} color={"#000000"} size={30} />
        </TouchableOpacity>
    )
}