import {Button, Text, TextInput, View} from "react-native";
import {Controller, useForm} from "react-hook-form"
import styles from "../../styles/EditProfilePage.styles";

import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod";
import {AuthContext} from "../../services/authService"
import {useContext} from "react";

const schema = z.object({
    firstName: z.string().min(2, "Name should be at least 2 letters"),
    lastName: z.string().min(2,"Name should be at least 2 letters"),
    email: z.email("Must be a valid email address"),
    password: z.string().min(1, "Required"),
    confirmPassword: z.string().min(1, "Required"),
})

const SignUpPage = ({navigation}: {navigation: any}) => {

    const authContext = useContext(AuthContext);

    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        resolver: zodResolver(schema)
    })

    const onSubmit = async (data: any) => {
        let user = {
            name: data.firstName + " " + data.lastName,
            email: data.email,
            password: data.password,
        }
        console.log(user)
        await authContext.signUp(user)
    }

    return (
        <View style={styles.container}>
            <Text>First Name</Text>
            <Controller
            control={control}
            name="firstName"
            render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                    style={styles.input}
                    placeholder={"Enter your first name"}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                />
            )}
            />
            {errors.firstName && <Text style={{color: "red"}}>{errors.firstName.message}</Text>}
            <Text>Last Name</Text>
            <Controller
                control={control}
                name="lastName"
                render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                        style={styles.input}
                        placeholder={"Enter your last name"}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />
            {errors.lastName && <Text style={{color: "red"}}>{errors.lastName.message}</Text>}
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
            <Text>Confirm Password</Text>
            <Controller
                control={control}
                name="confirmPassword"
                render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder={"Confirm password"}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />
            {errors.confirmPassword && <Text style={{color: "red"}}>{errors.confirmPassword.message}</Text>}
            <Button title={"Submit"} onPress={handleSubmit(onSubmit)} />
        </View>
    )
}

export default SignUpPage;