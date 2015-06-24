var _ = require('underscore');
var guard = require('../helpers/guard');

function DictionaryService(labelRepository) {
    guard.argumentIsNotNull(labelRepository, 'labelRepository');

    this.labelRepository = labelRepository;
};

DictionaryService.prototype.getValues = function (key) {
    var labels = this.labelRepository.findAll();
    var values = _.find(labels, function (item) { return item.key == key; });
    if (values)
        return values.values;
    return [];
};

DictionaryService.prototype.getValue = function (key, language) {
    var values = this.getValues(key);
    var value = _.find(values, function (item) { return item.language == language; });
    if (value) {
        return value.value;
    } else {
        var unknown = '[UNKNOWN]';
        console.log('info: DictionaryService.getValue("' + key + '", "' + language + '") > ' + unknown);
        return unknown;
    }
};

module.exports = DictionaryService;