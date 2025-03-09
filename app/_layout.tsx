import { Stack } from "expo-router";
import {TamaguiProvider} from "tamagui";
import tamaguiConfig from "@/tamagui.config";
import {DarkTheme, DefaultTheme, ThemeProvider} from "@react-navigation/native";
import {useColorScheme} from "react-native";

export default function RootLayout() {
  const colorScheme = useColorScheme();
//          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//           <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name={"index"} />
          <Stack.Screen name={"play"} />
        </Stack>
      </ThemeProvider>
    </TamaguiProvider>
  );
}
