import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  screen: {
    padding: 6,
    flex: 1
  },
  container: {
    backgroundColor: '#e3e3ea',
    flexDirection: 'column',
    padding: 30,
    borderRadius: 10,
    marginBottom: 20,

  },
  text: {
    fontSize: 40,
    color: 'black',
    alignSelf: 'center',
    marginLeft: 30,
    fontWeight: 'bold',

  },
  img: {
    width: 120,
    height: 120,
    marginLeft: 10,
  },
  quote: {
    fontSize: 16,
    color: '#000000',
  }
});
export default styles;