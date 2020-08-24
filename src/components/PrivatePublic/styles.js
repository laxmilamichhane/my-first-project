import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    paddingHorizontal: 4,
    paddingVertical: 4,
    marginTop: 6,
    flexDirection: 'row',
    width: 190,
    height: 40,
  },
  name: {
    fontSize: 18,
    flex: 1,
    marginLeft: 4,
  },
  icon: {
    height: 24,
    width: 24,
    alignSelf: 'center',
  },
});
export default styles;
