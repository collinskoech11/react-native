import React, { useState } from 'react';
import {View, Button, Text} from 'react-native';

const Cat = (props) =>{
    const [isCat, setIsCat] = useState(true);
return(
    <View>
    <Text>
    Hello there my name is {props.name} , and i am a {isCat?"CAT":"DOG"}

    <Button
    onPress={() =>{
        setIsCat(false);
    }}
    disabled={!isCat}
    title={isCat? "yes i am a cat":"no i am a dog"}
    />
    </Text>
    </View>
)}


const Cafe = () =>{
    return(
        <view>
    <Cat name="daisy"/>
    <Cat name="elsa"/>

        </view>
    );
}

export default Cafe