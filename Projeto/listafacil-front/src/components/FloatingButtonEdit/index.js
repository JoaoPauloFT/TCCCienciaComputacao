import styles from "./styles";
import {TouchableOpacity} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function FloatingButtonEdit(props){
    const {action} = props;
    return (
        <TouchableOpacity
            style={styles.content}
            onPress={action}
        >
            <MaterialCommunityIcons name={"file-document-edit-outline"} color={"#ffffff"} size={30} />
        </TouchableOpacity>
    )
}