const express = require('express');
const logger = require('morgan');
const fetch = require("node-fetch");
const server = express();
const PORT = 4000;

server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

const BASE_URL = 'https://api.coronavirus.data.gov.uk/v1/data?';

/**
 *
 * @param endpoint
 * @returns {Promise<{}|*>}
 */
const fetcher = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    return await response.json();
  } catch (e) {
    console.log(e);
    return {};
  }
};

server.get('/daily/new', async (req, res) => {
  try {
    const filters = 'filters=areaType=overview;areaName=United Kingdom&latestBy=newCasesByPublishDate&';
    const structure = 'structure={"date":"date","newCases":"newCasesByPublishDate"}';
    const endpoint = BASE_URL + filters + structure;
    const response = await fetcher(endpoint);
    res.send(response);
  } catch (e) {
    res.send('Error');
  }
});

server.get('/daily/total', async (req, res) => {
  try {
    const filters = 'filters=areaType=overview;areaName=United Kingdom&latestBy=cumCasesByPublishDate&';
    const structure = 'structure={"date":"date","value":"cumCasesByPublishDate"}';
    const endpoint = BASE_URL + filters + structure;
    const response = await fetcher(endpoint);
    res.send(response);
  } catch (e) {
    res.send('Error');
  }
});

server.get('/tests/daily', async (req, res) => {
  try {
    const filters = 'filters=areaType=overview;areaName=United Kingdom&latestBy=newPillarOneTwoTestsByPublishDate&';
    const structure = 'structure={"date":"date","value":"newPillarOneTwoTestsByPublishDate"}';
    const endpoint = BASE_URL + filters + structure;
    const response = await fetcher(endpoint);
    res.send(response);
  } catch (e) {
    res.send('Error');
  }
});

server.get('/tests/total', async (req, res) => {
  try {
    const filters = 'filters=areaType=overview;areaName=United Kingdom&latestBy=cumPillarOneTwoTestsByPublishDate&';
    const structure = 'structure={"date":"date","value":"cumPillarOneTwoTestsByPublishDate"}';
    const endpoint = BASE_URL + filters + structure;
    const response = await fetcher(endpoint);
    res.send(response);
  } catch (e) {
    res.send('Error');
  }
})

server.listen(PORT, () => {
  console.log(`BACKEND LISTENING ON ${PORT}`);
})
