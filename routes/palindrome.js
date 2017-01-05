/**
 * Created by emerson on 04/01/2017.
 */
var express = require('express');
var router = express.Router();

var isPalindrome = function( str ){
    /**
     * isPalindrome
     * @type {string}
     * check if reversed is the same as str parameter (string)
     */
    var removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    var checkPalindrome = removeChar.split('').reverse().join('');
    return (removeChar === checkPalindrome);
};

/**
 * /
 * get
 * API Route
 */
router.get('/', function( req, res ){
    var word = req.query.word;
    res.send( isPalindrome( word ) ? 200 : 400 );
});

/**
 * /check
 * post
 * Interface Route
 */
router.post('/check', function( req, res ) {
    var word = req.body.word;
    console.log(word);
    res.send( isPalindrome( word ) ? 200 : 400 );
});

module.exports = router;