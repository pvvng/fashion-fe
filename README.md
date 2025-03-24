# fashion platform FE

## post 데이터의 대략적인 형태

### 커뮤니티 글 작성

- community/write

```
{
  photo: 'https://imagedelivery.net/MR01-6_39Z4fkK0Q1BsXww/7e84a4b9-1847-4bd0-52a5-2b9614e1e500',
  title: '옷빌려드림미다',
  price: 9999, // int
  content: '옷빌려드림\r\n연락주셈묘\r\n'
}
```

### 렌탈 글 작성

- rental/write

```
{
  photo: 'https://imagedelivery.net/MR01-6_39Z4fkK0Q1BsXww/7e84a4b9-1847-4bd0-52a5-2b9614e1e500',
  title: '옷빌려드림미다',
  price: 9999, // int
  content: '옷빌려드림\r\n연락주셈묘\r\n'
}
```

### 마이페이지 프로필 변경 & 위치 인증

```
{
  photo: 'https://imagedelivery.net/MR01-6_39Z4fkK0Q1BsXww/920c4acf-8df3-4262-4c0c-4996e91a6d00',
  memberNickname: 'pvvng',
  weight: 123, // int
  height: 123, // int
  shoesSize: 119, // int
  description: 'asdfsadf',
  lat: '35.19773972469448', // string (위도)
  lng: '129.12228973863557' // string (경도)
}
```
