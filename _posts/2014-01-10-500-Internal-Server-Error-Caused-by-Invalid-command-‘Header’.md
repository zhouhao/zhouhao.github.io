---
layout: post
title: "500  Internal Server Error Caused Invalid command ‘Header’"
description: "Invalid command ‘Header’, perhaps misspelled or defined by a module not included in the server configuration"
category: Apache
tags: [Apache, Dairy]
---
Today, when I test an elegant multiple files uploading plugin([jQuery-File-Upload](https://github.com/blueimp/jQuery-File-Upload)), I faced a bizarre problem: **500 Internal Server Error**. So when I check the error.log(path:/var/log/apache2 -- Maybe a hidden folder), I get the message as follow:      
 
![Error Log](/images/blog/errorLog.png "Error Log")           

With the error message "Invalid command ‘Header’, perhaps misspelled or defined by a module not included in the server configuration", I can easily get the answer from Google. 

This error was cause by `.htaccess` file in `jQuery-File-Upload-9.5.2/server/php/files/`, whose content is as below:    
<pre class="brush: plain">
# The following directives force the content-type application/octet-stream
# and force browsers to display a download dialog for non-image files.
# This prevents the execution of script files in the context of the website:
ForceType application/octet-stream
Header set Content-Disposition attachment
&lt;FilesMatch "(?i)\.(gif|jpe?g|png)$">
	ForceType none
	Header unset Content-Disposition
&lt;/FilesMatch>

# The following directive prevents browsers from MIME-sniffing the content-type.
# This is an important complement to the ForceType directive above:
Header set X-Content-Type-Options nosniff

# Uncomment the following lines to prevent unauthorized download of files:
#AuthName "Authorization required"
#AuthType Basic
#require valid-user
</pre>

###Two steps to fix this error:  
<pre class="brush: bash">
sudo ln -sf /etc/apache2/mods-available/headers.load /etc/apache2/mods-enabled/headers.load
</pre>

<pre class="brush: bash">
sudo /etc/init.d/apache2 restart
</pre>

###Attention: Do not miss `sudo`.