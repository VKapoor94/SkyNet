import React, {useCallback} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Alert, Linking} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  deleteUserFromStore,
  deletePhotoFromStore,
} from '../redux/actions/DeleteFromStoreActions';
const DetailsInfo = ({user}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const lat =
    user && user.address && user.address.geo ? user.address.geo.lat : '';
  const lon =
    user && user.address && user.address.geo ? user.address.geo.lng : '';
  const openUrl = useCallback(async () => {
    const supported = await Linking.canOpenURL('http://' + user.website);

    if (supported) {
      await Linking.openURL('http://' + user.website);
    } else {
      Alert.alert(`Don't know how to open this URL: ${user.website}`);
    }
  }, [user.website]);

  const deleteContact = async () => {
    const payload = {
      id: user.id,
    };
    await dispatch(deleteUserFromStore(payload));
    await dispatch(deletePhotoFromStore(payload));
    ToastAndroid.show('Deleted Successfully', ToastAndroid.LONG);
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <View style={styles.SquareShapeView}>
        <View style={styles.outerContainer}>
          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:${user.phone}`)}
            style={styles.innerContainer}>
            <FontAwesome size={24} name="phone" />
            <Text numberOfLines={1} style={styles.text}>
              {user.phone}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('mailto:' + user.email)}
            style={styles.innerContainer}>
            <MaterialCommunityIcons size={24} name="email" />
            <Text numberOfLines={1} style={styles.text}>
              {user.email}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('google.navigation:q=' + lat + '+' + lon)
            }
            style={styles.innerContainer}>
            <MaterialCommunityIcons size={24} name="home-analytics" />
            <Text numberOfLines={2} style={styles.text}>
              {user && user.address && user.address.street
                ? user.address.street
                : ''}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={openUrl} style={styles.innerContainer}>
            <FontAwesome5 size={24} name="globe" />
            <Text numberOfLines={1} style={styles.text}>
              {user.website}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Button
        style={{borderRadius: 15}}
        title="Delete Contact"
        color="red"
        onPress={deleteContact}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },

  SquareShapeView: {
    width: 250,
    height: 250,
    backgroundColor: '#ffffff',
    borderColor: '#808080',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 20,
  },
  innerContainer: {
    flexDirection: 'row',
    padding: 7,
    margin: 7,
    width: '100%',
  },
  outerContainer: {
    marginLeft: 10,
    marginTop: 15,
    marginRight: 5,
  },
  text: {
    marginLeft: 15,
    marginTop: 3,
    marginRight: 25,
  },
});

export default DetailsInfo;
