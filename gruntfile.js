module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-svgpackager');
    
    grunt.initConfig({
        svgpackager: {
            playingCardsStandardDeck: {
                options: {
                    package: 'cards',
                    source: 'cards',
                    dest: 'dist',
                    output: 'json',
                    base64: true,
                    prefixsvg: false, // Don't prefix with data:image/svg+xml;base64,
                }
            },
        },
    });

    grunt.registerTask('clean-up-json', 'Clean up the json', function() {
        const json = grunt.file.readJSON('dist/cards.json');
        const keys = Object.keys(json);
        const cleanJSON = {};

        for (let key of keys) {
            cleanJSON[key] = json[key].data;
        }

        grunt.file.write('dist/cards.json', JSON.stringify(cleanJSON));
      });

    grunt.registerTask('default', ['svgpackager', 'clean-up-json']);
};
