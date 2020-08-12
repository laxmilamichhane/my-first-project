import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 300,
    flex: 1,
  },
  container: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    flex: 1,
    backgroundColor: 'white',
    marginTop: 270,
    padding: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 16,
  },
  star: { height: 40, width: 100, marginTop: 20 },
  info: {
    letterSpacing: 2,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  way: {
    color: 'gray',
    letterSpacing: 1,
  },
  set: {
    width: 1,
    height: 1,
  },
});
export default styles;
