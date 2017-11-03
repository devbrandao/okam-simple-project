module.exports = app => {

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

	app.get(`/`, (req, res) => {
		res.sendfile('./public/index.html');
	});

    app.get(`/questions`, (req, res) => {

        const questions = [
            `Do you have any health problems?`,
            `Have you visited the doctor in the past 90 days?`,
            `Do you sleep well?`,
            `Do you take any medication?`,
            `Does your family have a history of serious illness?`,
            `Do you have any allergies?`,
            `Did you give blood recently?`,
        ];

        res.json(questions);
    });
};