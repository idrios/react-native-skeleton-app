import React from "react"
import { Button, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native"
import { getUserToken } from "../../auth/user"
import Toast from "react-native-simple-toast"
import LoadingOverlay from "../modal/LoadingOverlay"
import { dateTimeNowFormatted } from "../../util/util"
import GroundJPG from '../../res/images/ground.jpg'

const LoginScreen = (props) => {
  const [usernameInput, onChangeUsernameInput] = React.useState('Bob')
  const [passwordInput, onChangePasswordInput] = React.useState('Password')
  const [isLoading, setLoading] = React.useState(false)

  handleLogin = () => {
    setLoading(true)
    getUserToken(usernameInput, passwordInput)
      .then(userToken => {
        setLoading(false)
        props.setToken(userToken)
      })
      .catch(e => {
        Toast.show("Error occurred trying to get user")
        console.error(`[${dateTimeNowFormatted()}] Error occurred while trying to get user :: ${e}`)
      })
  }

  return (
    <>
      <SafeAreaView style={styles.screen}>
        <ImageBackground source={GroundJPG} resizeMode="cover" style={styles.imageBackground}>
        <View style={styles.textEntryField}>
          <Text style={styles.text}>Username</Text>
          <TextInput 
            style={styles.textinput}
            onChangeText={onChangeUsernameInput}
            value={usernameInput}
            />
        </View>
        <View style={styles.textEntryField}>
          <Text style={styles.text}>Password</Text>
          <TextInput 
            secureTextEntry
            style={styles.textinput}
            onChangeText={onChangePasswordInput}
            value={passwordInput}
            />
        </View>
        <View>
          <Button 
            title="Login"
            onPress={this.handleLogin}
            />
        </View>
        </ImageBackground>
      </SafeAreaView>
      {isLoading ? <LoadingOverlay message={"Logging in..."}/> : <></>}
    </>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1, 
    justifyContent: "center"
  },
  imageBackground: {
    flex: 1, 
    justifyContent: "center"
  },
  textEntryField: {
    alignItems: "left",
    marginBottom: 20, 
    marginHorizontal: "3%",
    padding: 10,
    backgroundColor: "#a0a0a090", 
    borderRadius: 10
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    color: "black"
  },
  textinput: {
    borderColor: "#6868a0c0",
    borderWidth: 3, 
    paddingVertical: 3, 
    paddingHorizontal: 10, 
    backgroundColor: "#a0a0a0c0",
    fontSize: 20,
    width: "100%", 
    margin: 2,
    borderRadius: 10
  }, 
})

export default LoginScreen