import { StyleSheet, Text, View, Platform, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import {Feather, FontAwesome, MaterialIcons} from '@expo/vector-icons';
import TouchableScale from 'react-native-touchable-scale';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{marginTop: 20, flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: '#121212'}}>
        <MaterialIcons style={{marginHorizontal: 15}} name='home' color={'white'} size={23} />
        <View style={{flexDirection: 'row', }}>
          <View style={{width: 20, height:20, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', borderRadius: 14, marginHorizontal: 20}}><Text style={{color: 'white', fontSize: 12}}>J</Text></View>
          <View style={{width: 20, height:20, backgroundColor: '#121212', alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: 'white', marginHorizontal: 10}}><Text style={{color: 'white', textAlign: 'center', fontSize: 12}}>8</Text></View>
          <Feather style={{marginHorizontal: 15}} name='more-vertical' color={'white'} size={20} />
        </View>
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 70}}>
        <Text style={{fontSize: 70, color: 'white'}}>Google</Text>
      </View>
      <View style={{flexDirection: 'row',width: '90%', height:50, alignSelf: 'center', marginTop: 40, borderRadius: 50, alignItems: 'center', backgroundColor: '#2E2E2E'}}>
        <TextInput style={{width:240, height: 50, borderTopLeftRadius: 50, borderBottomLeftRadius: 50, padding: 15, fontSize: 17, color: 'white'}} placeholder='Search or type web address' placeholderTextColor={'white'} />
        <MaterialIcons style={{marginHorizontal: 15}} name='mic' color={'white'} size={28}/>
        <MaterialIcons name='qr-code-2' color={'white'} size={28}/>
      </View>
      <View style={{width: '100%', flexDirection: 'row', borderWidth: 1, borderColor: '#121212', marginTop: 25, justifyContent: 'space-around'}}>
        <View style={{width: 95, borderWidth: 1, borderColor: '#121212', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style={{width: 45, height: 45, backgroundColor: '#333337', borderRadius: 30, justifyContent: 'center', alignItems: 'center'}} activeOpacity={-2}>
            <Text style={{color: 'white', fontSize: 20}}>U</Text>
          </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 13, textAlign: 'center'}}>University S...</Text>
        </View>
        <View style={{width: 95, borderWidth: 1, borderColor: '#121212', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style={{width: 45, height: 45, backgroundColor: '#333337', borderRadius: 30, justifyContent: 'center', alignItems: 'center'}} activeOpacity={-2}>
            <Text style={{color: 'white', fontSize: 20}}>C</Text>
          </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 13, textAlign: 'center'}}>ChatGPT</Text>
        </View>
        <View style={{width: 95, borderWidth: 1, borderColor: '#121212', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style={{width: 45, height: 45, backgroundColor: '#333337', borderRadius: 30, justifyContent: 'center', alignItems: 'center'}} activeOpacity={-2}>
            <MaterialIcons name='search' color={'white'} size={28} />
          </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 13, textAlign: 'center'}}>bwinners b...</Text>
        </View>
        <View style={{width: 95, borderWidth: 1, borderColor: '#121212', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style={{width: 45, height: 45, backgroundColor: '#333337', borderRadius: 30, justifyContent: 'center', alignItems: 'center'}} activeOpacity={-2}>
            <Text style={{color: 'white', fontSize: 20}}>J</Text>
          </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 13, textAlign: 'center'}}>Jordan Nw...</Text>
        </View>
      </View>
      {/* Start from here */}
      <View style={{width: '100%', flexDirection: 'row', borderWidth: 1, borderColor: '#121212', marginTop: 10, justifyContent: 'space-around', alignItems: 'center'}}>
        <View style={{width: 95, borderWidth: 1, borderColor: '#121212', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style={{width: 45, height: 45, backgroundColor: '#333337', borderRadius: 30, justifyContent: 'center', alignItems: 'center'}} activeOpacity={-2}>
          <Text style={{color: 'white', fontSize: 20}}>A</Text>
        </TouchableOpacity>
        <Text style={{color: 'white', fontSize: 13, textAlign: 'center'}}>Audio/Vide...</Text>
        </View>
        <View style={{width: 95, borderWidth: 1, borderColor: '#121212', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style={{width: 45, height: 45, backgroundColor: '#333337', borderRadius: 30, justifyContent: 'center', alignItems: 'center'}} activeOpacity={-2}>
            <Text style={{color: 'white', fontSize: 20}}>H</Text>
          </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 13, textAlign: 'center'}}>Home - InSI...</Text>
        </View>
        <View style={{width: 95, borderWidth: 1, borderColor: '#121212', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style={{width: 45, height: 45, backgroundColor: '#333337', borderRadius: 30, justifyContent: 'center', alignItems: 'center'}} activeOpacity={-2}>
            <Text style={{color: 'white', fontSize: 20}}>G</Text>
          </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 13, textAlign: 'center'}}>Gamjobs.c...</Text>
        </View>
        <View style={{width: 95, borderWidth: 1, borderColor: '#121212', justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style={{width: 45, height: 45, backgroundColor: '#333337', borderRadius: 30, justifyContent: 'center', alignItems: 'center'}} activeOpacity={-2}>
            <Text style={{color: 'white', fontSize: 20}}>R</Text>
          </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 13, textAlign: 'center'}}>Restaurant...</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 35}}>
        <Text style={{color: '#fff', fontSize: 17, marginHorizontal:20}}>Discover - off</Text>
        <MaterialIcons name='settings' style={{marginHorizontal:20}} color={'white'} size={20}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
