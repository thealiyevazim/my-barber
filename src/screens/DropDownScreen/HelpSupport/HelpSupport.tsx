import { StyleSheet, View,Image,TouchableOpacity,ScrollView ,Modal} from 'react-native'
import React,{useState,useCallback,useRef,useEffect} from 'react'
import { palette } from '~utils/theme'
import { Container, Text, Button, Input } from "~components";
import * as ImagePicker from 'expo-image-picker';
import {Camera,CameraType} from 'expo-camera';
import {shareAsync} from 'expo-sharing';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';


const HeaderImage = require("../../../assets/images/HeaderIMage.png");
const LightCamera = require('../../../assets/images/Camera_light.png')
const Gallery = require('../../../assets/images/MyCamera.png')
const CameraIcon = require('../../../assets/images/cameraCircle.png')

const HelpSupport = () => {

  const [image, setImage] = useState(null); 
  // const [status, requestPermission] = ImagePicker.useCameraPermissions();
  const [hasGalleryPermission,setHasGalleryPermission] = useState(null);
  const [isMOdalVisible,setIsModalVisible] = useState(false);
  const [hasCameraPermission,setHasCameraPermission] = useState(null);
  // const [type,setType] = useState(Camera.Constants.Type.back);
  const [flash,setFlash] = useState(Camera.Constants.FlashMode.off);
  const CameraRef = useRef(null);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

 
 

  useEffect( () => {
    (async () => {
      const galleryStatus = await ImagePicker.requestCameraPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');

      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");

    })();
  } ,[] )

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }

    if (hasGalleryPermission === false) {
      return <Text>No access storage</Text>
    }
  }




  return (
    <Container style={{flex:1, justifyContent:'center', alignItems:'center',}}>
      {/*  header image */}
      <Image
        source={HeaderImage}
        style={{
          width:255,
          height:85,
          marginTop:46,
          marginBottom:30,
          resizeMode:'cover',
          
        }}
      />


     <Container 
       style={{
        flex: 1,
        width: "100%",
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        backgroundColor: palette.white,
        
    }}
     >
     

      <Container
        style={{
          marginLeft:16,
          marginRight:16,
          height:650,
        }}
      >
      <TouchableOpacity  
      style={{
        justifyContent:'center',
        alignItems:'center',
      
      }}
      // press Camera change avatar photo // 
      onPress={() => setIsModalVisible(true)}
      
      >

      <View style={{
        width:79,
        height:79,
        backgroundColor:palette.lightGray,
        borderRadius:50,
        position:'absolute',
        bottom:-39
        }}>

        <View 
          style={{
            alignItems:'center',
            flex: 1,
            justifyContent:'center',
          }} 
          
        >
          {/* <Image 
            source={LightCamera}
            style={{
              height:32,
              width:32,
              resizeMode:'contain',
              position:'absolute'
            }}
          /> */}
           {image && <Image source={{ uri: image }}  style={{
                width:79,
                height:79,
                borderRadius:50,
                resizeMode:'cover',
                position:'absolute'
            }}/>}

        </View>
      </View>
    
      </TouchableOpacity>
            
        <View style={{
          alignItems:'flex-start',
          marginTop:45,
          borderColor:palette.gray,
          borderWidth:1,
          borderRadius:6,
          marginBottom:10,
          }}>
        <Input 
          placeholder='Ism'
          borderWidth={0}
          borderColor={'transparent'}
          margin={0}
          secureTextEntry={false}            />
        </View>

        <View style={{
          alignItems:'flex-start',
          borderColor:palette.gray,
          borderWidth:1,
          borderRadius:6,
          marginBottom:10,
          }}>
        <Input 
          placeholder='Familya'
          borderWidth={0}
          borderColor={'transparent'}
          margin={0}
          secureTextEntry={false}            />
        </View>

        <View style={{
          alignItems:'flex-start',
          borderColor:palette.gray,
          borderWidth:1,
          borderRadius:6,
          marginBottom:10,
          }}>
        <Input 
          placeholder='Telefon raqam'
          borderWidth={0}
          borderColor={'transparent'}
          margin={0}
          secureTextEntry={false}  
                />
        </View>

        <View style={{
          alignItems:'flex-start',
          borderColor:palette.gray,
          borderWidth:1,
          borderRadius:6,
          marginBottom:10,
          }}>
        <Input 
          placeholder='E-mail'
          borderWidth={0}
          borderColor={'transparent'}
          margin={0}
          secureTextEntry={false}            />
        </View>

        <View style={{
          alignItems:'flex-start',
          borderColor:palette.gray,
          borderWidth:1,
          borderRadius:6,
          marginBottom:10,
          }}>
        <Input 
          placeholder='Ishlash manzili'
          borderWidth={0}
          borderColor={'transparent'}
          margin={0}
          secureTextEntry={false}            />
        </View>

        <View style={{
          alignItems:'flex-start',
          borderColor:palette.gray,
          borderWidth:1,
          borderRadius:6,
          marginBottom:10,
          }}>
        <Input 
          placeholder="Tug'ilgan sana"
          borderWidth={0}
          borderColor={'transparent'}
          margin={0}
          secureTextEntry={false}            />
        </View>

        <View style={{
          alignItems:'flex-start',
          borderColor:palette.gray,
          borderWidth:1,
          borderRadius:6,
          marginBottom:10,
          }}>
        <Input 
          placeholder='Ish vaqti'
          borderWidth={0}
          borderColor={'transparent'}
          margin={0}
          secureTextEntry={false}            />
        </View>


        <Button
            text={"Saqlash"}
            textColor={palette.white}
            fontWeight={"bold"}
            // onPress={onPressMessage}
            style={{
              backgroundColor: palette.mainBlue,
              borderRadius: 8,
              height: 60,
              padding: 14,
              gap: 10,
            }} onPress={function (): void {
              throw new Error('Function not implemented.');
            } }           
              >

        </Button>

      </Container>

     </Container>

     {/* MODAL section  */}
     <Modal 
         visible={isMOdalVisible} 
         onRequestClose={()=> setIsModalVisible(false)}
         animationType='slide'
        //  presentationStyle='pageSheet'
         transparent={true}
         style={{}}
         >
            <View style={{
              width:'100%',
              height:'35%',
              backgroundColor:palette.lightGray,
              padding:60,
              alignItems:'center',
              justifyContent:'center',
              position:'absolute',
              bottom:0,
              borderWidth:1,
              borderColor:palette.gray,
              borderTopRightRadius:40,
              borderTopLeftRadius:40,
              flexDirection:'row',
              }}>
            
             
              <TouchableOpacity style={{ 
                    backgroundColor:palette.mainBlue,
                    borderRadius: 8,
                    height: 40,
                    padding: 10,
                    width:70,
                    gap: 10,
                    position:'absolute',
                    right:15,
                    top:15,
                    }}
                    onPress={()=> setIsModalVisible(false)}
                    >
                <Text style={{fontWeight:'800'}}>Chiqish</Text>
              </TouchableOpacity>
                  <View style={{flexDirection:'row',justifyContent:'space-between',flex:1,}}>

                    {/* Camera touchable part */}
                    <TouchableOpacity 
                    
                    style={{flexDirection:'column',marginLeft:10,alignItems:'center'}}
                    >
                      <Image source={CameraIcon}
                      style={{width:120,height:120,marginLeft:-10,resizeMode:'contain'}}
                      
                      />
                      <Text style={{color:'#067fd0',fontWeight:'900'}}>CAMERA</Text>

                    </TouchableOpacity>
                    
                      

                
                    <TouchableOpacity  
                      style={{flexDirection:'column',marginLeft:10,alignItems:'center'}}
                      onPress={()=> pickImage()}
                      // onPress={savePhoto}
                    >

                      <Image source={Gallery}
                       style={{width:120,height:120,resizeMode:'contain',}}
                      
                      />
                      <Text style={{color:'#067fd0',fontWeight:'900'}}>GALIREYA</Text>
                    </TouchableOpacity>

                  </View>
            </View>
        </Modal>
    
    </Container>
  )
}

export default HelpSupport;

const styles = StyleSheet.create({});