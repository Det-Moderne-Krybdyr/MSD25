import React, { JSX, useContext } from "react";
import { View, Text, TextInput, Pressable, Image, ScrollView } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { AuthContext } from "../../services/authService";
import styles from "../../styles/LoginPage.styles";

export default function LoginPage({ navigation }: { navigation: any }): JSX.Element {
  const authContext = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: any) => {
    let user = {
      name: "",
      email: data.email,
      password: data.password,
    };
    await authContext.signIn(user);
  };

  return (
    <View style={styles.pageContainer}>
      <ScrollView contentContainerStyle={styles.formContainer} keyboardShouldPersistTaps="handled">
        <View style={styles.logoBox}>
          <Image source={require("../../assets/logo.png")} style={styles.logo} resizeMode="contain" />
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.label}>Email</Text>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#767676"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="emailAddress"
                autoComplete="email"
              />
            )}
          />
          {errors.email && <Text style={styles.errorText}>{String(errors.email.message)}</Text>}
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.label}>Password</Text>
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                secureTextEntry
                placeholder="Password"
                placeholderTextColor="#767676"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="password"
                autoComplete="password"
              />
            )}
          />
          {errors.password && <Text style={styles.errorText}>{String(errors.password.message)}</Text>}
        </View>

        <Pressable
          style={({ pressed }) => [styles.submitButton, pressed && styles.submitButtonPressed]}
          onPress={handleSubmit(onSubmit)}
        >
          {({ pressed }) => (
            <Text style={pressed ? styles.submitButtonTextPressed : styles.submitButtonText}>Log In</Text>
          )}
        </Pressable>

        <Pressable
          style={({ pressed }) => [styles.secondaryButton, pressed && styles.secondaryButtonPressed]}
          onPress={() => navigation.navigate("SignUp")}
        >
          {({ pressed }) => (
            <Text style={pressed ? styles.secondaryButtonTextPressed : styles.secondaryButtonText}>
              Create an account
            </Text>
          )}
        </Pressable>
      </ScrollView>
    </View>
  );
}
