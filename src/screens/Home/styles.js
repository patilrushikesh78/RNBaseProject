import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(5),
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: wp(6),
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
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
  },
  editButton: {
    marginTop: hp(1),
    padding: wp(4),
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  deleteButton: {
    marginStart:10,
    marginTop: hp(1),
    padding: wp(4),
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: wp(4),
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: wp('100%'),
    flex: 1, alignItems: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: '#3b82f6',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5,
  },
});
