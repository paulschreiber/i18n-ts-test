import { StatusBar } from "expo-status-bar";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";
import "./i18n";

const formatCoordinate = (value: number) => {
  const locale = "en";

  return value.toLocaleString(locale, {
    maximumFractionDigits: 2,
  });
};

export default function App() {
  const { t } = useTranslation();

  const coords = { latitude: 37.77161, longitude: -122.3456 };

  return (
    <View style={styles.container}>
      <Text>{t("hello")}</Text>

      <Text>
        {t("coords", {
          lat: formatCoordinate(coords.latitude),
          lng: formatCoordinate(coords.longitude),
        })}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
