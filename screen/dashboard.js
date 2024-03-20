import React, { StrictMode } from 'react';
import { StyleSheet, SafeAreaView, View, Text,StatusBar} from 'react-native';
import Profile from '../components/profileimage';
import {Agenda} from 'react-native-calendars';
import AgendaCalendar from '../components/agendaCalendar';

const Dashboard = () => {
    return (
        <SafeAreaView style={styles.safeview}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.container}>
                <Text style={styles.name}>Hi Rohin!</Text>
                <Profile />
            </View>
            <StrictMode>
            <View style={styles.calendarWrapper}>
              <AgendaCalendar
                style={styles.calendar}
              />
            </View>
            </StrictMode>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection:"row",
  },
  name:{
    fontSize:25,
    paddingTop:20,
    paddingBottom:0,
    fontWeight:'bold',    
  },
  calendarWrapper:{
    flex: 1,
  },
  calendar:{
    backgroundColor:'yellow',
    padding:100
  }
});

export default Dashboard;

