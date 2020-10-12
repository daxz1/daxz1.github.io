const express = require('express');
const logger = require('morgan');
const fetch = require("node-fetch");
const server = express();
const PORT = 4000;

server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

const BASE_URL = 'https://api.coronavirus.data.gov.uk/v1/data?';

server.get('/daily/new', async (req, res) => {
  try {
    const filters = 'filters=areaType=overview;areaName=United Kingdom&latestBy=newCasesByPublishDate&';
    const structure = 'structure={"date":"date","newCases":"newCasesByPublishDate"}';
    const endpoint = BASE_URL + filters + structure;
    const request = await fetch(endpoint);
    const json = await request.json();
    return res.send(json);
  } catch (e) {
    return res.send({});
  }
});

server.get('/daily/total', async (req, res) => {
  try {
    const filters = 'filters=areaType=overview;areaName=United Kingdom&latestBy=cumCasesByPublishDate&';
    const structure = 'structure={"date":"date","value":"cumCasesByPublishDate"}';
    const endpoint = BASE_URL + filters + structure;
    const request = await fetch(endpoint);
    const json = await request.json();
    return res.send(json);
  } catch (e) {
    return res.send({});
  }
});

server.get('/tests/daily', async (req, res) => {
  try {
    const filters = 'filters=areaType=overview;areaName=United Kingdom&latestBy=newPillarOneTwoTestsByPublishDate&';
    const structure = 'structure={"date":"date","value":"newPillarOneTwoTestsByPublishDate"}';
    const endpoint = BASE_URL + filters + structure;
    const request = await fetch(endpoint);
    const json = await request.json();
    return res.send(json);
  } catch (e) {
    return res.send({});
  }
});

server.get('/tests/total', async (req, res) => {
  try {
    const filters = 'filters=areaType=overview;areaName=United Kingdom&latestBy=cumPillarOneTwoTestsByPublishDate&';
    const structure = 'structure={"date":"date","value":"cumPillarOneTwoTestsByPublishDate"}';
    const endpoint = BASE_URL + filters + structure;
    const request = await fetch(endpoint);
    const json = await request.json();
    return res.send(json);
  } catch (e) {
    return res.send({});
  }
})

server.listen(PORT, () => {
  console.log(`BACKEND LISTENING ON ${PORT}`);
})
