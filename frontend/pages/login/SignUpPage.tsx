import React, { useContext } from "react";
import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContext } from "../../services/authService";
import styles from "../../styles/SignUpPage.styles";

const schema = z.object({
  firstName: z.string().min(2, "Name should be at least 2 letters"),
  lastName: z.string().min(2, "Name should be at least 2 letters"),
  email: z.string().email("Must be a valid email address"),
  password: z.string().min(1, "Required"),
  confirmPassword: z.string().min(1, "Required"),
});

const SignUpPage = ({ navigation }: { navigation: any }) => {
  const authContext = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    const user = {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      password: data.password,
    };
    await authContext.signUp(user);
  };

  return (
    <View style={styles.pageContainer}>
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </Pressable>

      <ScrollView contentContainerStyle={styles.formContainer} keyboardShouldPersistTaps="handled">
        <View style={styles.inputBox}>
          <Text style={styles.label}>First Name</Text>
          <Controller
            control={control}
            name="firstName"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Enter your first name"
                placeholderTextColor="#767676"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                textContentType="oneTimeCode"
              />
            )}
          />
          {errors.firstName && <Text style={styles.errorText}>{String(errors.firstName.message)}</Text>}
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.label}>Last Name</Text>
          <Controller
            control={control}
            name="lastName"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Enter your last name"
                placeholderTextColor="#767676"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                textContentType="oneTimeCode"
              />
            )}
          />
          {errors.lastName && <Text style={styles.errorText}>{String(errors.lastName.message)}</Text>}
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
                textContentType="oneTimeCode"
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
                placeholder="Password"
                placeholderTextColor="#767676"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry
                textContentType="oneTimeCode"
              />
            )}
          />
          {errors.password && <Text style={styles.errorText}>{String(errors.password.message)}</Text>}
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.label}>Confirm Password</Text>
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Confirm password"
                placeholderTextColor="#767676"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry
                textContentType="oneTimeCode"
              />
            )}
          />
          {errors.confirmPassword && (
            <Text style={styles.errorText}>{String(errors.confirmPassword.message)}</Text>
          )}
        </View>

        <Pressable
          style={({ pressed }) => [styles.submitButton, pressed && styles.submitButtonPressed]}
          onPress={handleSubmit(onSubmit)}
        >
          {({ pressed }) => (
            <Text style={pressed ? styles.submitButtonTextPressed : styles.submitButtonText}>Submit</Text>
          )}
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default SignUpPage;
