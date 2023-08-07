const net = require('net');

const HOST = '192.168.1.101';
const PORT = 8001;
const R4411 = '500000FFFF03000E001000011400003B1100AF0100002F';
//\
const R4443 = '500000FFFF030016001000011400005B1100AF050045444F4D462E4F4C0057';
//DEMO.FLOW
const M5010 = '500000FFFF03000D0010000114010092130090010010'
const path = Buffer.from(R4411, 'hex');
const file = Buffer.from(R4443, 'hex');
// const ok = Buffer.from(M5010, 'hex');
const client = net.connect(PORT, HOST, () => {
  client.write(path);
  client.write(file);
  // client.write(ok);
  console.log('Command sent!');
});

client.on('data', (data) => {
  //const received = data.();
  console.log('接收數據!');
  console.log('接收到的数据:', Buffer.from(data, 'hex'));

  // 在这里处理接收到的数据
  // ...
});
client.on('error', (error) => {
  console.log(error);
})

client.on('end', () => {
  client.end;
  console.log('已与服务器断开连接');
});

client.on('close', () => {
  console.log('Closing connection');
})

setTimeout(function () {
  console.log("暫停1S");
  client.end();
}, 1000);
