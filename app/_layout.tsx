import { Stack } from "expo-router";
import {TamaguiProvider} from "tamagui";
import tamaguiConfig from "@/tamagui.config";
import {DarkTheme, DefaultTheme, ThemeProvider} from "@react-navigation/native";
import {useColorScheme} from "react-native";
import { Provider } from "react-redux";
import {store} from "@/store/store";
import {useFonts} from "expo-font";

export default function RootLayout() {

  const [loaded] = useFonts({
    Pretendard: require('@/assets/fonts/Pretendard-Regular.otf')
  })
  const colorScheme = useColorScheme();
//          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//           <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Provider store={ store }>
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
