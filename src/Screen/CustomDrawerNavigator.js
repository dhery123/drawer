import * as React from "react";
import { DrawerActions, NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import 'react-native-gesture-handler';
import {
  Container,
  Content,
  Text,
  Header,
  Left,
  Body,
  Title,
  Right,
  Icon,
  Button,
  View
} from "native-base";
import SideBar from "./CustomDrawer";

const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
  return (
    <Container>
      <Header>
        <Left style={{ flex: 0.1 }}>
          <Right>
            <Button onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Icon name="menu" />
            </Button>
          </Right>
        </Left>
        
        <Body style={{ flex: 1, alignItems: 'center' }}>
          
          <Title>AppBar</Title>
        </Body>
        
        <Right style={{ flex: 0.1 }} />
      </Header>
      <Content
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View>
          <Text>Hola mundooooo</Text>
          <Button onPress={() => navigation.toggleDrawer()}><Text>abrir drawer</Text></Button>
        </View>
      </Content>
    </Container>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <Container>
      <Header>
        <Left style={{ flex: 0.1 }}>
          <Right>
            <Button onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Icon name="menu" />
            </Button>
          </Right>
        </Left>
        <Body style={{ flex: 1, alignItems: 'center' }}>
          <Title>Profile</Title>
        </Body>
        <Right style={{ flex: 0.1 }} />
      </Header>
      <Content
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View>
          <Text>Profile Screen Content</Text>
          <Button onPress={() => navigation.toggleDrawer()}><Text>Drawer</Text></Button>
        </View>
      </Content>
    </Container>
  );
}

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) =>
      (
        <SideBar {...props} />
      )}
    >
      <Drawer.Screen
        name="option1"
        component={HomeScreen}
        options={{
        
        }}
      />
      <Drawer.Screen
        name="option2"
        component={ProfileScreen}
        options={{
         
        }}
      />
    </Drawer.Navigator>
  );
}

function CustomDrawerNavigator() {
  return (
    <NavigationContainer>
      <AppDrawer />
    </NavigationContainer>
  );
}

export default CustomDrawerNavigator;