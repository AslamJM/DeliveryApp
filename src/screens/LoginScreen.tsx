import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {RootStackScreenProps} from '../../types';
import {useSignIn} from '@clerk/clerk-expo';
import {useAuthContext} from '../context/Authcontext';

const LoginScreen = ({navigation}: RootStackScreenProps<'SignIn'>) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');

  const {signIn, setSession, isLoaded} = useSignIn();

  const {role} = useAuthContext();

  const onSignInPress = async () => {
    setLoading(true);
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: email,
        password,
      });

      await setSession(completeSignIn.createdSessionId);
    } catch (error: any) {
      console.log(JSON.stringify(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Sign in as a ${role}`}</Text>
      <View style={styles.inputView}>
        <TextInput
          autoCapitalize="none"
          placeholder="E-Mail"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          autoCapitalize="none"
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={onSignInPress}>
          <Text style={styles.buttonText}>
            {loading ? 'Signin In...' : 'Sign In'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.messageView}>
        <Text style={styles.messageText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.replace('SignUp')}>
          <Text style={styles.messageTextLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 15,
  },
  inputView: {
    flexDirection: 'column',
    width: '100%',
    paddingVertical: 5,
    paddingHorizontal: 30,
    marginVertical: 8,
  },
  input: {
    padding: 10,
    color: '#1b1b1b',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#7950ED',
    width: '100%',
    fontSize: 16,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 35,
    backgroundColor: '#7950ED',
    marginVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  messageView: {
    flexDirection: 'row',
    marginTop: 10,
  },
  messageText: {
    fontSize: 15,
  },
  messageTextLink: {
    marginLeft: 5,
    fontSize: 15,
    color: '#7950ED',
    textDecorationLine: 'underline',
  },
});
