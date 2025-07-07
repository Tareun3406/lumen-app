import {Stack} from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import {TamaguiProvider} from "tamagui";
import tamaguiConfig from "@/tamagui.config";
import {DefaultTheme, ThemeProvider} from "@react-navigation/native";
import {useColorScheme} from "react-native";
import { Provider } from "react-redux";
import {store} from "@/store/store";
import {useFonts} from "expo-font";
import {useEffect} from "react";
import {StatusBar} from "expo-status-bar";
import * as NavigationBar from 'expo-navigation-bar';
import { Platform } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded, error] = useFonts({
    Pretendard: require('@/assets/fonts/Pretendard-Light.ttf'),
  })
  const colorScheme = useColorScheme();

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
    }
  }

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  useEffect(() => {
    // Android 네비게이션 바 설정
    const setupNavigationBar = async () => {
      if (Platform.OS === 'android') {
        await NavigationBar.setBackgroundColorAsync('#00000000');
        await NavigationBar.setVisibilityAsync('hidden');
      }
    };
    setupNavigationBar();
  }, []);

  if (!loaded && !error) {
    return null;
  }

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
      <ThemeProvider value={theme}>
        <Provider store={ store }>
          <StatusBar hidden />
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name={"index"} />
            <Stack.Screen name={"character"} />
            <Stack.Screen name={"board"} />
          </Stack>
        </Provider>
      </ThemeProvider>
    </TamaguiProvider>
  );
}
