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
                { language: 'it', value: 'Nome e cognome' },
                { language: 'fr', value: 'Nom et prenom' }]
        },
        {
            key: 'emailPlaceholder', values: [
                { language: 'en', value: 'Email' },
                { language: 'it', value: 'Email' },
                { language: 'fr', value: 'Email' }]
        },
        {
            key: 'telephoneNumberPlaceholder', values: [
                { language: 'en', value: 'Telephone number' },
                { language: 'it', value: 'Numero di telefono' },
                { language: 'fr', value: 'Numéro de Téléphone' }]
        },
        {
            key: 'notesPlaceholder', values: [
                { language: 'en', value: 'Notes' },
                { language: 'it', value: 'Note' },
                { language: 'fr', value: 'Notes' }]
        },
        {
            key: 'submitPlaceholder', values: [
                { language: 'en', value: 'Submit' },
                { language: 'it', value: 'Invia' },
                { language: 'fr', value: 'Envoie' }]
        },
        {
            key: 'address', values: [
                { language: 'en', value: 'Via Almese 2, 10040 Villar Dora, Turin, Italy' },
                { language: 'it', value: 'Via Almese 2, 10040 Villar Dora, Torino' },
                { language: 'fr', value: 'Via Almese 2, 10040 Villar Dora, Turin, Italy' }]
        },
        {
            key: 'descriptionIntro', values: [
                { language: 'it', value: 'Villetta unifamiliare, molto soleggiata, con ampio giardino, situata nel centro di Villar Dora, vicina a centro commerciale, negozi, fermata dell\'autobus, banca, municipio, P.T. e scuole, disposta su due piani cosi\' composti:' },
                { language: 'en', value: 'Very sunny cottage with big garden in the centre of the town. Close by shops, bus stop, town hall, post office and school. The two floors are organised as follows:' },
                { language: 'fr', value: 'Villa individuelle, beaucoup ensoleillé, avec un tres grand jardin. Située au centre ville de Villar Dora, voisine aux centres commercials, magasins, arret de bus, banque, mairie, bureau de poste et ecoles, disposée sur deux etages comme suit:' }]
        },
        {
            key: 'descriptionFirstFloor', values: [
                { language: 'it', value: 'Primo piano: ingresso, salone, sala pranzo con cucinino, due camere e bagno. Totale mq. 100' },
                { language: 'en', value: 'First floor: entrance, hall, dining room with small kitchen, two bedrooms and bathroom. Sm. 100 in total' },
                { language: 'fr', value: 'Premier étage, entrèe, salon, salle à manger avec cuisine, deux chambres et toilette. Total 100 mq.' }]
        },
        {
            key: 'descriptionGroundFloor', values: [
                { language: 'it', value: 'Piano terra: tavernetta, lavanderia, cantina, autorimessa. Totale mq. 100' },
                { language: 'en', value: 'Ground floor: basement space/room with cooking area, laundry room, cellar and garage. Sm. 100 in total' },
                { language: 'fr', value: 'Rez de chaussée: Salon, laverie, cave, garage. Total 100 mq.' }]
        },
        {
            key: 'descriptionGarden', values: [
                { language: 'it', value: 'Il giardino e\' di mq. 430 con annessa costruzione di mq. 28.' },
                { language: 'en', value: 'The garden is sm. 430 large with an annex building of sm. 28.' },
                { language: 'fr', value: 'Le jardin est developé sur 430 mq avec, sur eux meme, une costruction de 28 mq.' }]
        },
        {
            key: 'characteristicsHeading', values: [
                { language: 'it', value: 'Caratteristiche' },
                { language: 'en', value: 'Characteristics' },
                { language: 'fr', value: 'Caractéristiques' }]
        },
        {
            key: 'characteristics', values: [
                { language: 'it', value: ['Casa indipendente', 'Due ingressi da via pubblica', 'Ampio giardino di mq. 430', 'Due garage', 'Cantina', 'Riscaldamento indipendente a metano', 'Buono stato'] },
                { language: 'en', value: ['Independent house', 'Two entrances from public street', 'Big garden of sm. 430', 'Two garages', 'Basement', 'Methane autonomous heating', 'Good condition'] },
                { language: 'fr', value: ['Maison independante','Deux Entrées par la vie publique','Tres grand jardin de 430 mq','Deux garages','Cave','Chauffage independant à méthane','Bon état'] }]
        },
        {
            key: 'viaAlmeseDueIsOnSale', values: [
                { language: 'it', value: 'e\' in vendita! Se vuoi maggiori informazioni e/o fissare un appuntamento per una visita puoi contattarci utilizzando il modulo sottostante.' },
                { language: 'en', value: 'is for sale. If you need more information and/or arrange a viewing you can reach us through the form below.' },
                { language: 'fr', value: 'est en vente. Si tu veux plus d\'informations et/or fixer un appointement pour une visite tu peux nous contacter en utilisant le formulaire à suivre.' }]
        },
        {
            key: 'successTitle', values: [
                { language: 'en', value: 'Thank you for your message' },
                { language: 'it', value: 'Grazie per averci scritto' },
                { language: 'fr', value: 'Merci pour votre message' }]
        },
        {
            key: 'successText', values: [
                { language: 'en', value: 'Your request has been successfully sent, we will get back to you as soon as possible.' },
                { language: 'it', value: 'La tua richiesta e\' stata inviata con successo, ti contatteremo appena possibile.' },
                { language: 'fr', value: 'Ta demande a été envoyé avec succès, nous irons te contacter au plus vite.' }]
        },
        {
            key: 'errorTitle', values: [
                { language: 'en', value: 'An error has occurred' },
                { language: 'it', value: 'Errore durante l\'invio del modulo' },
                { language: 'fr', value: 'Erreur pendant l\'envoye du formulaire' }]
        },
        {
            key: 'errorText', values: [
                { language: 'en', value: 'At least one between "Email" and "Telephone number" must be provided. Your request has not been processed, please try again.' },
                { language: 'it', value: 'Almeno uno tra "Email" e "Numero di telefono" deve essere presente. La tua richiesta non e\' stata inviata, ti preghiamo di riprovare.' },
                { language: 'fr', value: 'Au moins, un seul entre "Email" et "Numero de thelephone" doit etre presente. Ta demand n\'a pas eté envoyé. Nous te prions d\'essayer de nouveau.' }]
        },
        {
            key: 'descriptionHeading', values: [
                { language: 'en', value: 'Description' },
                { language: 'it', value: 'Descrizione' },
                { language: 'fr', value: 'Description' }]
        }
    ];
};

module.exports = LabelRepository;