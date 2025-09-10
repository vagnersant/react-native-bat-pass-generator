import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
        margin: 10,
    },
    button: {
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderRadius: 25,
        backgroundColor: "#4d4d4d",
        margin: 10,
        elevation: 3,
        width: '100%',
    },
    pressedButton: {
        backgroundColor: "#ddd",
    },
    text: {
        color: "#e5bf3c",
        letterSpacing: 0.25,
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    }
});