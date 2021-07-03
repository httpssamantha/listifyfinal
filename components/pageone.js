// import React in our code
import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Linking,
} from 'react-native';

const Twitter = () => {
  const [twitterShareURL, setTwitterShareURL] = useState(
    'https://aboutreact.com',
  );
  const [tweetContent, setTweetContent] = useState(
    'Share with twitter!',
  );
  const [
    twitterViaAccount,
    setTwitterViaAccount
  ] = useState('AboutReact');

  const tweetNow = () => {
    let twitterParameters = [];
    if (twitterShareURL)
      twitterParameters.push('url=' + encodeURI(twitterShareURL));
    if (tweetContent)
      twitterParameters.push('text=' + encodeURI(tweetContent));
    if (twitterViaAccount)
      twitterParameters.push('via=' + encodeURI(twitterViaAccount));
    const url =
      'https://twitter.com/intent/tweet?'
      + twitterParameters.join('&');
    Linking.openURL(url)
      .then((data) => {
        alert('Twitter Opened');
      })
      .catch(() => {
        alert('Something went wrong');
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Share this with your friends!
        </Text>
        <Text style={{marginTop: 20, color: '#fff'}}>
          Enter Tweet Content
        </Text>
        <TextInput
          value={tweetContent}
          onChangeText={
            (tweetContent) => setTweetContent(tweetContent)
          }
          placeholder={'Enter Tweet Content'}
          style={styles.textInput}
        />
        <Text style={{marginTop: 20, color: '#fff'}}>
          Enter URL to Share
          </Text>
        <TextInput
          value={twitterShareURL}
          onChangeText={(twitterShareURL) =>
            setTwitterShareURL(twitterShareURL)
          }
          placeholder={'Enter URL to Share'}
          style={styles.textInput}
        />
        <Text style={{marginTop: 20, color: '#fff'}}>
          Enter Via Account
        </Text>
        <TextInput
          value={twitterViaAccount}
          onChangeText={(twitterViaAccount) =>
            setTwitterViaAccount(twitterViaAccount)
          }
          placeholder={'Enter Via Account'}
          style={styles.textInput}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={tweetNow}>
          <Text style={styles.buttonTextStyle}>
            Tweet Now
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Twitter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#013220',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#d8d4e3',
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    width: '50%',
    padding: 10,
    backgroundColor: '#8ad24e',
    marginRight: 2,
    marginLeft: 2,
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
});
