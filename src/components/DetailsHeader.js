import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const DetailsHeader = ({user, singlePhoto}) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.profileImgContainer,
          {borderColor: 'green', borderWidth: 1},
        ]}>
        <Image
          source={{
            uri: singlePhoto.url,
          }}
          style={styles.profileImg}
        />
      </View>
      <View style={styles.container}>
        <Text numberOfLines={1} style={styles.name}>
          {user.name}
        </Text>
        <Text style={styles.userName}>{user.username}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImgContainer: {
    height: 160,
    width: 160,
    borderRadius: 80,
    marginTop: 20,
  },
  profileImg: {
    height: 160,
    width: 160,
    borderRadius: 80,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    marginLeft: 40,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: 3,
    marginTop: 5,
    color: '#808080',
  },
});

export default DetailsHeader;
