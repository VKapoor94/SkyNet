import React, {useEffect} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchContactData} from '../redux/actions/contactActions';
import {fetchPhotoData} from '../redux/actions/photoActions';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.contactReducer.user);
  const photos = useSelector(state => state.photosReducer.photos);
  const loading = useSelector(state => state.contactReducer.loading);
  const navigation = useNavigation();
  const goToDetailsScreen = id => {
    navigation.navigate('Details', {id: id});
  };

  useEffect(() => {
    dispatch(fetchContactData({}));
    dispatch(fetchPhotoData({}));
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator
          style={styles.activityIndicator}
          size={'large'}
          color={'black'}
        />
      ) : (
        <ScrollView style={styles.scrollView}>
          <View>
            {photos.map(photo => {
              const {id} = photo;
              return (
                <View style={{flexDirection: 'row', padding: 10}} key={id}>
                  <TouchableHighlight
                    onPress={() => goToDetailsScreen(id)}
                    style={[
                      styles.profileImgContainer,
                      {borderColor: 'green', borderWidth: 1},
                    ]}>
                    <Image
                      source={{
                        uri: photo.url,
                      }}
                      style={styles.profileImg}
                    />
                  </TouchableHighlight>
                  {users.map(user => {
                    if (user.id === id) {
                      return (
                        <View key={id} style={{flexDirection: 'row'}}>
                          <TouchableOpacity
                            onPress={() => goToDetailsScreen(id)}
                            key={user.borderWidth}>
                            <Text style={styles.name}>
                              {user.name}
                              {'\n'}
                              <View>
                                <Text style={styles.phone}>{user.phone}</Text>
                              </View>
                            </Text>
                          </TouchableOpacity>
                        </View>
                      );
                    } else {
                      return null;
                    }
                  })}
                </View>
              );
            })}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    marginHorizontal: 10,
    width: '95%',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 15,
    flexDirection: 'column',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
    marginLeft: 10,
    marginTop: 3,
  },
  arrow: {
    marginLeft: 15,
    marginTop: 6,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  phoneContainer: {
    marginLeft: 15,
    width: '100%',
  },
  phone: {
    fontSize: 14,
    fontWeight: 'normal',
    width: '92%',
    marginTop: 2,
  },
  profileImgContainer: {
    marginLeft: 4,
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  profileImg: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});

export default HomeScreen;
