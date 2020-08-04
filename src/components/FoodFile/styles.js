import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: 370,
    padding: 8,
    backgroundColor: 'red',
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
  },
  title: {
    fontSize: 22,
    color: 'white',
  },
  time: {
    fontSize: 16,
    color: 'gray',
    marginTop: 4,

  },
  image: {
    height: 40,
    width: 40,
    marginTop: 18,

  },
  twotext: {
    padding: 10,
    flexDirection: 'column',
  }
});
export default styles;