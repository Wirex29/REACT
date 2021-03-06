import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Constants
import styles from './styles';
import {COLORS, SIZES, FONTS} from '../../constants/theme';
import {category} from '../../api/omdbapi';

// Components
import Movielist from '../../components/MovieList/movie-list';
import Button from '../../components/button/button';

const HomeScreen = ({navigation}) => {
  // States
  const [keyWord, setKeyWord] = useState('');
  const [finalKey, setFinalKey] = useState('batman');

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#4f4477', '#3d4d76', '#2b5876']}
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
      <View style={styles.wrap}>
        <ScrollView>
          {/* Info */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 30,
              paddingHorizontal: 20,
            }}>
            <Text style={[FONTS.h1thin, {color: COLORS.white}]}>Hi There!</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('About');
              }}>
              <Button title="About me"></Button>
            </TouchableOpacity>
          </View>
          {/* Header */}
          <View style={styles.header}>
            <TextInput
              onSubmitEditing={() => {
                setFinalKey(keyWord);
                setKeyWord('');
              }}
              value={keyWord}
              onChangeText={setKeyWord}
              style={styles.input}
              placeholderTextColor={COLORS.third}
              placeholder="Search"></TextInput>
            <Ionicons
              style={styles.icon}
              name="search"
              color={COLORS.third}
              size={SIZES.h1}></Ionicons>
          </View>
          <View style={styles.body}>
            {/* Movie */}
            <View style={styles.list}>
              <Text
                style={[
                  FONTS.h1,
                  {color: COLORS.white, paddingBottom: 20, marginLeft: 20},
                ]}>
                MOVIE
              </Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.list}>
                {/*  list */}
                <Movielist
                  navigation={navigation}
                  type={category.movie}
                  keyWord={finalKey}></Movielist>
              </ScrollView>
            </View>
            {/* Series */}
            <View style={styles.list}>
              <Text
                style={[
                  FONTS.h1,
                  {color: COLORS.white, paddingBottom: 20, marginLeft: 20},
                ]}>
                SERIES
              </Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.list}>
                {/*  list */}
                <Movielist
                  navigation={navigation}
                  type={category.series}
                  keyWord={finalKey}></Movielist>
              </ScrollView>
            </View>
            {/* Episode */}
            <View style={styles.list}>
              <Text
                style={[
                  FONTS.h1,
                  {color: COLORS.white, paddingBottom: 20, marginLeft: 20},
                ]}>
                EPISODE
              </Text>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.list}>
                {/*  list */}
                <Movielist
                  navigation={navigation}
                  type={category.episode}
                  keyWord={finalKey}></Movielist>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;
