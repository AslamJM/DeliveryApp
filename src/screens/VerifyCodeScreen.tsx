import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useSignUp, useOrganizationList} from '@clerk/clerk-expo';

const VerifyCodeScreen = () => {
  const {isLoaded, signUp, setSession} = useSignUp();
  const [code, setCode] = useState('');

  const {isLoaded: orgLoad, organizationList} = useOrganizationList();

  const getRoles = () => {
    if (!orgLoad) {
      return;
    }
    return organizationList.map(org => org.organization);
  };

  console.log(getRoles());

  const verify = async () => {
    if (!isLoaded) {
      return;
    }
    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setSession(completeSignUp.createdSessionId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          autoCapitalize="none"
          placeholder="Verification Code"
          style={styles.input}
          keyboardType="number-pad"
          value={code}
          onChangeText={setCode}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={verify}>
          <Text style={styles.buttonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerifyCodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});
