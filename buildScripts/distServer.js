//var express = require('express');
//var open = require('open');
//var path = require('path');

import express from 'express';
import open from 'open';
import path from 'path';
import compression from 'compression';

/* eslint-disable no-console*/
//var port = 3000;
//var app = express();

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

/*
app.get('/users', function(req, res){
  //hard coding data
  res.json([
    {"id": 1, "firstName":"Bob","lastName": "Smith","email": "bob@gmail.com"},
    {"id": 2, "firstName":"Tammy","lastName": "Norton","email": "tnorton@yahoo.com"},
    {"id": 3, "firstName":"Tina","lastName": "Lee","email": "lee.tina@hotmail.com"}
  ]);
});
*/
app.listen(port, function(err){
  if(err)
  {
    console.log(err);
  }else
  {
    open('http://localhost:'+port);
  }
})


