// import { Linking } from 'react-native'; // eslint-disable-line import/no-unresolved, max-len
//
// export const dance = authUrl => Linking.openURL(authUrl)
//   .then(() => new Promise((resolve, reject) => {
//     const handleUrl = (url) => {
//       if (!url || url.indexOf('fail') > -1) {
//         reject(url);
//       } else {
//         resolve(url);
//       }
//     };
//
//     const onLinkChange = ({ url }) => {
//       Linking.removeEventListener('url', onLinkChange);
//       handleUrl(url);
//     };
//
//     Linking.addEventListener('url', onLinkChange);
//   }));
//
// export const request = fetch;

import { Linking } from 'react-native'; // eslint-disable-line import/no-unresolved, max-len
import InAppBrowser from 'react-native-inappbrowser-reborn'

export const dance = authUrl => InAppBrowser.openAuth(authUrl, {
  // iOS Properties
  dismissButtonStyle: 'cancel',
  preferredBarTintColor: 'gray',
  preferredControlTintColor: 'white',
  readerMode: false,
  // Android Properties
  showTitle: true,
  toolbarColor: '#6200EE',
  secondaryToolbarColor: 'black',
  enableUrlBarHiding: true,
  enableDefaultShare: true,
  forceCloseOnRedirection: false,
  // Specify full animation resource identifier(package:anim/name)
  // or only resource name(in case of animation bundled with app).
  animations: {
    startEnter: 'slide_in_right',
    startExit: 'slide_out_left',
    endEnter: 'slide_in_right',
    endExit: 'slide_out_left',
  },
  headers: {
    'my-custom-header': 'my custom header value'
  },
})

export const request = fetch;
