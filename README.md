## How to build

- Create react-native app using cli
- Integrate Redux and thunk middleware
- Integrate Unsplash Api JS wrapper
- Build components

## Installation

You can simply clone the project and start with your barebone project

## Step By Step Guide

### Install Pods (iOS Only)

- npm i
- cd ios && pod install
- cd .. && react-native run-ios/android

### Android local.properties (Android Only)

- npm i
- cd android && mkdir local.properties
- nano local.properties

#### Example of MacOS Android SDK Path

Make sure that set your right path of Android SDK

```
ndk.dir=/Users/your-name/Library/Android/sdk/ndk-bundle
sdk.dir=/Users/your-name/Library/Android/sdk
```

- cd .. & react-native run-ios/android

<hr>

# What's Included?

- Redux
- Redux Services
- NavigationService
- API Usage Service
- Ready to use Styles
- React Navigation v4
- React Navigation Helpers
- HTTP Network Management (Axios)
- Built-in EventEmitter (EventBus)
- Generic React Hooks API Request Service
- Babel Plugin Module Resolver to fix the relative path problem (visit .babelrc)
- Unsplash API

<hr>

# Components

## NavigationService (Already set it up)

## Styles

- colors
- fonts
- spacing
- theme
- font-size

## Imports

```js
import colors from 'colors';
```

```js
import fonts from 'fonts';
```

```js
import fontSize from 'font-size';
```

```js
import spacing from 'spacing';
```

```js
import theme from 'theme';
```

if you want to call them all at once

```js
import { theme, fonts, colors, spacing, fontSize } from 'shared-styles/index';
```

### Future Plans

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

## Author

Taylor, taylor.chen812@gmail.com

## License

MIT
