parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Y4no":[function(require,module,exports) {
module.exports=function(s){mainTasks=["coffee","growl:coffee","jasmine","growl:jasmine","uglify"],s.initConfig({pkg:s.file.readJSON("package.json"),uglify:{dist:{files:{"dist/<%= pkg.name %>.min.js":"dist/<%= pkg.name %>.js"}},options:{banner:'/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>; Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */',report:"gzip"}},coffee:{plugin:{files:[{expand:!0,cwd:"src/",src:"*.coffee",dest:"dist/",ext:".js"}]},specs:{files:[{expand:!0,cwd:"spec/coffeescripts/",src:"*.coffee",dest:"spec/javascripts/",ext:".js"}]},helpers:{files:[{expand:!0,cwd:"spec/coffeescripts/helpers/",src:"*.coffee",dest:"spec/javascripts/helpers/",ext:".js"}]}},jasmine:{src:["spec/javascripts/libs/*.js","dist/<%= pkg.name %>.js"],options:{specs:"spec/javascripts/**/*.js",helpers:"spec/javascripts/helpers/**/*.js"}},watch:{files:["src/*","spec/coffeescripts/**/*.coffee"],tasks:mainTasks},growl:{coffee:{title:"CoffeeScript",message:"Compiled successfully"},jasmine:{title:"Jasmine",message:"Tests passed successfully"}}}),s.loadNpmTasks("grunt-growl"),s.loadNpmTasks("grunt-contrib-jasmine"),s.loadNpmTasks("grunt-contrib-coffee"),s.loadNpmTasks("grunt-contrib-watch"),s.loadNpmTasks("grunt-contrib-uglify"),s.registerTask("default",mainTasks),s.registerTask("travis",["coffee","jasmine"])};
},{}]},{},["Y4no"], null)
//# sourceMappingURL=/parcel-project-template/wow.bbe7126a.js.map