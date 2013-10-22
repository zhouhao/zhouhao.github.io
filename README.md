The theme of this website is bought here: http://themeforest.net/item/increase-premium-business-wordpress-theme/4769391?ref=cmsmasters.     
If you like it, please buy it.     

JUST A FORK IS NOT ENOUGHT!    
======
如果你直接拷贝或Fork本Git库作为自己的博客，但是请务必做好以下的事：     
>1. 一定不要忘记删除我写的文章，    
>2. 修改 `_includes / comments.md` 中的代码（此处用的是国内友言, all of these codes are related to my ID, so you should register for your own, and it is very easy）;    
>3. 修改 `_layouts / default.html`中 google analytics的标识  ` _gaq.push(['_setAccount', 'UA-39886095-1']);`[If you do not need it, just delete it. It doesn't matter.];    
>4. 修改部分页面里面的邮箱地址；    
>5. 如果你没有自己独立的域名，记得把`CNAME`文件删掉(just delete it, you can add it, when you have your own domail name)，否则就替换成你自己的域名。不然网站无法运行        
>6. Absolutely, there are more details needed to be fixed...       


This project is forked from here: https://github.com/kejinlu/kejinlu.github.com      

>1. 改进的地方：    
>1). 用国内的友言替换了默认的disqus，因为后者提供的facebook之类的国内不方便登录。   
>2). 添加了分享到其他网站的功能（可以评论的地方就可以分享）    
>3). 修改了404页面（公益404界面）    
>4). 添加了外链相册的功能(Most pictures in album is from flickr)     
>2. Rakefile is not used when I add new articles.    
>3. Revise the GUI of web     

###What's Next?
- [x] Add code hight light in blog    
- [x] Add “back to top” button    
- [x] customize the right side of main page    
