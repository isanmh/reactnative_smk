import React from 'react';
import {View, Text} from 'react-native';

// props menggunakan functional component
const Alamat = props => {
  return (
    <View>
      <Text>Alamat: {props.alamat} </Text>
      <Text>Job: {props.job} </Text>
    </View>
  );
};

export default Alamat;
