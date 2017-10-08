//var express = require('express');
//var open = require('open');
//var path = require('path');

import express from 'express';
import open from 'open';
import path from 'path';

import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console*/
//var port = 3000;
//var app = express();

const port = 3000;
const app = express();
const complier = webpack(config);

app.use(require('webpack-dev-middleware')(complier,{
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
  if(err)
  {
    console.log(err);
  }else
  {
    open('http://localhost:'+port);
  }
})


