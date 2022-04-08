import {StyleSheet} from 'react-native';
import {SIZES, COLORS} from '../../constants/theme';

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  // Header
  header: {
    marginTop: 10,
    height: 50,
  },
  input: {
    marginLeft: 20,
    height: 60,
    fontSize: SIZES.h2,
    paddingLeft: 60,
    width: SIZES.width - 40,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    borderColor: COLORS.third,
    borderWidth: 1.5,
    color: COLORS.third,
    // Shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  // Body
  body: {
    flex: 1,
    marginTop: 30,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
  },
  list: {
    height: 400,
  },
  // ETC
  icon: {
    position: 'relative',
    top: -45,
    left: 33,
    width: 30,
  },
});

export default styles;
