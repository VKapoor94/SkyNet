import React, {useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import ContactList from '../components/ContactList';
import {useDispatch, useSelector} from 'react-redux';
import {fetchContactData} from '../redux/actions/contactActions';
import {fetchPhotoData} from '../redux/actions/photoActions';
const HomeScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.contactReducer.user);
  const photos = useSelector(state => state.photosReducer.photos);
  const loading = useSelector(state => state.contactReducer.loading);
  //  Array.prototype.push.apply(user, photos);
  useEffect(() => {
    dispatch(fetchContactData({}));
    dispatch(fetchPhotoData({}));
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <ContactList
        photos={photos}
        id={item.id}
        name={item.name}
        phoneno={item.phone}
        url={item.url}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator
          style={styles.activityIndicator}
          size={'large'}
          color={'black'}
        />
      ) : (
        <FlatList
          data={user}
          extraData={photos}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
