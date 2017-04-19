/*jshint esversion:6*/
const express = require('express');
const router = express.Router();

const WORDFILTERS = {
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

/** function filterWords
  * Parameters:
  *   String to be filtered
  * Return value:
  *   A filtered string according to
  *   the WORDFILTERS object listed at the top
  *   of this document.
  */
function filterWords(str) {
  const filterKeys = Object.keys(WORDFILTERS);
  const filterValues = Object.values(WORDFILTERS);
  for (let i = 0; i < filterKeys.length; ++i) {
    const re = new RegExp('regex', `/\\b${filterKeys[i]}\\b/gi`);
    str.replace(re, filterValues[i]);
  }
  return str;
}

router.route('/')
      .post((req, res) => {
        res.send(filterWords(req.body.message));
      });

module.exports = router;