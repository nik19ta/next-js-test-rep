# Название

Для того что бы запустить проект:

```sh
make
```

Для того что бы скомпилировать проект:

```sh
make build
```

---

## Разработка

Для того что бы создать новый компонент:

```sh
./cc.sh NameComponent
```

у нас в папке `components` создатся файл `NameComponent.js`

```js
import React from 'react'

const styles = {
    div: {},
    p: {}
}

const NameComponent = () => (
    <div style={styles.div} >
       <p style={styles.p} >NameComponent</p>
   </div>
)

export default NameComponent

```
