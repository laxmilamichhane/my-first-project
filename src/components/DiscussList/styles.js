import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#f7dee4',
    padding: 8,
    borderLeftWidth: 14,
    borderLeftColor: '#8ae8f7',
    borderRadius:12,
    margin:10,

  },
  text: {
    fontSize: 26,
    color: 'black',
  },
  time: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 4,
  },
  image: {
    width: 40,
    height: 48,
    marginHorizontal: 4,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  sign: {
    fontSize: 26,
    flex: 1
  },

});
export default styles;