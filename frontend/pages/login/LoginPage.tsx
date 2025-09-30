import {Button, Text, TextInput, View} from "react-native";
import styles from "../../styles/EditProfilePage.styles";
import {JSX, useContext} from "react";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {AuthContext} from "../../services/authService";

export default function LoginPage({navigation}: {navigation: any}): JSX.Element {

    const authContext = useContext(AuthContext);

    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = async (data: any) => {
        let user = {
            name: "",
            email: data.email,
            password: data.password,
        }
        console.log(user)
        await authContext.signIn(user)
    }

    return (
        <View style={styles.container}>
            <Text>Email</Text>
            <Controller
                control={control}
                name="email"
                render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                        style={styles.input}
                        placeholder={"Email"}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />
            {errors.email && <Text style={{color: "red"}}>{errors.email.message}</Text>}
            <Text>Password</Text>
            <Controller
                control={control}
                name="password"
                render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder={"Password"}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />
            {errors.password && <Text style={{color: "red"}}>{errors.password.message}</Text>}
            <Button title={"Submit"} onPress={handleSubmit(onSubmit)} />
            <Button title={"Sign Up"} onPress={() => navigation.navigate("SignUp")}/>
        </View>
    )
}