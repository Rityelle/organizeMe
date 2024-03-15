import { theme } from '@/src/theme';
import React from 'react';
import { View, StyleSheet } from 'react-native';

const Separator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: theme.colors.blue_cyan_i_17, 
    marginVertical: 10,
  },
});

export default Separator;
