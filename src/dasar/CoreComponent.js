import {
  Button,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Linking,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

// mendapatkan media query / Dimensi layar
// const windowWidth = Dimensions.get('window').width;
const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

// rnfes
const CoreComponent = () => {
  // pembuatan state
  const [header, setHeader] = useState('Dasar React Native');
  const [active, setActive] = useState(true);
  // data untuk flatlist
  const [data, setData] = useState([1, 2, 3, 4, 5]);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Iphone 12',
      price: 200,
    },
    {
      id: 2,
      name: 'Iphone 12 Pro',
      price: 300,
    },
    {
      id: 3,
      name: 'Macbook Pro',
      price: 1000,
    },
  ]);

  return (
    <ScrollView>
      {/* status bar */}
      <StatusBar backgroundColor="#7b1fa2" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.textContainer}>{header}</Text>
      </View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => alert('image tombol')}
        // onPress={() => Linking.openURL('https://www.google.com/')}
      >
        <Image
          source={require('../assets/images/banner.png')}
          //source={{uri: 'https://placeimg.com/640/480/tech'}}
          style={styles.img}
          resizeMode="center"
        />
      </TouchableOpacity>

      {/* FlatList */}
      {/* <FlatList
        data={data}
        renderItem={({item}) => <Text>Item - {item}</Text>}
        keyExtractor={item => item.toString()}
      /> */}
      {/* flatlist menggunakan object */}
      <FlatList
        data={products}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              ToastAndroid.show(item.name + ' dipilih', ToastAndroid.LONG)
            }>
            <Text>{item.name}</Text>
            <Text>$. {item.price}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />

      <TextInput style={styles.textInput} placeholder="Nama Lengkap ..." />
      {/* button custom */}
      <TouchableOpacity onPress={() => setHeader('Training SMK React')}>
        <Text style={styles.textBtn}>Button Custom</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Switch value={active} onValueChange={() => setActive(!active)} />
      </View>
      <View style={{marginHorizontal: 80, marginVertical: 15}}>
        <Button
          title="Click me"
          onPress={() => console.log('button bawaan react')}
        />
      </View>
      <ImageBackground
        source={{uri: 'https://placeimg.com/640/480/tech'}}
        style={styles.imgBg}>
        <Text style={styles.textContainer}>tulisan di atas Gambar</Text>
      </ImageBackground>
    </ScrollView>
  );
};

export default CoreComponent;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    // color: 'blue',
    // color: '#212121',
    color: 'rgb(0, 0, 255)',
    fontStyle: 'italic',
    letterSpacing: 3,
    // textDecorationLine: 'underline',
    // textDecorationLine: 'line-through',
    textDecorationLine: 'underline line-through',
  },
  view: {
    backgroundColor: 'yellow',
    // width: 200,
    height: 100,
    // margin: 20,
    // marginVertical: 20,
    // marginBottom: 20,
    // marginTop: 20,
    // marginHorizontal: 20,
    // padding: 30,
    // paddingVertical: 30,
    // paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#9c27b0',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10, // shadow
  },
  textContainer: {
    color: '#fff',
    // textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  img: {
    width: '100%',
    // width: 200,
    height: 200,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBg: {
    width: windowWidth,
    height: windowHeight / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#9c27b0',
    paddingVertical: 15,
    marginVertical: 20,
    marginHorizontal: 70,
    borderRadius: 20,
    textAlign: 'center',
    elevation: 10,
  },
  textInput: {
    // borderBottomWidth: 1,
    borderWidth: 1,
    borderBottomColor: '#9c27b0',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: '#f3e5f5',
    paddingHorizontal: 20,
    color: '#9c27b0',
  },
  item: {
    backgroundColor: '#f3e5f5',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
  },
});
