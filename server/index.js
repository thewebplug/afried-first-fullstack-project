// const express = require('express')
// const sql = require('./db')
import express from "express"
import sql from "./db.js"

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Welcome to the todo list backend')
})

app.get('/data', (req, res) => {
    const data = {
        firstname: 'John',
        lastname: 'Doe'
    }
    res.json(data);
})

app.get('/secret', (req, res) => {
    res.status(403).end();
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})