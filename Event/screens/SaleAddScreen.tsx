/* eslint-disable prettier/prettier */
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { ImagePickerResult, launchImageLibraryAsync } from 'expo-image-picker';
import {
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  IconButton,
  Input,
  NativeBaseProvider,
  VStack,
  extendTheme
} from 'native-base';
import { useState } from 'react';
import { Image, StyleSheet, Text } from 'react-native';

import { styles } from '../stylesheet';

/*預設為Light Mode*/
function SaleAddScreen({ navigation }: any) {
  const config = {
    initialColorMode: 'light',
    useSystemColorMode: true,
  }
  const customTheme = extendTheme({ config });
  const [sellerName, setSellerName] = useState('');
  const [salePrice, setSalePrice] = useState('');
  const [saleLocation, setSaleLocation] = useState('');
  const [saleDescription, setSaleDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState<ImagePickerResult | null>(
    null,
  );

  /*處理輸入的資訊*/
  const handleSellerNameChange = (text: string) => {
    setSellerName(text);
  };

  const handleSalePriceChange = (text: string) => {
    setSalePrice(text);
  };

  const handleSaleLocationChange = (text: string) => {
    setSaleLocation(text);
  };

  const handleSaleDescriptionChange = (text: string) => {
    setSaleDescription(text);
  };

  /*上傳照片*/
  const handleUploadImage = async () => {
    const result = await launchImageLibraryAsync();
    if (!result.canceled) {
      setSelectedImage(result);
    }
  };

  const textstyles = StyleSheet.create({
    heading1: {
      fontSize: 24,
      color: '#28527A',
    },

    heading2: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#000000',
    },
    type: {
      fontSize: 14,
      color: '#28527A',
    },
    upload: {
      fontSize: 14,
      color: '#ffffff',
    },
    bottom: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#737373',
    },
  });

  return (
    <NativeBaseProvider theme={customTheme}>
      <Box bg="#FAFAFA" flex={1} safeArea>
        <HStack space={79} justifyContent="center" >
          <IconButton icon={<AntDesign name="arrowleft"
            size={24} color="#28527A" />}
            marginTop={8}
          />
          <Heading style={textstyles.heading1} marginTop={10}>
            新增商品
          </Heading>
          <IconButton icon={<Ionicons name="chatbubble-outline"
            size={24} color="#28527A" />}
            marginTop={8}
          />
        </HStack>
        <Box marginLeft={8}>
          <VStack space={3} marginTop={4}>
            <Text style={textstyles.heading2}>分類</Text>
            <HStack>
              <Button >收購</Button>
              <Button marginLeft={4}>出售</Button>
              <Button marginLeft={4}>租借</Button>
            </HStack>
            <Text style={textstyles.heading2}>名稱</Text>
            <Input
              style={styles.input}
              w="93%"
              variant="filled"
              onChangeText={handleSellerNameChange}
              value={sellerName}
              placeholder="請輸入本名"
              placeholderTextColor="#CCCCCC"
            />
            <Text style={textstyles.heading2}>價錢</Text>
            <Input
              style={styles.input}
              w="60%"
              variant="filled"
              onChangeText={handleSellerNameChange}
              value={sellerName}
              placeholder="請輸入價錢" /*可議價待做*/
              placeholderTextColor="#CCCCCC"
            />
            <Text style={textstyles.heading2}>地點</Text>
            <Input
              style={styles.input}
              w="93%"
              variant="filled"
              onChangeText={handleSalePriceChange}
              value={salePrice}
              placeholder="e.g. 後門小七"
              placeholderTextColor="#CCCCCC"
            />
            <Text style={textstyles.heading2}>描述</Text>
            <Input
              style={styles.input}
              w="93%"
              variant="filled"
              onChangeText={handleSaleLocationChange}
              value={saleLocation}
              placeholder="e.g. 全新、原價____、使用一學期"
              placeholderTextColor="#CCCCCC"
            />
            <Text style={textstyles.heading2}>標籤</Text>
            <Input
              style={styles.input}
              w="50%"
              variant="filled"
              onChangeText={handleSaleDescriptionChange}
              value={saleDescription}
              placeholder="選擇標籤" /*下拉選單待做*/
              placeholderTextColor="#CCCCCC"
            />
            <Text style={textstyles.heading2}>照片/影片</Text>

          </VStack>
          <HStack space={3} marginTop={4}>
            <Button
              width='45%'
              backgroundColor="#28527A"
              onPress={handleUploadImage}
              startIcon={<MaterialCommunityIcons name="cloud-upload-outline"
                size={24} color="white" />}>
              上傳
            </Button>
            {selectedImage?.assets && ( /*selectedImage可能是null 所以用selectedImage?.assets*/
              <Image
                source={{ uri: selectedImage.assets[0].uri }}
                style={{ width: 200, height: 100 }}
              />
              /*可以印出來看selectedImage裡面的結構 再找uri*/
            )}
          </HStack>
        </Box>
      </Box>
      <Box bg="#E5EBF1" alignItems="center">
        <HStack>
          <Button width="1/2" variant={'ghost'} size={'lg'} ><Text style={textstyles.bottom}>新增下一樣</Text></Button>
          <Divider orientation="vertical" thickness="2" bg='#BFBFBF' />
          <Button width="1/2" variant={'ghost'} size={'lg'}><Text style={textstyles.bottom}>完成</Text></Button>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
}

export default SaleAddScreen;
