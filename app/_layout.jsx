import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import LoginScreen from "../components/LoginScreen";

// Skipping Configure the Token Cache with Expo (Cleark Quickstart #4)

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!publishableKey) {
  throw new Error('Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env')
}

export default function RootLayout() {
  useFonts({
    'roboto-m': require('./../assets/fonts/Roboto-Medium.ttf'),
    'roboto-r': require('./../assets/fonts/Roboto-Regular.ttf')
  })

  return (
    <ClerkProvider publishableKey={publishableKey}>
      <SignedIn>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
      </SignedIn>
      <SignedOut>
        <LoginScreen />
      </SignedOut>
      
    </ClerkProvider>
  );
}
