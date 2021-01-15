import React, { useState } from 'react';
import {View, Text, Button} from 'react-native';

const Cat = (props) =>{
  const [isHungry, setIsHungry] = useState(true)

  return(
    <View>
    <Text>
    Hello my name is {props.name} , and i am {isHungry? "hungry":"full"}!
    </Text>
    <Button 
    onPress={() =>{
      setIsHungry(false);
    }}
    disabled={!isHungry}
    title={isHungry? "pour me some milk":"no thank you"}
    />
    </View>
  )
}

const Cafe = () =>{
    return(
        <>
         <Cat name="daisy"/>
         <Cat name="elfa"/>

         </>
    )
  
}
export default Cafe;