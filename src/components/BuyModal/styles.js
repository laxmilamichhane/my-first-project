import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    marginTop: 280,
    padding: 24,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingHorizontal: 14,
    width: 360,
  },
  image: {
    height: 140,
    width: 140,
    alignSelf: 'center',
  },
  title: {
    fontSize: 26,
    marginTop: 30,
    textAlign: 'center',
  },
  des: {
    color: 'gray',
    fontSize: 18,
    marginTop: 8,
    textAlign: 'center',
  },
  login: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginVertical: -14,
  },
  buttonbox: {
    backgroundColor: '#ffaa00',
    borderRadius: 30,
    padding: 20,
    marginHorizontal: 50,
    marginTop: 60,
    textAlign: 'center',
  },
  icon: {
    height: 20,
    width: 20,
    alignSelf: 'flex-end',
    padding: 10,
  },
});
export default styles;
