var express = require('express');
var router = express.Router();
var LabelRepository = require('../domain/label-repository');
var DictionaryService = require('../domain/dictionary-service');
var MainViewModelFactory = require('../domain/main-viewmodel-factory');

router.get('/', function (req, res) {
    res.redirect('/it');
});

router.get('/:language', function (req, res) {
    res.render('index', makeViewModel(req));
});

router.post('/:language', function (req, res) {
    res.render('index', makeViewModel(req));
});

function makeViewModel(req, contactFormSent) {
    var language = req.param('language');
    var labelRepository = new LabelRepository();
    var dictionaryService = new DictionaryService(labelRepository);
    var factory = new MainViewModelFactory(dictionaryService);
    var model = factory.make(language, req.body);
    return model;
}

module.exports = router;