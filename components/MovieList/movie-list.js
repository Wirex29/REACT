import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import omdbapi from '../../api/omdbapi';
import MovieCard from '../MovieCard/movie-card';
import {COLORS, FONTS, SIZES} from '../../constants/theme';

import styles from './styles';

const Movielist = ({type, keyWord = 'marvel', navigation}) => {
  // States
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isNothing, setIsNothing] = useState(false);

  // APi
  useEffect(() => {
    const getList = async () => {
      setIsLoading(true);
      try {
        if (keyWord.length < 3) {
          keyWord = 'batman';
        }
        const response = await omdbapi.getMoviesList(type, keyWord);

        if (response != false && response.data && response.data.Search) {
          setIsNothing(false);
          setMovies(response.data.Search);
          console.log('Entered data');
        } else {
          console.log('Entered');
          setIsNothing(true);
        }
        setIsLoading(false);
      } catch (err) {
        console.log(`Error:${err}`);
        setIsLoading(false);
      }
    };
    getList();
  }, [type, keyWord]);
  // Handle
  const renderFilm = () => {
    if (isNothing) {
      return (
        <View style={{width: SIZES.width, height: 300}}>
          <Text
            style={[
              FONTS.h1,
              {color: COLORS.white, textAlign: 'center', marginTop: 50},
            ]}>
            Not Found
          </Text>
        </View>
      );
    } else {
      return movies.map((elem, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              navigation.navigate('Detail', {id: elem.imdbID});
            }}>
            <MovieCard title={elem.Title} image={elem.Poster}></MovieCard>
          </TouchableOpacity>
        );
      });
    }
  };
  const test = renderFilm;
  return (
    <>
      {isLoading ? (
        <View style={styles.loading}>
          <Text style={[FONTS.h1, {color: COLORS.white}]}>Loading...</Text>
        </View>
      ) : (
        test()
      )}
    </>
  );
};

export default Movielist;
