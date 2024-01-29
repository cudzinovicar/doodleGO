<template>
    <button @click="$emit('undo')"> UNDO</button>"
    <button @click="$emit('redo')"> REDO</button>"
    <button @click="$emit('clearinit')"> CLEAR</button>"

</template>