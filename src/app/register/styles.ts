import { theme } from "@/src/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: theme.colors.blue_cyan_s_6,
        alignItems:'center',
        gap: 5
    },

    image: {
        width: "100%",
        height: 300,
    },

    containerInputButton: {
        flex: 1,
        alignItems:"center",
        width:'100%',
        marginTop: "20%",
        gap: 20
    },
})