import React, {useEffect} from 'react';
import {Image, View, Text} from 'react-native';

import styles from './styles';

const MovieCard = ({image, title}) => {
  useEffect(() => {
    console.log('enterd');
  }, []);

  return (
    <>
      <View style={styles.poster}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={{
            uri: `${image}`,
          }}
        />
      </View>
    </>
  );
};

export default MovieCard;
