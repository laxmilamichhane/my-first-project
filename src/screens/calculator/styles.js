import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  title: {
    fontSize: 40,
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
  view: { flexDirection: 'row', alignSelf: 'center', marginTop: 10 },
  buttons: {
    width: 140,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'black',
    marginRight: 20,
    padding: 6,
  },
  increment: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  number: {
    fontSize: 300,
    textAlign: 'center',
  },
  inputcontainier: {
    backgroundColor: '#595a68',
    color: 'white',
    fontSize: 30,
    height: 80,
    width: 80,
    marginHorizontal: 50,
    padding: 12,
    borderRadius: 10,
    marginTop: 20,
    textAlign: 'center',
  },
});
export default styles;
