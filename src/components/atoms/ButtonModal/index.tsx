import { Pressable, Text, PressableProps, Image, ImageProps } from "react-native";
import { styles } from "./styles";

interface buttonProps extends PressableProps{
    onPress: () => void;
    text: string;
    src?: ImageProps;
    alt?: string;
}

const ButtonModal: React.FC<buttonProps> = ({ onPress, text, src, alt,  ...rest  }) => {
    return(
        <Pressable onPress={onPress} style={styles.button} {...rest}>
            {src && <Image source={src} alt={alt} style={ styles.image } />}
            <Text style={ styles.textButton }>{text}</Text>
        </Pressable>
    )
}

export default ButtonModal;