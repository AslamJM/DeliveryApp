import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useAuthContext} from '../context/Authcontext';
import {RootStackScreenProps} from '../../types';

const RoleSelectionScreen = ({
  navigation,
}: RootStackScreenProps<'RoleSelection'>) => {
  const {setRole} = useAuthContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Role</Text>
      <View style={styles.roleContainer}>
        <TouchableOpacity
          style={styles.roleBox}
          onPress={() => {
            setRole('Customer');
            navigation.navigate('SignIn');
          }}>
          <Text style={styles.roleText}>Customer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.roleBox}
          onPress={() => {
            setRole('Driver');
            navigation.navigate('SignIn');
          }}>
          <Text style={styles.roleText}>Driver</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RoleSelectionScreen;

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
  roleContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  roleBox: {
    height: 120,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#7950ED',
  },
  roleText: {
    fontWeight: '400',
    fontSize: 19,
  },
});
