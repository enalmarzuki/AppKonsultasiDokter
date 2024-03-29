import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {DummyDoctor1} from '../../assets';
import {Header, List} from '../../components';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor={colors.secondary} />
      <Header
        title="Pilih Dokter Anak"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <List
        type="next"
        profile={DummyDoctor1}
        name="Alexander Jannie"
        desc="Wanita"
        onPress={() => navigation.navigate('Chatting')}
      />
      <List
        type="next"
        profile={DummyDoctor1}
        name="Alexander Jannie"
        desc="Wanita"
      />
      <List
        type="next"
        profile={DummyDoctor1}
        name="Alexander Jannie"
        desc="Wanita"
      />
      <List
        type="next"
        profile={DummyDoctor1}
        name="Alexander Jannie"
        desc="Wanita"
      />
      <List
        type="next"
        profile={DummyDoctor1}
        name="Alexander Jannie"
        desc="Wanita"
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
});
