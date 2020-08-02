import { StyleSheet } from 'react-native';
import { gray } from 'ansi-colors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10

  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 12,
    marginTop: 80,
    marginLeft: 2,
  },
  uppercontainer: {

    padding: 12,
  },
  icon: {
    height: 20,
    width: 20,
    marginLeft: 8,
    marginTop: 10,
  },
  codse: {
    height: 130,
    width: 200,
    resizeMode: "contain",
    alignSelf: 'flex-end',
  },
  name: {
    fontSize: 26,
    marginLeft: 6,
  },
  des: {
    fontSize: 18,
    marginLeft: 14,
    color: 'gray',
  }
});
export default styles;