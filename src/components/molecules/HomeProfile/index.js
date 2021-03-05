import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyUser} from '../../../assets';
import {colors, fonts} from '../../../utils';

const HomeProfile = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyUser} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Shayna Melinda</Text>
        <Text style={styles.profession}>Product Designer</Text>
      </View>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  avatar: {width: 46, height: 46, borderRadius: 46 / 2, marginRight: 12},
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
  },
  profession: {
    fontFamily: fonts.primary[400],
    fontSize: 12,
    color: colors.text.primary,
  },
});
