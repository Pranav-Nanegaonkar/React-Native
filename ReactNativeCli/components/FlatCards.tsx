import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>

      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Card 1</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Card 2</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Card 3</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCards;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  container: {},
  card: {
    // height: 150,
    // backgroundColor: 'blue',
    // margin: 10,
    // borderRadius: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    borderRadius: 10,
  },
  cardOne: {
    backgroundColor: 'blue',
  },
  cardTwo: {
    backgroundColor: 'green',
  },
  cardThree: {
    backgroundColor: 'red',
  },
});
