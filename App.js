import React from 'react';
import {StyleSheet} from 'react-native';
import {
  ApplicationProvider,
  Button,
  Input,
  IconRegistry,
  TopNavigation,
  Text,
  Layout,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import EncryptComponent from './src/components/EncryptComponent';

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <TopNavigation
        style={styles.tna}
        alignment="center"
        title="CipherText"
        appearance="control"
      />
      <EncryptComponent />
    </ApplicationProvider>
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tna: {
    backgroundColor: '#e53935',
  },
  text: {
    color: 'white',
  },
});
