import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    paddingHorizontal: 4,
    paddingVertical: 10,
    marginTop: 6,
    flexDirection: 'row',
  },
  name: {
    fontSize: 18,
    marginLeft: 56,
    flex: 1,
  },
  icon: {
    width: 30,
    height: 30,
    position: 'absolute',
    marginLeft: 10,
    marginTop: 6,
  },
  button: {
    borderRadius: 100,
    alignContent: 'center',
    height: 30,
    width: 30,
  },
  check: { width: 16, height: 16, alignSelf: 'center', marginTop: 6 },
});
export default styles;
