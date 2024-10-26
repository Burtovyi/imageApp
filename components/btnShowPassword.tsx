import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { globalColors } from '../styles/global';
import { StyleSheet } from 'react-native';

const showPassword = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Text style={stylesBTN.showPassword}>Показати</Text>
    </TouchableOpacity>
  );
};

const stylesBTN = StyleSheet.create({
  showPassword: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 18,
    color: globalColors.secondary,
  },
});

export default showPassword;
