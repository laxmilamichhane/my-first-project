import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffd9fa',
  },
  dabba: {
    margin: 10,
    marginTop: 30,
  },
  text: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#3a03ad',
  },
  description: {
    fontSize: 20,
  },
  description2: {
    fontSize: 18,
    color: 'blue',
  },
  descriptionView: {
    flexDirection: 'row',
    paddingStart: 2,
  },
  lowerbody: {
    backgroundColor: 'white',
    flex: 1,
    borderWidth: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 10,
    borderColor: 'white',
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  both: {
    flexDirection: 'row',
    marginStart: 20,
    margin: 12,
  },
  sign: {
    fontSize: 18,
  },
  button: {
    marginHorizontal: 20,
    backgroundColor: '#6c2afa',
    marginTop: 2,
    marginStart: 10,
    padding: 8,
    borderWidth: 1,
    borderRadius: 18,
    marginBottom: 8,
  },
  signn: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center',
  },
  lowertext: {
    fontSize: 18,
    color: 'gray',
    marginHorizontal: 20,
  },
});
export default styles;
