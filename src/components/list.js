/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
//import { insertCustomerDummyData } from 'services/report/report-db/services/test-services';
import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {getEmployeeList} from '../reducer/index';
import styles from './styles';

function EmployeeList({navigation}) {
  const data = useSelector(getEmployeeList);
  const [empList, setEmpList] = useState(data);
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    if (data) setEmpList(data);
  }, [data]);

  const onSearch = text => {
    setSearchString(text);
    let list = JSON.parse(JSON.stringify(data));
    if (text) {
      list = list.filter(
        item =>
          item.name.toLowerCase().includes(text.toLowerCase()) ||
          item.email.toLowerCase().includes(text.toLowerCase()),
      );
    }
    if (!text) {
      list = JSON.parse(JSON.stringify(data));
    }
    setEmpList([...list]);
  };

  return (
    <View>
      <View style={styles.searchContainer}>
        <TextInput
          onChangeText={text => onSearch(text)}
          placeholder={'Search'}
          value={searchString}
          style={styles.search}
        />
      </View>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={empList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Details', {selectedEmployee: item})
            }
            style={styles.itemContainer}>
            <Image source={{uri: item.profile_image}} style={styles.icon} />
            <View>
              <Text style={[styles.item, {fontWeight: '500'}]}>
                {item.name}
              </Text>
              <Text style={styles.item}>{item?.company?.name ?? ''}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default EmployeeList;
