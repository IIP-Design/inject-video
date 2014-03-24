module.exports = function(grunt) {

	grunt.initConfig({

		// Import package manifest
		pkg: grunt.file.readJSON("inject-video.jquery.json"),

		// Banner definitions
		meta: {
			banner: "/*\n" +
				" *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
				" *  <%= pkg.description %>\n" +
				" *  <%= pkg.homepage %>\n" +
				" *\n" +
				" *  Made by <%= pkg.author.name %>\n" +
				" *  Under <%= pkg.licenses[0].type %> License\n" +
				" */\n"
		},

		// Concat definitions
		concat: {
			dist: {
				src: ["src/jquery.inject-video.js"],
				dest: "dist/jquery.inject-video.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},

		// Lint definitions
		jshint: {
			files: ["src/jquery.inject-video.js"],
		},

		// Minify definitions
		uglify: {
			my_target: {
				src: ["src/jquery.inject-video.js"],
				dest: "dist/jquery.inject-video.min.js"
			},
			options: {
				banner: "<%= meta.banner %>"
			}
		},

    // CSS Minify definitions
    cssmin: {
      minify: {
        expand: true,
        cwd: "src/",
        src: ["*.css"],
        dest: "dist/css/",
        ext: ".min.css"
      }
    }

	});

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");

	grunt.registerTask("default", ["jshint", "concat", "uglify", "cssmin"]);
};
