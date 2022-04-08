import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import styles from "./styles";
import { COLORS, FONTS, SIZES } from "../../constants/theme";

const Button = ({ color, title, imdb, size }) => {
  // Const
  const Size = size
    ? { paddingHorizontal: size.w, paddingVertical: size.h }
    : "";
  return (
    <View style={styles.Wrap}>
      {color ? (
        <View style={styles.wrapYellow}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text
              style={[FONTS.h2, { color: COLORS.black, textAlign: "center" }]}
            >
              {title} {imdb}
            </Text>
          </View>
        </View>
      ) : (
        <LinearGradient
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 0 }}
          colors={["#56839f", "#54789b", "#546e97"]}
          style={[styles.wrap, Size]}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text
              style={[FONTS.h2, { color: COLORS.white, textAlign: "center" }]}
            >
              {title}
            </Text>
          </View>
        </LinearGradient>
      )}
    </View>
  );
};

export default Button;
