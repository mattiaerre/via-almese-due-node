var guard = require('../helpers/guard');
var pkg = require('../package.json');

function MainViewModelFactory(dictionaryService) {
    guard.argumentIsNotNull(dictionaryService, 'dictionaryService');

    this.dictionaryService = dictionaryService;
}

MainViewModelFactory.prototype.make = function (language, body) {
    //var languages = [{ value: 'en', label: 'English' }, { value: 'it', label: 'Italiano' }];
    var languages = [{ value: 'en', label: 'English' }, { value: 'it', label: 'Italiano' }, { value: 'fr', label: 'Français' }];

    var model = {
        language: language,
        languages: languages,
        mainTitle: this.dictionaryService.getValue('mainTitle', language),
        version: pkg.version,
        address: this.dictionaryService.getValue('address', language),
        year: new Date().getFullYear(),
        viaAlmeseDueIsOnSale: this.dictionaryService.getValue('viaAlmeseDueIsOnSale', language),
        descriptionHeading: this.dictionaryService.getValue('descriptionHeading', language),
        descriptionIntro: this.dictionaryService.getValue('descriptionIntro', language),
        descriptionFirstFloor: this.dictionaryService.getValue('descriptionFirstFloor', language),
        descriptionGroundFloor: this.dictionaryService.getValue('descriptionGroundFloor', language),
        descriptionGarden: this.dictionaryService.getValue('descriptionGarden', language),
        characteristicsHeading: this.dictionaryService.getValue('characteristicsHeading', language),
        characteristics: this.dictionaryService.getValue('characteristics', language),
        fullNamePlaceholder: this.dictionaryService.getValue('fullNamePlaceholder', language),
        emailPlaceholder: this.dictionaryService.getValue('emailPlaceholder', language),
        telephoneNumberPlaceholder: this.dictionaryService.getValue('telephoneNumberPlaceholder', language),
        notesPlaceholder: this.dictionaryService.getValue('notesPlaceholder', language),
        submitPlaceholder: this.dictionaryService.getValue('submitPlaceholder', language),
        contactFormSent: false,
        feedbackRowClass: 'hidden',
        form: body,
        isValid: false,
    };

    model.form.language = language;

    if (body.submit) {
        model.contactFormSent = true;
        model.feedbackRowClass = '';

        var colours = { red: '#f2dede', green: '#dff0d8' };

        var background = colours.red;
        model.feedbackTitle = this.dictionaryService.getValue('errorTitle', language);
        model.feedbackText = this.dictionaryService.getValue('errorText', language);

        if (isValid(body)) {
            background = colours.green;
            model.feedbackTitle = this.dictionaryService.getValue('successTitle', language);
            model.feedbackText = this.dictionaryService.getValue('successText', language);
            model.submitButtonClass = 'disabled';
            model.isValid = true;
        }

        model.feedbackBoxStyle = 'background: ' + background + ' !important; padding: 2em; font-size: 1.5em;';
    }

    function isValid(body) {
        if (body.email || body.telephoneNumber)
            return true;
        return false;
    }

    return model;
};

module.exports = MainViewModelFactory;