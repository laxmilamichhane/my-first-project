import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 4,
    marginBottom: 8,
  },
  buy: {
    fontSize: 24,
    marginHorizontal: 80,
  },
  sell: {
    color: 'blue',
    fontSize: 24,
    marginRight: 58,
  },
  image: {
    width: 26,
    height: 26,
  },
  item: {
    flexDirection: 'row',
    paddingTop: 30,
  },
  images: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginHorizontal: 38,
  },
});
export default styles;
