import ImagePicker from 'react-native-image-picker';

let optionsImage = {
    title: 'Select Avatar',
    // customButtons: [
    //     {name: 'fb', title: 'Choose Photo from Facebook'},
    // ],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};
/**
 * FUNCTION CHOICE IMAGE FROM LIBRARY
 * @param func
 */
export let chooseImage = (func) => {
    ImagePicker.showImagePicker(optionsImage, (response) => {
        console.log('Response = ', response);
        if (response.didCancel) {
            console.log('User cancelled image picker');
        }
        else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
        }
        else {
            let source = { uri: response.uri };
            func(source)
            console.log(source)

        }
    });
}

