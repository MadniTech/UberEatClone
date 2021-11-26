import React, { useState } from "react";
import { View,Text, Touchable, TouchableOpacity} from "react-native";

export default function HeaderTabs(props){
    const[activeTab,setActiveTab]=useState("Delivery");
    return(
        <View style={{flexDirection:"row", alignSelf:"center"}}>
            <HeaderButton 
            Text="Delivery"
             btnColor="black" 
             txtColor="white"
             activeTab={props.activeTab}
             setActiveTab={props.setActiveTab}
             />
              <HeaderButton 
            Text="Pickup"
             btnColor="white" 
             txtColor="black"
             activeTab={props.activeTab}
             setActiveTab={props.setActiveTab}
             />
        </View>
    );
}

const HeaderButton = (props)=>(
<View>
    <TouchableOpacity
    style={{
         backgroundColor: props.activeTab === props.Text ? "black":"white",
        paddingVertical:6,
        paddingHorizontal:16,
        borderRadius:30
    }}
    onPress={() => props.setActiveTab(props.Text)}
    >
    <Text 
    style={{
        color: props.activeTab === props.Text ? "white" : "black",
        fontSize:15, 
        fontWeight:"900"}}
        >
        {props.Text}
        </Text>
    </TouchableOpacity>
</View>
);