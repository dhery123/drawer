import * as React from "react";
import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
} from "@react-navigation/drawer";
import {
    Body,
    Button,
    Container,
    Content,
    Footer,
    H3,
    Header,
    Icon,
    Left,
    List,
    ListItem,
    Right,
    Switch,
    Text,
    Thumbnail
} from "native-base";
import Animated from "react-native-reanimated";


function SideBar({ progress, ...props }) {
    const translateX = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [-100, 0]
    });

    return (
        <Container>
            
            <Content contentContainerStyle={{flex: 1}}>
                <ListItem thumbnail>
                    <Left>
                     
                    </Left>
                  
                </ListItem>
                <DrawerContentScrollView {...props}>
                    <Animated.View style={{ transform: [{ translateX }] }}>
                        <DrawerItemList {...props} />
                        <DrawerItem
                            label="Rate Us"
                           
                            onPress={() => props.navigation.navigate('Home')}
                        />
                    </Animated.View>
                </DrawerContentScrollView>
                <List>
                    <ListItem>
                        <Body>
                            <Text>Dark Mode</Text>
                        </Body>
                        <Right>
                            <Switch value={true} />
                        </Right>
                    </ListItem>
                </List>
            </Content>
            <Footer />
        </Container>

    )
}

export default SideBar;