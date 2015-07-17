var express = require('express');
var router = express.Router();
var LabelRepository = require('../domain/label-repository');
var DictionaryService = require('../domain/dictionary-service');
var MainViewModelFactory = require('../domain/main-viewmodel-factory');

var Form = require('../domain/form.server.model')

router.get('/', function (req, res) {
    res.redirect('/it');
});

router.get('/:language', function (req, res) {
    res.render('index', makeViewModel(req));
});

router.post('/:language', function (req, res) {
    var model = makeViewModel(req);
    if (model.isValid) {
        var form = new Form(model.form);
        form.save(function (err, form) {
            if (err) {
                console.log('err: ' + JSON.stringify(err));
                res.render('error', err);
            }
            else {
                console.log('a form w/ id: ' + form._id + ' has been successfully saved');
                res.render('index', model);
            }
        })
    }
    else {
        res.render('index', model);
    }
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