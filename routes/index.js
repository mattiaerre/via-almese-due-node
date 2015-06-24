var express = require('express');
var router = express.Router();
var LabelRepository = require('../domain/label-repository');
var DictionaryService = require('../domain/dictionary-service');
var MainViewModelFactory = require('../domain/main-viewmodel-factory');

router.get('/', function(req, res) {
    res.redirect("/it");
});

router.get('/:language', function (req, res) {
    var language = req.param('language');
    var labelRepository = new LabelRepository();
    var dictionaryService = new DictionaryService(labelRepository);
    var factory = new MainViewModelFactory(dictionaryService);
    var model = factory.make(language);
    res.render('index', model);
});

module.exports = router;