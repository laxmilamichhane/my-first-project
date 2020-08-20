import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  signin: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
  screen: {
    backgroundColor: '#ffe8ed',
    flex: 1,
    padding: 20,
  },
  inputs: {
    marginTop: 20,
    backgroundColor: '#6b00c4',
    borderRadius: 40,
    flex: 1,
    paddingVertical: 16,
  },
  title: { fontSize: 30, textAlign: 'center', marginBottom: 20 },
  des: {
    fontSize: 18,
    color: 'gray',
    letterSpacing: 0.2,
    textAlign: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 50,
  },
  save: {
    backgroundColor: 'lightgreen',
    borderRadius: 20,
    padding: 6,
    position: 'absolute',
    marginTop: 354,
    marginLeft: 224,
    zIndex: 999,
  },
});
export default styles;
