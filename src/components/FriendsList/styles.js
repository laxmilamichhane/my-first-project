import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginHorizontal: 12,
    marginVertical: 6,
    padding: 8,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 22,
    color: 'black',
  },
  description: {
    fontSize: 14,
    color: 'white',
    textAlign: 'left',
    marginHorizontal: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 20,
    marginRight: 10,
  },
});
export default styles;
