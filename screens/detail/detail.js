import React, {useEffect, useState} from 'react';
import {View, Text, ImageBackground} from 'react-native';

import styles from './styles';
import omdbapi from '../../api/omdbapi';
import {COLORS, FONTS, SIZES} from '../../constants/theme';

import Button from '../../components/button/button';

const DetailScreen = ({route}) => {
  // States
  const {id} = route.params;
  const [movie, setMovie] = useState({});
  // Api
  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await omdbapi.getMovie(id);
        setMovie(response.data);
        console.log(movie.Genre);
      } catch (err) {
        console.log(`Error:${err}`);
      }
    };
    getMovie();
  }, [id]);

  // Handle
  const genre = () => {
    const result = movie.Genre ? movie.Genre.split(',')[0] : 'Loading';
    return result;
  };

  const lang = () => {
    const result = movie.Language
      ? movie.Language.substring(0, 3).toUpperCase()
      : 'Loading';
    return result;
  };
  return (
    <View style={styles.wrap}>
      <ImageBackground
        source={{
          uri: `${movie.Poster}`,
        }}
        resizeMode="cover"
        style={styles.bgImage}>
        </ImageBackground>
    <View style={styles.detail}>
          {/* Title */}
          <Text
            style={[FONTS.hSpec, {color: COLORS.white, textAlign: 'center'}]}>
            {movie.Title}
          </Text>
          {/* Tags */}
          <View
            style={{
              width: SIZES.width,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              paddingLeft: 30,
              marginTop: 30,
            }}>
            <Button title={genre()}></Button>
            <Button title={lang()}></Button>
            <Button title="IMDB" color={true} imdb={movie.imdbRating}></Button>
          </View>
          {/* Desc */}
          <View
            style={{
              width: SIZES.width,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              paddingHorizontal: 40,
              marginTop: 30,
            }}>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={[
                FONTS.body2,
                {color: COLORS.white, textAlign: 'justify'},
              ]}>
              {movie.Plot}
            </Text>
          </View>
          {/* Button */}
          <View
            style={{
              width: SIZES.width,
              justifyContent: 'center',
              paddingHorizontal: 40,
              marginTop: 30,
            }}>
            <Button size={{w: 100, h: 20}} title="Watch now"></Button>
          </View>
        </View>
    </View>
  );
};

export default DetailScreen;
