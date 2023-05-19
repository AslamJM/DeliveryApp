import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useUser, useAuth} from '@clerk/clerk-expo';

const ProfileScreen = () => {
  const {user} = useUser();
  const [loading, setLoading] = useState(false);
  const {signOut} = useAuth();

  const onSignOut = async () => {
    setLoading(true);
    await signOut();
    try {
    } catch (error) {
      console.log(JSON.stringify(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text>{user?.emailAddresses[0].emailAddress}</Text>
      <Text>{user?.organizationMemberships[0].organization.name}</Text>
      <TouchableOpacity style={styles.button} onPress={onSignOut}>
        <Text style={styles.buttonText}>
          {loading ? 'signin out....' : 'Sign Out'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
