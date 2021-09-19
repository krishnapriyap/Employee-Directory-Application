import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import EmployeeList from './list';
import {saveData} from '../actions/index';
import {useDispatch} from 'react-redux';

export default function HomeScreen({navigation}) {
  
  const url = 'http://www.mocky.io/v2/5d565297300000680030a986';
  const dispatch = useDispatch();

  const fetchData = () => {
    fetch(url, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => {
        dispatch(saveData(json));
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Button
        style={{borderRadius: 6}}
        title="Fetch Data"
        color="#484848"
        onPress={() => {
          fetchData();
        }}
      />
      <EmployeeList navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  textCenter: {
    textAlign: 'center',
  },
});
