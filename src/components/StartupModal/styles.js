import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  modal: {
    height: 300,
    width: 260,
    borderRadius: 10,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 250,
    padding: 10,
  },
  to: {
    width: 80,
    height: 80,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 258,
  },
  close: {
    width: 20,
    height: 20,
    alignSelf: 'flex-end',
    marginRight: 4,
    padding: 12,
  },
  mark: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 6,
  },
  markbox: {
    borderWidth: 1,
    width: 200,
    height: 40,
    borderRadius: 10,
    borderColor: '#0002',
  },
  contents: {
    alignItems: 'center',
    marginTop: 20,
  },
  editbox: {
    backgroundColor: '#FDCA',
    width: 100,
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 4,
    marginHorizontal: 6,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  edit: {
    fontSize: 20,
    textAlign: 'center',
  },
  title: {
    marginHorizontal: 6,
    fontSize: 22,
    marginTop: 6,
    color: '#0009',
  },
  titlecomingbox: { height: 90, marginTop: 12, padding: 1 },
});
export default styles;
