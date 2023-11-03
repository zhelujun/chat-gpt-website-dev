// 编码
let data = 'sk-HCdn3mbp7uGOAJFJal1PhlSnuroFfsr4cb2wL9drebZNeb1q';
let encodedData = btoa(data);
console.log(encodedData);  // 输出: aGVsbG8gd29ybGQ=

// 解码
let decodedData = atob(encodedData);
console.log(decodedData);  // 输出: hello world

const config = {
    // gpt3.5 官方接口：https://api.openai.com/v1/chat/completions
    url: "https://api.chatanywhere.com.cn",  // gpt3.5代理接口
    apiKey: "${decodedData}"  // openAi Base64 编码 apiKey
};  
