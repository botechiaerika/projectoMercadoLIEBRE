const express = require('express');
const port = 3030
console.log(__dirname)
const app = express()

const resolve = require ('resolve')

const static =app.use(express.static('/public'))

app.get('/', (req, res) => {
	res.send('indez'

    var express = require('express')
var favicon = require('serve-favicon')
var path = require('path')

var app = express()
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

// Add your routes here, etc.

app.listen(3000)