import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, ActivityIndicator} from 'react-native';
import DetailsHeader from '../components/DetailsHeader';
import DetailsInfo from '../components/DetailsInfo';
import {fetchDetailsData} from '../redux/actions/DetailsActions';
import {fetchPhotoData} from '../redux/actions/photoDetails';
import {useDispatch, useSelector} from 'react-redux';

const DetailsScreen = ({route}) => {
  const {id} = route.params;
  const dispatch = useDispatch();
  const payload = {
    id: id,
  };
  useEffect(() => {
    dispatch(fetchDetailsData(payload));
    dispatch(fetchPhotoData(payload));
  }, []);

  const user = useSelector(state => state.detailsReducer.user);
  const loading = useSelector(state => state.detailsReducer.loading);
  const singlePhoto = useSelector(state => state.singlePhotoReducer.photo);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator
          style={styles.activityIndicator}
          size={'large'}
          color={'black'}
        />
      ) : (
        <View style={{flex: 1}}>
          <DetailsHeader user={user} singlePhoto={singlePhoto} />
          <DetailsInfo user={user} />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
  },
});

export default DetailsScreen;
