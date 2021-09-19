/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import styles from './styles';

function Details({route}) {
  const EmployeeDetails = (title, subTitle) => {
    return (
      <View style={styles.title}>
        <Text>{title}</Text>
        <Text style={styles.text}>{subTitle}</Text>
      </View>
    );
  };
  return (
    <ScrollView contentContainerStyle={{paddingBottom: 50}}>
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <Image
            source={{uri: route?.params?.selectedEmployee.profile_image}}
            style={styles.profilePic}
          />
          <Text style={styles.heading}>
            {route?.params?.selectedEmployee.name}
          </Text>
        </View>
        <View style={{paddingHorizontal: 24, marginTop: 20}}>
          {EmployeeDetails(
            'Username',
            route?.params?.selectedEmployee.username,
          )}
          {EmployeeDetails('Email', route?.params?.selectedEmployee.email)}
          {EmployeeDetails(
            'Address',
            route?.params?.selectedEmployee?.address?.street +
              '\n' +
              route?.params?.selectedEmployee?.address?.suite +
              '\t\t' +
              route?.params?.selectedEmployee?.address?.city +
              '\n' +
              route?.params?.selectedEmployee?.address?.zipcode,
          )}
          {EmployeeDetails('Phone', route?.params?.selectedEmployee.phone)}
          {EmployeeDetails('Website', route?.params?.selectedEmployee.website)}
          {EmployeeDetails(
            'Company Details',
            route?.params?.selectedEmployee?.company
              ? route?.params?.selectedEmployee?.company?.name ??
                  '' +
                    '\n' +
                    route?.params?.selectedEmployee?.company?.catchPhrase ??
                  '' + '\t\t' + route?.params?.selectedEmployee?.company?.bs ??
                  ''
              : '',
          )}
        </View>
      </View>
    </ScrollView>
  );
}

export default Details;
