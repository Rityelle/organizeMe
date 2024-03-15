import { theme } from "@/src/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    modalContent: {
        backgroundColor: theme.colors.blue_cyan_s_27,
        padding: 20,
        borderRadius: 10,
        width: '100%',
    },

    containerHeaderModal: {
        flexDirection:'row',
        justifyContent:'space-between',
    },
    title: {
        fontSize: theme.fonts.size.heading.lg,
        fontFamily: theme.fonts.family.medium,
        color: theme.colors.white
    },
    content: {
        fontSize: theme.fonts.size.body.sm,
        marginBottom: 20,
        color: theme.colors.white
    },
    closeButton: {
       width: 24,
       height: 29
    },
    closeButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },

    modalBody: {
        padding: 20,
    },
});
