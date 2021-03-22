import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Spinner, Footer, FooterTab, Button, Icon, Form } from 'native-base';
// import {
//     BrowserRouter as Router,
//     Link,
//     Route,
//     Switch
// } from 'react-router-native'
import { NativeRouter, Route, Link } from "react-router-native";
import Home from '../Home/home'

export default function Foot() {
    return (
        <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
            <NativeRouter>
             



                <>
                    {/* <Route path='/home'>
                        <Home />
                    </Route> */}
                    <Route path='/home' component={Home} />
                </>
                <Footer style={{ backgroundColor: 'white', }}>
                    <FooterTab style={{ color: 'white', backgroundColor: "black", }}>
                        <Button >
                            <Icon style={{ color: 'white' }} name="home" />
                        </Button>
                        <Button >
                            <Icon style={{ color: 'white' }} name="search" />
                        </Button>
                        <Button >
                            <Icon style={{ color: 'white' }} name="add" />
                        </Button>
                        <Button >
                            <Icon style={{ color: 'white' }} name="camera" />
                        </Button>
                        <Button>
                            <Link to='/home'>
                                <Icon style={{ color: 'white' }} name="person" />
                            </Link>
                        </Button>
                    </FooterTab>
                </Footer>
            </NativeRouter>


        </View>


    );
}
