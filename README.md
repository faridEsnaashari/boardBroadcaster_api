# Project: board broadcaster api

## API list:

- [Signup and login](https://github.com/faridEsnaashari/boardBroadcaster_api#singup-and-login)
  - [register / post](https://github.com/faridEsnaashari/boardBroadcaster_api#method-post)
  - [login / post](https://github.com/faridEsnaashari/boardBroadcaster_api#end-point-login)
  - [verifyEmail / get](https://github.com/faridEsnaashari/boardBroadcaster_api#end-point-verifyemail)
  - [resendVerificationMail / get](https://github.com/faridEsnaashari/boardBroadcaster_api#end-point-resendverificationmail)
- [user](https://github.com/faridEsnaashari/boardBroadcaster_api#user)
  - [user / get](https://github.com/faridEsnaashari/boardBroadcaster_api#end-point-user)
- [board](https://github.com/faridEsnaashari/boardBroadcaster_api#board)
  - [boardByIdentifier / get](https://github.com/faridEsnaashari/boardBroadcaster_api#end-point-boardbyidentifier)
  - [board / get](https://github.com/faridEsnaashari/boardBroadcaster_api#end-point-board-2)
  - [board / post](https://github.com/faridEsnaashari/boardBroadcaster_api#end-point-board)
  - [board / put](https://github.com/faridEsnaashari/boardBroadcaster_api#end-point-board-1)
  - [board / delete](https://github.com/faridEsnaashari/boardBroadcaster_api#end-point-board-3)

## SocketIo:

- [initShapes(sub)](https://github.com/faridEsnaashari/boardBroadcaster_api#initshapessub)
- [deleteShape(sub)](https://github.com/faridEsnaashari/boardBroadcaster_api#deleteshapesub)
- [newShape(sub)](https://github.com/faridEsnaashari/boardBroadcaster_api#newshapesub)
- [getAllShapes(sub)](https://github.com/faridEsnaashari/boardBroadcaster_api#getallshapessub)
- [deleteShape(pub/sub)](https://github.com/faridEsnaashari/boardBroadcaster_api#deleteshapepubsub)
- [allShapes(pub)](https://github.com/faridEsnaashari/boardBroadcaster_api#allshapespub)
- [draw(pub)](https://github.com/faridEsnaashari/boardBroadcaster_api#drawpub)
- [joinToRoom(pub)](https://github.com/faridEsnaashari/boardBroadcaster_api#jointoroompub)

# singup and login

## End-point: register

### Method: POST

> ```
> {{Server}}/register
> ```

### Body

```json
{
  "name": "farid",
  "email": "gav@gav.ir",
  "password": "12345678"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: login

### Method: POST

> ```
> {{Server}}/login
> ```

### Body

```json
{
  "email": "khar@khar.ir",
  "password": "12345678"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: verifyEmail

### Method: GET

> ```
> {{Server}}/verifyEmail/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdhdkBnYXYuaXIiLCJ2ZXJpZmljYXRpb25Db2RlIjozNzc0OTIsImlhdCI6MTY3NzE1NjMyNn0.crrAGksvmJSE0o5z93o2VDpQ6u20d8MgB0Ckg6Uh2WU?=
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: resendVerificationMail

### Method: GET

> ```
> {{Server}}/resendVerificationMail?email=khar@khar.ir
> ```

### Query Params

| Param | value        |
| ----- | ------------ |
| email | khar@khar.ir |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# user

## End-point: user

### Method: GET

> ```
> {{Server}}/user?complete=true
> ```

### Headers

| Content-Type  | Value                                                                                                                                                                                                 |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoia2hhciIsImVtYWlsIjoia2hhckBraGFyLmlyIiwiaWQiOiI2M2NjZmU0ZmZhOTE4NDExMmFiOTdjMzQiLCJpYXQiOjE2NzcxNTk0NDR9.Wmv1cflNvCpxSAI6WD_oEA4d83JZvqu9b7bBJH9OIDw |

### Query Params

| Param    | value |
| -------- | ----- |
| complete | true  |

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# board

## End-point: board

### Method: POST

> ```
> {{Server}}/board
> ```

### Headers

| Content-Type  | Value                                                                                                                                                                                                 |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoia2hhciIsImVtYWlsIjoia2hhckBraGFyLmlyIiwiaWQiOiI2M2NjZmU0ZmZhOTE4NDExMmFiOTdjMzQiLCJpYXQiOjE2Nzc0MDEwMTR9.qjCM2SGzD7Ut04-5OxSERAClSfSedNyEx7j4MB4hshg |

### Body

```json
{
  "name": "farid"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: board

### Method: PUT

> ```
> {{Server}}/board/647b38ed40ffa368a6ec15de
> ```

### Headers

| Content-Type  | Value                                                                                                                                                                                                 |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| authorization | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoia2hhciIsImVtYWlsIjoia2hhckBraGFyLmlyIiwiaWQiOiI2M2NjZmU0ZmZhOTE4NDExMmFiOTdjMzQiLCJpYXQiOjE2Nzc0MDEwMTR9.qjCM2SGzD7Ut04-5OxSERAClSfSedNyEx7j4MB4hshg |

### Body

```json
{
  "name": "ar"
}
```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: boardByIdentifier

### Method: GET

> ```
> {{Server}}/board/identifier/fstixK7HpNocWUaX0pllV
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: board

### Method: GET

> ```
> {{Server}}/board/identifier/649efe5eb89aa21beb89f4b9
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: board

### Method: DELETE

> ```
> {{Server}}/board/647b38ed40ffa368a6ec15de
> ```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

# SocketIo

## joinToRoom(pub)

**message**

- boardIdentifier

## draw(pub)

**message**

- boardIdentifier
- shape

## allShapes(pub)

**message**

- boardIdentifier
- shapes

## deleteShape(pub/sub)

**message**

- boardIdentifier
- shape

## getAllShapes(sub)

**message**

## newShape(sub)

**message**

- shape

## deleteShape(sub)

**message**

- shape

## initShapes(sub)

**message**

- shapes

---

Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
