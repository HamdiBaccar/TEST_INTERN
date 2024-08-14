import React from 'react';
import { Text, View } from 'react-native';
import BackButton from '../components/goBackButton';

const Chat = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <BackButton></BackButton>
      <Text className="text-3xl">Chat Screen</Text>
    </View>
  );
};

export default Chat;
