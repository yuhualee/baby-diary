* Installation

	* install cordova && ionic

		```
		sudo npm install -g cordova ionic   //安装
		```
	* create the project
	
		```
		ionic start baby-diary tabs   //创建带有top和bottom
		ionic start baby-diary sidemenu  //带左侧menu栏
		ionic start baby-diary blank  //空白项目
		```
	* configure Plateform
	
		```
		cd baby-diary
		ionic platform add ios
		```	
	
	* Test it out
	
		```
		ionic build ios
		ionic emulate ios
		```
		
* Sass

	```
	sudo npm install
	ionic setup sass
	```


* Starting you app

	* Testing in a browser
	
		```
		ionic serve
		```