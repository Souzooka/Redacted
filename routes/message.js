/*jshint esversion:6*/
const express = require('express');
const router = express.Router();

const wordFilters = {
  'selfie'    :   'self-portrait',
  'yummers'   :   'delicious',
  'outchea'   :   'are out here',
  'bruh'      :   'wow',
  'doge'      :   'pug',
  'cilantro'  :   'soap',
  'bae'       :   'loved one',
  'swag'      :   'style',
  'yolo'      :   'carpe diem'
};

// If an empty URI GET is requested
// serve index.html
router.route('/')
      .post((req, res) => {
        // TODO
      });

module.exports = router;