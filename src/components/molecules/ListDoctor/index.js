import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyDoctor3} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ListDoctor = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor3} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Nairobi Putri Hayza</Text>
        <Text style={styles.desc}>Oh tentu saja tidak karena jeruk it...</Text>
      </View>
    </View>
  );
};

export default ListDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    alignItems: 'center',
  },
  avatar: {width: 46, height: 46, borderRadius: 46 / 2, marginRight: 12},
  name: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: colors.text.primary,
  },
  desc: {
    fontFamily: fonts.primary[300],
    fontSize: 12,
    color: colors.text.secondary,
  },
});
