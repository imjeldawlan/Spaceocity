import React from 'react';
import SafeAreaView  from 'react-native-safe-area-context';
import {DrawerItems } from 'react-navigation-drawer';
import {View, ScrollView,StyleSheet} from 'react-native';

export default class CustomDrawerContentComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var props =this.props;
        return(
            <View style ={{backgroundColor:'grey', marginTop:40, marginBottom:10}}>
                <DrawerItems {...props} />
            </View>
        );
    }
}