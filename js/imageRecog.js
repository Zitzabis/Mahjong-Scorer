const app = new Clarifai.App({
 apiKey: 'd7fbf43012ca4c10b6470220fef5c45d'
});

app.models.predict("mahjong", "http://www.freedivination.com/mah-jong/images/tiles/circles3.jpg").then(
    function(response) {
        console.log(response);
    },
    function(err) {
        // there was an error
    }
);
