import React, {useState} from 'react';
import ImagePicker from 'react-native-image-picker';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('screen');
const styles = StyleSheet.create({
  picProfileBox: {
    width: HEIGHT / 7,
    height: HEIGHT / 7,
  },
  circle: {
    width: HEIGHT / 8,
    height: HEIGHT / 8,
    backgroundColor: 'green',
    borderRadius: HEIGHT / 16,
  },
  bgImage: {
    width: HEIGHT / 8,
    height: HEIGHT / 8,
    borderRadius: HEIGHT / 16,
  },
  picModify: {
    // width: HEIGHT / 25,
    // height: HEIGHT / 25,
    // borderRadius: HEIGHT / 50,
    // backgroundColor: 'gray',
    position: 'relative',
    top: -25,
    left: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// More info on all the options is below in the API Reference... just some common use cases shown here
const options = {
  //   title: 'Select Avatar',
  //   customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  //   storageOptions: {
  //     skipBackup: true,
  //     path: 'images',
  //   },
  title: '프로필 이미지 가져오기', //다이얼로그의 제목
  takePhotoButtonTitle: '카메라로 찍기',
  chooseFromLibraryButtonTitle: '앨범에서 사진 가져오기',
  cancelButtonTitle: '취소',
  // customButtons: [{name: 'kb', title: '카카오 이미지 선택'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default function PicProfile({isLogin, isEdit, upDateUserPicUrl}) {
  const [img, setImg] = useState({
    uri: 'https://pbs.twimg.com/media/EGR6H_dXkAE9Pu8.jpg',
  });

  function imagePic() {
    ImagePicker.showImagePicker(options, (response) => {
      //   console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
        Alert.alert('취소하였습니다');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        Alert.alert('error');
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        Alert.alert('커스텀버튼 선택');
      } else {
        const source = {uri: response.uri};

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        upDateUserPicUrl(response.uri);
        setImg(source);
      }
    });
  }
  return (
    // <View style={{flex: 1, padding: 16, marginTop: 100}}>
    <View style={styles.picProfileBox}>
      <View style={styles.circle}>
        {img ? (
          <Image
            source={img}
            style={styles.bgImage}
            // resizeMethod="cover"
          ></Image>
        ) : (
          <Image
            source={require('../../img/iu.jpg')}
            style={styles.bgImage}
            // resizeMethod="cover"
          >
            {/* <Button title="show Picker" onPress={imagePic}></Button> */}
            {/* <Image source={img} style={{marginTop: 8, flex: 1}}></Image> */}
          </Image>
        )}
      </View>
      <View style={styles.picModify}>
        {isEdit ? (
          <Icon
            name="camera"
            size={24}
            color="black"
            onPress={() => {
              imagePic();
            }}
          />
        ) : (
          <></>
        )}

        {/* <Button title="사진 바꾸기" onPress={imagePic}></Button> */}
      </View>
    </View>
  );
}
