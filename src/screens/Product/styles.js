import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(5),
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: wp(5),
    fontWeight: 'bold',
    color: '#888',
  },
  itemContainer: {
    padding: wp(5),
    backgroundColor: '#fff',
    marginBottom: hp(2),
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemText: {
    fontSize: wp(4.5),
    color: '#888',
  },
  categoryText: {
    fontSize: wp('5%'),
    color: '#888',
  },
  editButton: {
    marginTop: hp(1),
    padding: wp(4),
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  editText: {
    color: '#fff',
    fontSize: wp(4),
    textAlign: 'center',
  },
  inputTitle: {
    marginBottom: hp('1%')
  },
  input: {
    height: hp(6),
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: wp(3),
    marginBottom: hp(2),
    fontSize: wp(4),
    backgroundColor: '#fff',
  },
});
