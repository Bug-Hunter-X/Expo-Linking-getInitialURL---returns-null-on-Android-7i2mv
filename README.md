# Expo Linking.getInitialURL() Returns Null on Android

This repository demonstrates a common issue with the Expo `Linking` API on Android where `getInitialURL()` returns `null` despite a deep link being opened.  This often happens due to asynchronous operations and timing delays.  The provided solution implements a more robust approach to handle this scenario using an event listener and promises to ensure the URL is retrieved correctly.

## Problem

The standard usage of `Linking.getInitialURL()` can fail to retrieve the deep link URL on Android, resulting in unexpected application behavior.  The timing of URL retrieval is crucial and easily missed causing the issue to be hard to track down.

## Solution

The solution provided incorporates an event listener to monitor URL changes and resolves a promise when the URL is received, effectively handling the asynchronous nature of deep link processing on Android.

## Setup

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the app: `expo start`