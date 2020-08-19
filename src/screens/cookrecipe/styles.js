import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 160,
    position: 'absolute',
  },
  person: {
    height: 120,
    width: 120,
    borderRadius: 60,
    marginTop: 80,
    marginLeft: 6,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  follow: {
    height: 60,
    width: 90,
    alignSelf: 'flex-end',
    marginTop: 180,
    marginLeft: 20,
  },
  recommended: {
    fontWeight: 'bold',
    fontSize: 22,
    marginVertical: 10,
    marginRight: 120,
    flex: 1,
  },
  viewone: {
    backgroundColor: '#d4d4d4',
    marginHorizontal: 10,
    height: 6,
    borderRadius: 3,
  },
  viewtwo: {
    backgroundColor: '#f26a9a',
    height: 6,
    borderRadius: 3,
    marginRight: 270,
  },
  see: {
    color: '#f26d9b',
    marginTop: 16,
    fontSize: 18,
  },
  new: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 6,
    marginVertical: 8,
  },
  setting: {
    width: 28,
    height: 28,
    alignSelf: 'flex-end',
    padding: 8,
    marginTop: 6,
  },
});
export default styles;
