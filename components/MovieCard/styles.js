import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  poster: {
    width: 200,
    height: 300,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderRadius: 40,
    // shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 40,

    // Shadow
  },
});

export default styles;
