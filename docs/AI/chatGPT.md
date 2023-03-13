# ChatGPT



## 免翻入口

 * https://freegpt.one/
 * https://chat.51buygpt.com/
 * https://fastgpt.app/
 * http://43.154.144.239:3002/#/chat/80

## 免翻接口

```rest
POST http://154.40.40.81:3001/v1/chat/completions
Content-Type: application/json

{"temperature":0.7,"max_tokens":1024,"top_p":1,"frequency_penalty":0,"stream":true,"presence_penalty":0,"model":"gpt-3.5-turbo","messages":[{"role":"system","content":"给我唱一段小品"}]}
```