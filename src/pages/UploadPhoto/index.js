import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IconAddPhoto, ILPhotoNull} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import {colors, fonts} from '../../utils';

const UploadPhoto = () => {
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={ILPhotoNull} style={styles.avatar} />
            <IconAddPhoto style={styles.addPhoto} />
          </View>
          <Text style={styles.name}>Shayna Melinda</Text>
          <Text style={styles.profession}>Product Designer</Text>
        </View>

        <View>
          <Button title="Upload and Continue" />
          <Gap height={30} />
          <Link title="Skip for this" align="center" size={16} />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  avatar: {width: 110, height: 110},
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {
    position: 'absolute',
    bottom: 4,
    right: 2,
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 24,
    color: colors.text.primary,
    textAlign: 'center',
  },
  profession: {
    fontFamily: fonts.primary.normal,
    fontSize: 18,
    color: colors.text.secondary,
    textAlign: 'center',
    marginTop: 4,
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 64,
    flex: 1,
    justifyContent: 'space-between',
  },
});
