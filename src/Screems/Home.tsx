import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import styles from "./Styles";
import { BatLogo } from "../components/BatLogo/BatLogo";
import { BatTextInput } from "../components/BatTextInput/BatTextInput";
import { BatButton } from "../components/BatButton/BatButton";

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.batLogoContainer}>
                <BatLogo />
            </View>
            <View style={styles.batTextInputContainer}>
                <BatButton />
            </View>
            <StatusBar style="light" />
        </View>
    );
}