# <img alt="React Native Easy Cached Image" src="https://github.com/WrathChaos/react-native-easy-cached-image/blob/master/assets/Screenshots/logo.png" width="1050"/>

Easy Peasy Cached Image for React Native.

[![npm version](https://img.shields.io/npm/v/react-native-easy-cached-image.svg)](https://www.npmjs.com/package/react-native-easy-cached-image)
[![npm downloads](https://img.shields.io/npm/dm/react-native-easy-cached-image.svg)](https://www.npmjs.com/package/react-native-easy-cached-image)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

<p align="center">
<img alt="React Native Easy Cached Image" src="https://github.com/WrathChaos/react-native-easy-cached-image/blob/master/assets/Screenshots/example.png" width="49.7%"/>
</p>

## Installation

Add the dependency:

```ruby
npm i react-native-easy-cached-image
```

## Basic Usage

```ruby
<CachedImage
   resizeMode="cover"
   style={styles.imageStyle}
   borderRadius={30}
   source={{ uri: "your-uri" }} />
```

### Example Application

- I shared the example project to check what it is:
  [check the code](examples/App.js), and yes! :) all of the images, screenshots are directly taken
  from the this example. Of course, you can simply clone the project and run the example on your own environment.

### Configuration - Props

| Property                | Type   | Default   | Description                                                                     |
| ----------------------- | ------ | --------- | ------------------------------------------------------------------------------- |
| source                  | object | undefined | use this to implement your own source of image, it could be URI or local image. |
| any prop what Image get | any    | non       | it can use any prop what Image component use                                    |

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Easy Cached Image Library is available under the MIT license. See the LICENSE file for more info.
