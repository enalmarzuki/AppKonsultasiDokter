import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Input = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 12,
  },
  label: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
  },
});
