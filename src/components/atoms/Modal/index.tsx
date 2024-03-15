import React from "react";

import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Image,
  ModalProps,
  TouchableWithoutFeedback,
} from "react-native";

import { styles } from "./styles";

interface modalProps extends ModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
}

const CustomModal: React.FC<modalProps> = ({
  visible,
  onClose,
  title,
  children,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {title && (
              <View style={styles.containerHeaderModal}>
                <Text style={styles.title}>{title}</Text>

                <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                  <Image source={require("@/assets/images/close.png")} />
                </TouchableOpacity>
              </View>
            )}

            <View style={styles.modalBody}>{children}</View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default CustomModal;
