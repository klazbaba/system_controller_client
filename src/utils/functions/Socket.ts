import net from 'react-native-tcp';

export let socket;

export const connectToServer = () => {
  socket = net.createConnection('3000', '192.168.43.178');
};
