```
node index.js
```

`localhost:4200`にアクセスし、下を書き実行すると各記事のタイトルだけを取得することができる。

```
{
  users {
    name
    email
    posts{
      title
    }
  }
}
```