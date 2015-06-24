var guard = require('../helpers/guard');

function MainViewModelFactory(dictionaryService) {
    guard.argumentIsNotNull(dictionaryService, 'dictionaryService');
    
    this.dictionaryService = dictionaryService;
};

MainViewModelFactory.prototype.make = function (language) {
    //var languages = [{ value: 'it', label: 'Italiano' }, { value: 'en', label: 'English' }];
    var languages = [{ value: 'it', label: 'Italiano' }];
    
    var model = {
        languages: languages,
        mainTitle: this.dictionaryService.getValue('mainTitle', language), 
        version: '0.3.0',
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
    };
    
    return model;
};

module.exports = MainViewModelFactory;