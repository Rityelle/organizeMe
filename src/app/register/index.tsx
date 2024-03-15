import { useState } from "react";
import { Image, KeyboardAvoidingView, Platform, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

//styels
import { styles } from "./styles";

//atoms
import Input from "@/src/components/atoms/Input";
import Button from "@/src/components/atoms/Button";
import Toast from "react-native-toast-message";

const Register: React.FC<any> = ({ navigation }) => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSaveInfoUser = async () => {
    if (name.trim() === "" || password.trim() === "") {
      Toast.show({
        type: 'error',
        text1: 'Campos obrigatórios',
        text2: 'Por favor, preencha todos os campos.',
        visibilityTime: 5000,
      });
    } else {
      try {
        await AsyncStorage.setItem("name", name);
        await AsyncStorage.setItem("password", password);
        navigation.navigate("Home");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Image
        source={require("@/assets/images/logo.png")}
        style={styles.image}
      />

      <View style={styles.containerInputButton}>
        <Input
          placeholder="Digite seu nome"
          placeholderTextColor="#fff"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Digite sua senha"
          placeholderTextColor="#fff"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <Button onPress={handleSaveInfoUser} text="Acessar" />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;
