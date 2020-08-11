import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    height: 54,
    width: 54,
    borderRadius: 12,
    alignSelf: 'flex-end',
    marginRight: 6,
  },
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    padding: 8,
  },
  menu: {
    height: 24,
    width: 24,
    marginLeft: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  des: {
    fontSize: 18,
    marginBottom: 10,
    marginLeft: 10,
  },
  search: {
    height: 40,
    width: 360,
    marginRight: 10,
    marginBottom: 10,
  },
  img: {
    width: 24,
    height: 24,
    marginRight: 90,
  },
});
export default styles;
