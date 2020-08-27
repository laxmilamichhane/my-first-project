import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'black',
    padding: 4,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 1.8,
    textAlign: 'center',
    marginHorizontal: 26,
    marginTop: 30,
  },
  uppercontainer: {
    backgroundColor: 'white',
    paddingVertical: 50,
    borderBottomRightRadius: 14,
    borderTopRightRadius: 300,
    marginBottom: 20,
    paddingHorizontal: 12,
  },
  box: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginVertical: 6,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  gift: {
    color: 'black',
    padding: 4,
    fontSize: 12,
  },
});
export default styles;
