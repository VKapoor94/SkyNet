import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableHighlight,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ContactList = ({name,id, phoneno}) => {
  const navigation=useNavigation();
  const goToDetailsScreen=(id)=>{
    navigation.navigate('Details',{id:id})
  }
 return( <View>
    <TouchableOpacity onPress={()=>goToDetailsScreen(id)} style={styles.innerContainer}>
      <TouchableHighlight
        style={[
          styles.profileImgContainer,
          {borderColor: 'green', borderWidth: 1},
        ]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1537107041341-713aaa2a234c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
          }}
          style={styles.profileImg}
        />
      </TouchableHighlight>
      <Text style={styles.name}>
        {name}
        {'\n'}
        <View>
          <Text style={styles.phone}>{phoneno}</Text>
        </View>
      </Text>
      <View style={styles.arrow}>
        <Icon name="greater-than" size={20} color="#A9A9A9" />
      </View>
    </TouchableOpacity>
  </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#ffffff',
  },
  innerContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    flexDirection: 'row',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    width: '72%',
    marginLeft: 10,
    marginTop: 3,
  },
  arrow: {
    marginRight: 15,
    marginTop: 6,
  },
  phoneContainer: {
    marginLeft: 15,
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

export default ContactList;
