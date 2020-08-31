import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  home: {
    width: 28,
    height: 28,
    marginTop: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    alignSelf: 'center',
    marginTop: 8,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginTop: 20,
  },
  nickname: {
    fontSize: 20,
    color: '#FDCA40',
    textAlign: 'center',
    marginTop: 6,
  },
  address: {
    color: 'grey',
    textAlign: 'center',
    marginBottom: 50,
  },
});
export default styles;
