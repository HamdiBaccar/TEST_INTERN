import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React , { useState } from 'react'
import UpComingEventsComp from '../components/upComingEventsComp'
import NearbyActivitiesComp from '../components/nearbyActivitiesComp'
import HeaderHome from '../components/headerHome'

const home = () => {

  return (
    <ScrollView>
      <HeaderHome></HeaderHome>
      <UpComingEventsComp></UpComingEventsComp>
      <View style={styles.spaceStyle}></View>
      <NearbyActivitiesComp></NearbyActivitiesComp>
      <View style={styles.tabZone}></View>
    </ScrollView>
  )
}

export default home

const styles = StyleSheet.create({
  cleanArea : {
    height : 264,
    width : '100%',
    backgroundColor : 'white',
  },
  tabZone : {
    height : 100,
    width : '100%',
    backgroundColor : 'white'
  },
  spaceStyle : {
    backgroundColor : 'white',
    height : 35,
    width : '100%'
  },
})