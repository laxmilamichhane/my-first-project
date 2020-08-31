import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    marginLeft: 30,
    marginTop: 20,
  },
  input: { flex: 1, padding: 2, fontSize: 18, marginHorizontal: 20 },
  locate: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    marginHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'black',

    borderRadius: 20,
  },
  container: {
    backgroundColor: '#FDCA40',
    borderBottomLeftRadius: 80,
    borderTopLeftRadius: 80,
    marginLeft: 20,
    marginBottom: 20,
    height: 90,
  },
  optional: { fontSize: 20, marginLeft: 3, marginTop: 20, color: '#0005' },
});
export default styles;
