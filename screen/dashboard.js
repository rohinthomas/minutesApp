import React from 'react';
import { StyleSheet, SafeAreaView, View, Text,StatusBar,TouchableOpacity } from 'react-native';
import Profile from '../components/profileimage';
import {Agenda} from 'react-native-calendars';

const Dashboard = () => {
    return (
        <SafeAreaView style={styles.safeview}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.container}>
                <Text style={styles.name}>Hi Rohin!</Text>
                <Profile />
            </View>
            <View >
              <Agenda
                style={styles.calendarWrapper}
                // selected="2022-12-01"
                // items={{
                //   '2022-12-01': [{name: 'Cycling'}, {name: 'Walking'}, {name: 'Running'}],
                //   '2022-12-02': [{name: 'Writing'}]
                // }}
                // renderItem={(item, isFirst) => (
                //   <TouchableOpacity style={styles.item}>
                //     <Text style={styles.itemText}>{item.name}</Text>
                //   </TouchableOpacity>
                // )}
              />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection:"row"
  },
  name:{
    fontSize:25,
    paddingTop:20,
    paddingBottom:40,
    fontWeight:'bold'
  },
  calendarWrapper:{
    marginTop:60,
    padding:180,
    paddingBottom:450,
    backgroundColor:'yellow',
  },
  safeview:{
    backgroundColor:'blue',
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 50,
    marginRight: 10,
    marginTop: 17,
  },
  itemText: {
    color: '#888',
    fontSize: 16,
  },
  calandarContainer:{
    flex: 1,
    justifyContent: 'center',
  }
});

export default Dashboard;

