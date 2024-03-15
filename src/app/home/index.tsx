import { useEffect, useState } from "react";
import { Swipeable } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { styles } from "./styles";
import { theme } from "@/src/theme";

//asyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";

//atoms
import Button from "@/src/components/atoms/Button";
import CustomModal from "@/src/components/atoms/Modal";
import Separator from "@/src/components/atoms/Separator";
import ButtonModal from "@/src/components/atoms/ButtonModal";
import Toast from "react-native-toast-message";

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

const Home: React.FC = () => {
  const [nameTask, setNameTask] = useState<string>("");
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [username, setUsername] = useState<string>("");
  const [modalVisible, setModalVisible] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const openModal = (text?: string) => {
    setModalVisible(true);
    setNameTask(text || "");
  };

  const closeModal = () => {
    setModalVisible(false);
    setEditingId(null);
  };

  useEffect(() => {
    getUsername();
  }, []);

  const getUsername = async () => {
    try {
      const savedUsername = await AsyncStorage.getItem("name");
      if (savedUsername !== null) {
        setUsername(savedUsername);
      }
    } catch (error) {
      console.log("Error retrieving username:", error);
    }
  };

  const addTask = () => {
    const trimmedNameTask = typeof nameTask === 'string' ? nameTask.trim() : '';
    if (trimmedNameTask === "") return;
    if (editingId) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === editingId ? { ...todo, text: nameTask } : todo
        )
      );
      setEditingId(null);
      Toast.show({
        type: "success",
        text1: "Tarefa editada com sucesso",
        visibilityTime: 3000,
      });
    } else {
      const newTodo: TodoItem = {
        id: Date.now().toString(),
        text: nameTask,
        completed: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      Toast.show({
        type: "success",
        text1: "Tarefa adicionada com sucesso",
        visibilityTime: 3000,
      });
    }
    setNameTask("");
    closeModal();
  };

  const deleteTask = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    Toast.show({
      type: "success",
      text1: "Tarefa removida com sucesso",
      visibilityTime: 3000,
    });
  };

  const toggleTaskCompletion = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTask = (id: string, text: string) => {
    setEditingId(id);
    openModal(text);
  };

  const renderItem = ({ item }: { item: TodoItem }) => (
    <Swipeable
      renderLeftActions={() => (
          <TouchableOpacity style={styles.leftActionContainer} onPress={() => editTask(item.id, item.text)}>
            <AntDesign name="edit" size={24} color="white" />
          </TouchableOpacity>
      )}
      renderRightActions={() => (
        <TouchableOpacity style={styles.rightActionContainer} onPress={() => deleteTask(item.id)}>
          <AntDesign name="delete" size={24} color="white" />
        </TouchableOpacity>
      )}
    >
      <TouchableOpacity
        style={styles.button}
        onPress={() => toggleTaskCompletion(item.id)}
      >
        <Text
          style={[
            styles.itemText,
            { textDecorationLine: item.completed ? "line-through" : "none" },
          ]}
        >
          {item.text}
        </Text>

        {item.completed ? (
          <Ionicons
            name="checkmark-done"
            size={24}
            color={`${theme.colors.blue}`}
          />
        ) : (
          <Ionicons name="time" size={24} color={`${theme.colors.blue}`} />
        )}
      </TouchableOpacity>
    </Swipeable>
  );

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Bem-vindo,</Text>
        <Text style={styles.name}>{username}</Text>
      </View>

      <Text style={styles.text}>
        Crie sua meta {"\n"}
        <Text style={styles.subText}>
          Se organizar diretinho todo mundo ganha.
        </Text>
      </Text>

      <View style={styles.containerButton}>
        <Button
          onPress={openModal}
          text="Adicione uma tarefa"
          src={require("@/assets/images/add.png")}
          alt="imagem do sinal de mais"
        />
      </View>

      <View style={styles.containerSeparetor}>
        <Text style={styles.textSeparetor}>Tarefas de hoje</Text>
        <Separator />
      </View>

      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
      <CustomModal
        visible={modalVisible}
        onClose={closeModal}
        title="Nova meta"
      >
        <TextInput
          style={styles.input}
          value={nameTask}
          onChangeText={(text) => setNameTask(text)}
          placeholder="Nome da sua nova tarefa"
          placeholderTextColor={"white"}
        />
        <View style={styles.containerButtonModal}>
          <ButtonModal text="Criar Nova Tarefa" onPress={addTask} />
        </View>
      </CustomModal>
    </View>
  );
};

export default Home;
