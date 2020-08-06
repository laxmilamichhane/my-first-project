import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  name: {
    fontSize: 16,
    color: 'gray',
    marginLeft: 12,
    marginBottom: 6,
  },
  input: { flex: 1, padding: 16, fontSize: 16 },
  locate: {
    width: 20,
    height: 20,
    marginHorizontal: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#e1e8e4',
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
});
export default styles;
