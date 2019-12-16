# Ionic app "Hallo Name" #

Simple app with [Ionic 4](https://ionicframework.com) with just one page, which demonstrates how
to implement event handling methods for buttons and how to access the value of a text input element.

<br>

----
## Screenshots ##

![Screenshot taken from "Ionic Labs" (left: Android; right: iOS)](screenshot.png)

Screenshot was taken from [Ionic Lab](https://blog.ionicframework.com/ionic-lab/).

<br>

----
## Running the app locally ##

After cloning this repository enter the following command to download all the required NPM packages into folder `node_modules`:
````
npm install
````
This may download more than 200 MBytes of packages, so it can take a while.

After this you can start the preview of the app:
````
ionic serve
````
This should open the app in your local browser at the following URL: http://localhost:8100/home

A more comfortable preview mode is "Ionic Lab", which can be started with the following command:
````
ionic serve --lab
````

<br>

----
## Building the app ##

To build the app for Android (i.e. to get the APK file) you need to have [Cordova](https://www.npmjs.com/package/cordova) configured on your system. If this is the case, then you can enter the following command:
````
ionic cordova build android
````

<br>

----
## License ##

See the [LICENSE file](LICENSE.md) for license rights and limitations (BSD 3-Clause License)
for the files in this repository.
