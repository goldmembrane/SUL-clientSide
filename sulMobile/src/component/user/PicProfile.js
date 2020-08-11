import React, {useState} from 'react';
import ImagePicker from 'react-native-image-picker';
import {StyleSheet, View, Alert, Image, Dimensions} from 'react-native';
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
    position: 'relative',
    top: -25,
    left: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const options = {
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
      if (response.didCancel) {
        Alert.alert('취소하였습니다');
      } else if (response.error) {
        Alert.alert('error');
      } else if (response.customButton) {
        Alert.alert('커스텀버튼 선택');
      } else {
        const source = {uri: response.uri};

        upDateUserPicUrl(response.uri);
        setImg(source);
      }
    });
  }
  return (
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
            style={styles.bgImage}></Image>
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
      </View>
    </View>
  );
}
