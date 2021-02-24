#!/bin/bash

echo "const styles = {
    div: {},
    p: {}
}

const $1 = () => (
    <div style={styles.div} >
       <p style={styles.p} >$1</p>
   </div>
)

export default $1" >> ./components/$1.js
