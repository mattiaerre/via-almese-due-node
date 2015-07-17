function LabelRepository() {
    
};

LabelRepository.prototype.findAll = function () {
    return [
        {
            key: 'mainTitle', values: [
                { language: 'en', value: 'Via Almese 2' },
                { language: 'it', value: 'Via Almese 2' },
                { language: 'fr', value: 'Via Almese 2' }]
        },
        {
            key: 'fullNamePlaceholder', values: [
                { language: 'en', value: 'Full name' },
                { language: 'it', value: 'Nome e cognome' }]
        },
        {
            key: 'emailPlaceholder', values: [
                { language: 'en', value: 'Email' },
                { language: 'it', value: 'Email' }]
        },
        {
            key: 'telephoneNumberPlaceholder', values: [
                { language: 'en', value: 'Telephone number' },
                { language: 'it', value: 'Numero di telefono' }]
        },
        {
            key: 'notesPlaceholder', values: [
                { language: 'en', value: 'Notes' },
                { language: 'it', value: 'Note' }]
        },
        {
            key: 'submitPlaceholder', values: [
                {
                    language: 'en', value: 'Submit'
                },
                { language: 'it', value: 'Invia' }]
        },
        {
            key: 'address', values: [
                { language: 'en', value: 'Via Almese 2, 10040 Villar Dora, Turin, Italy' },
                { language: 'it', value: 'Via Almese 2, 10040 Villar Dora, Torino' }]
        },
        {
            key: 'descriptionIntro', values: [
                { language: 'it', value: 'Villetta unifamiliare, molto soleggiata, con ampio giardino, situata nel centro di Villar Dora, vicina a centro commerciale, negozi, fermata dell\'autobus, banca, municipio, P.T. e scuole, disposta su due piani cosi\' composti:' },
                { language: 'en', value: '[TODO]' }]
        },
        {
            key: 'descriptionFirstFloor', values: [
                { language: 'it', value: 'Primo piano: ingresso, salone, sala pranzo con cucinino, due camere e bagno. Totale mq. 100' },
                { language: 'en', value: '[TODO]' }]
        },
        {
            key: 'descriptionGroundFloor', values: [
                { language: 'it', value: 'Piano terra: tavernetta, lavanderia, cantina, autorimessa. Totale mq. 100' },
                { language: 'en', value: '[TODO]' }]
        },
        {
            key: 'descriptionGarden', values: [
                { language: 'it', value: 'Il giardino e\' di mq. 430 con annessa costruzione di mq. 28.' },
                { language: 'en', value: '[TODO]' }]
        },
        {
            key: 'mobile', values: [
                { language: 'it', value: '+39 335 6303191 (Giuseppe Richetto)' },
                { language: 'en', value: '+44 7921 508607 (Mattia Richetto)' }]
        },
        {
            key: 'email', values: [
                { language: 'it', value: 'info@viaalmesedue.it' },
                { language: 'en', value: 'info@viaalmesedue.it' },
                { language: 'fr', value: 'info@viaalmesedue.it' }]
        },
        {
            key: 'characteristicsHeading', values: [
                { language: 'it', value: 'Caratteristiche' },
                { language: 'en', value: 'Characteristics' }]
        },
        {
            key: 'characteristics', values: [
                { language: 'it', value: ['Casa indipendente', 'Due ingressi da via pubblica', 'Ampio giardino di mq. 430', 'Due garage', 'Cantina', 'Riscaldamento indipendente a metano', 'Buono stato'] },
                { language: 'en', value: ['Independent house', 'Two entrances from public street', 'Big garden of sm. 430', 'Two garages', 'Basement', 'Methane autonomous heating', 'Good condition'] },
                { language: 'fr', value: [] }]
        },
        {
            key: 'viaAlmeseDueIsOnSale', values: [
                { language: 'it', value: 'e\' in vendita! Se vuoi maggiori informazioni e/o fissare un appuntamento per una visita puoi contattarci utilizzando il modulo sottostante.' },
                { language: 'en', value: '[TODO]' }]
        },
        {
            key: 'successTitle', values: [
                { language: 'it', value: 'Grazie per averci scritto' }]
        },
        {
            key: 'successText', values: [
                { language: 'it', value: 'La tua richiesta e\' stata inviata con successo, ti contatteremo appena possibile.' }]
        },
        {
            key: 'errorTitle', values: [
                { language: 'it', value: 'Errore durante l\'invio del modulo' }]
        },
        {
            key: 'errorText', values: [
                { language: 'it', value: 'Almeno uno tra "Email" e "Numero di telefono" deve essere presente. La tua richiesta non e\' stata inviata, ti preghiamo di riprovare.' }]
        },
        {
            key: 'blockText', values: [
                { language: 'it', value: 'Invio in corso ...' }]
        },
        {
            key: 'descriptionHeading', values: [
                { language: 'it', value: 'Descrizione' }]
        }
    ];
};

module.exports = LabelRepository;