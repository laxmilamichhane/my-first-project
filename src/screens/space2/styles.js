import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 270,
    margin: 16,
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: '#ededed',
    flex: 1,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    marginTop: 20,
    padding: 20,
  },
  progress: { fontSize: 20, color: 'grey', marginTop: 24 },
  dots: {
    fontSize: 40,
    color: 'gray',
    marginLeft: 168,
  },
});
export default styles;
