# ajax-post
在VPN环境下上传文件需要给告诉git上传端口路径
在上传文件目录 \.git\config 文件末尾添加
[http]
	proxy = 127.0.0.1:1080/
