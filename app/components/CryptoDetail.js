import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const CryptoDetail = ({ route }) => {
  const { itemId } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{itemId}</Text>
    </View>
  );
};

CryptoDetail.propTypes = {
  itemId: PropTypes.string,
};

export default CryptoDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#efefef',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
