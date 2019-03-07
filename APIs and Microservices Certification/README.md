					
				Managing Packages with npm

1) The Node Package Manager (npm) is a command-line tool used by developers to share and
   control modules (or packages) of JavaScript code written for use with Node.js.

   When starting a new project, npm generates a package.json file. This file lists
   the package dependencies for your project. Since npm packages are regularly updated,
   the package.json file allows you to set specific version numbers for each dependency.
   This ensures that updates to a package don't break your project.

   npm saves packages in a folder named node_modules

2) The package.json file is the center of any Node.js project or npm package. It 
   stores information about your project, similar to how the <head> section
   of an HTML document describes the content of a webpage. It consists of a single 
   JSON object where information is stored in key-value pairs. There are only two
   required fields; "name" and "version".

3) Versions or Semantic Versioning (SemVer), 

   "package": "MAJOR.MINOR.PATCH"
   The MAJOR version should increment when you make incompatible API changes. 
   The MINOR version should increment when you add functionality in a 
   backwards-compatible manner. The PATCH version should increment when you make
   backwards-compatible bug fixes.

4) In the last challenge, you told npm to only include a specific version of a
   package. That’s a   useful way to freeze your dependencies if you need to make
   sure that different parts of your project stay compatible with each other. 
   But in most use cases, you don’t want to miss bug fixes since they often 
   include important security patches and (hopefully) don’t break things in doing so.

   To allow an npm dependency to update to the latest PATCH version, you
   can prefix the dependency’s version with the tilde (~) character. Here's
   an example of how to allow updates to any 1.3.x version.

   "package": "~1.3.8"

5) Similar to how the tilde we learned about in the last challenge allows npm to 
   install the latest PATCH for a dependency, the caret (^) allows npm to install
   future updates as well. The difference is that the caret will allow both MINOR
   updates and PATCHes.

   Your current version of moment should be "~2.10.2" which allows npm to install 
   to the latest 2.10.x version. If you were to use the caret (^) as a version 
   prefix instead,npm would be allowed to update to any 2.x.x version.

   "package": "^1.3.8"
  
   This would allow updates to any 1.x.x version of the package.
