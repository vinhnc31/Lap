import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, View, DrawerLayoutAndroid } from 'react-native';

const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
        <Text style={{ color: 'red', }}>Họ tên: </Text>
        <TextInput style={styles.paragraph}></TextInput>
        <Text style={{ color: 'red', }}>MSV: </Text>
        <TextInput style={styles.paragraph}></TextInput>
        <Text style={{ color: 'red', }}>Lớp: </Text>
        <TextInput style={styles.paragraph}></TextInput>
        <Button
            title="hủy"
            onPress={() => drawer.current.closeDrawer()}
        />
        <Button
            title="lưu"

        />
    </View>
);

export default function App() {
    const danhsach = [
        {
        id: 1,
        name: 'Shark',
        },
        {
            id: 2,
            name: 'Dung',
        },
        {
            id: 3,
            name: 'Binh',
        },

    ];
    const listdanhsach = ({ item }) => (
        <Text style={styles.name}>{item.name}</Text>
    )
    itemSeprator = () => { return < View style={styles.sperator} /> }
        
    return (
        <DrawerLayoutAndroid
            ref={drawer}
            drawerWidth={300}
            drawerPosition={drawerPosition}
            renderNavigationView={navigationView}>
      <View style={styles.container}>
          <Text style={styles.title}>Ho Ten : Nguyen Cong Vinh</Text>
          <Text style={styles.title}>Msv : Ph20444</Text>
          <View style={{ height: 80, width: 150, marginVertical: 10, marginHorizontal: 20 }}>
              <Button
                  title='Them Moi'
                  onPress={() => drawer.current.openDrawer()}
              />
          </View>      
          <SafeAreaView >
              <FlatList
                  data={danhsach}
                  renderItem={listdanhsach}
                  ItemSeparatorComponent={ itemSeprator }
              />
          </SafeAreaView>
      <StatusBar style="auto" />
            </View>
        </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop:40,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginHorizontal: 20,
        marginVertical:10,
    },
    sperator: {
       height: 1,
       width: '100%',
       backgroundColor: '#ccc',
    },
    name: {
        fontSize: 30,
        fontWeight: '600',
        marginVertical: 30,
        marginHorizontal:20
    },
    navigationContainer: {
        backgroundColor: '#ecf0f1',
    },
    paragraph: {
        padding: 16,
        fontSize: 15,
        textAlign: 'center',
    },
    paragraph1: {
        padding: 10,
        fontSize: 15,
        textAlign: 'center',
    },
});
