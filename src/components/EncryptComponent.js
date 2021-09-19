import React, {useState} from 'react';
import {StyleSheet, StatusBar, SafeAreaView, ScrollView} from 'react-native';
import {Layout, Input, Button, Text, View} from '@ui-kitten/components';
import Clipboard from '@react-native-clipboard/clipboard';

var CryptoJS = require('crypto-js');

export default function EncryptComponent() {
  const [value, setValue] = useState('');
  const [planetext, setPlaneText] = useState('');
  const [text, setText] = useState('');
  const [copiedText, setCopiedText] = useState('');

  const encryptData = () => {
    if (planetext == '' && value == '') {
      alert('Fill Data ');
    } else {
      var ciphertext = CryptoJS.AES.encrypt(planetext, value).toString();
      Clipboard.setString(ciphertext);
      setCopiedText(ciphertext);
      setPlaneText('');
    }
  };

  const decryptData = () => {
    // Decrypt
    var bytes = CryptoJS.AES.decrypt(planetext, value);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    setCopiedText(originalText);
    Clipboard.setString(originalText);
    setPlaneText('');
  };

  const clearData = () => {
    setValue('');
    setPlaneText('');
    setCopiedText('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Layout style={styles.container1}>
          <Input
            style={styles.input}
            placeholder="Enter Key"
            multiline={true}
            numberOfLines={2}
            value={value}
            onChangeText={nextValue => setValue(nextValue)}
          />
          <Input
            placeholder="Enter Text"
            multiline={true}
            numberOfLines={15}
            textStyle={{textAlignVertical: 'top'}}
            style={styles.multiline}
            value={planetext}
            onChangeText={nextValue => setPlaneText(nextValue)}
          />
          <Text style={styles.copiedText}>{copiedText}</Text>
        </Layout>
        <Layout style={styles.container2} level="1">
          <Button
            style={styles.button}
            appearance="outline"
            status="danger"
            onPress={encryptData}>
            Encrypt
          </Button>
          <Button
            style={styles.button}
            status="primary"
            appearance="outline"
            onPress={decryptData}>
            Decrypt
          </Button>
          <Button
            style={styles.button}
            status="basic"
            appearance="outline"
            onPress={clearData}>
            Clear All
          </Button>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    // marginBottom: 10,
  },
  input: {
    marginBottom: 15,
  },
  multiline: {
    minHeight: 300,
    textAlignVertical: 'top',
  },
  text: {
    width: '100%',
  },
  copiedText: {
    marginTop: 10,
    color: 'red',
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    margin: 15,
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
