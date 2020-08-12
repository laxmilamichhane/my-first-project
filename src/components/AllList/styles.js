import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    margin: 4,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 25,
  },
  description: {
    fontSize: 16,
  },
  image: {
    height: 50,
    width: 50,
    marginRight: 4,
    marginTop: 18,
  },
  twotext: {
    flexDirection: 'column',
    paddingRight: 50,
  },
});
export default styles;
