import { TextInput, TextInputProps } from "react-native";

import { styles } from "./styles"

interface inputProps extends TextInputProps {
    placeholder: string;
    placeholderTextColor: string;
}

const Input: React.FC<inputProps> = ({ placeholder, placeholderTextColor, ...res }) => {
    return(
        <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor={placeholderTextColor} {...res} />
    )
}

export default Input;