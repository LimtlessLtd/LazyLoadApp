/// <binding AfterBuild='default' ProjectOpened='watch' />
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        html2js: {
// Change html templates into JS templates / modules
            dist: {
                options: {
                    module: 'ghLazyLoad', // no bundle module for all the html2js templates
                    base: '.',
                    existingModule: true,
                    singleModule: true
                },
            files: [
                {
                    expand: true,
                    src: ['templates/**/*.html'],
                    dest: 'temp',
                    ext: '.html.js'
                }
            ]
        }
    },
        concat: {
// contact all JS files
            options: {
                // define a string to put between each file in the concatenated output
                separator: '\n'
            },
            dist: {
                // the files to concatenate
                src: ['src/*.js', 'temp/**/*.js'],
                // the location of the resulting JS file
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
// Minify the files
            options: {
                // the banner is inserted at the top of the output
                banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']

                }
            }
        },
        jshint: {
            // define the files to lint
            files: ['Gruntfile.js', 'src/**/*.js'],
            // configure JSHint (documented at http://www.jshint.com/docs/)
            options: {
                // more options here if you want to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true
                }
            }
        },
        less: {
            development: {
                files: {
                    "css/ghLazyLoad.css": "css/ghLazyLoad.less"
                }
            }
        },
        concat_css: {
            options: {},
            all: {
                src: ["css/*.css"],
                dest: "dist/ghLazyLoad.css"
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },

            target: {
                files: {
                    'dist/ghLazyLoad.min.css': ['dist/ghLazyLoad.css']
                }
            }
        },
        watch: {
            scripts: {
                files: ['<%= jshint.files %>', 'templates/**/*.html'],
                tasks: ['compileJS']
            },
            css: {
                files: ['css/ghLazyLoad.less', '<%= concat_css.all.src %>'],
                tasks: ['compileCss']
            }
        },
        copy: {
            main: {
                expand: true,
                src: 'libs/*',
                dest: 'dist/',
            },
        },
    });

    grunt.loadNpmTasks("grunt-html2js");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask("compileCss", ['less', 'concat_css', 'cssmin']);
    grunt.registerTask("compileJS", ['html2js', 'jshint', 'concat', 'uglify', 'copy:main']);
    grunt.registerTask("default", ["compileJS", "compileCss"]);



};
