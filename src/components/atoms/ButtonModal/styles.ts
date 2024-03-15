import { theme } from "@/src/theme";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";


export const styles = StyleSheet.create({
    button: {
        width:'100%',
        height: 48,
        backgroundColor: theme.colors.blue,
        borderRadius: 15,
        alignItems:"center",
        justifyContent:'center',
        flexDirection:'row', 
        gap: 5
    },

    image: {
        width: 10,
        height: 10
    },

    textButton: {
        fontSize: theme.fonts.size.body.sm,
        fontFamily: theme.fonts.family.bold,
        color: theme.colors.white
    }

    
})