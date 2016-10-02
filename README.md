# deploy:

* build

```

    npm run prod

```

* 压缩代码 && scp上传

```

	tar -zcvf mk-dashboard.tar.gz --exclude=node_modules --exclude=web_modules --exclude=.git  --exclude=.idea --exclude=.eslintrc.js --exclude=test  --exclude=webapp/src --exclude=webapp/build --exclude=webapp/static --exclude=webapp/index.html --exclude=webapp/test ./ && scp /Users/fedor/works/postio/mk-dashboard/mk-dashboard.tar.gz fedor@120.26.115.144:/home/fedor

```

* scp上传, 解压

```

	yes | cp -rf /home/fedor/mk-dashboard.tar.gz /mnt/works/mk-dashboard && rm -rf /home/fedor/mk-dashboard.tar.gz && cd /mnt/works/mk-dashboard && tar -zxvf mk-dashboard.tar.gz

```
--------------------------------------------------------------------------------

```
	cd /Users/fedor/works/postio/

	sudo scp -i "ec2.pem" /Users/fedor/works/postio/mk-dashboard/mk-dashboard.tar.gz ec2-user@ec2-52-78-127-16.ap-northeast-2.compute.amazonaws.com:/home/ec2-user/tmp

	ssh -i "ec2.pem" ec2-user@ec2-52-78-127-16.ap-northeast-2.compute.amazonaws.com

	mv /home/ec2-user/tmp/mk-dashboard.tar.gz /home/ec2-user/projects/

	cd /home/ec2-user/projects/

	tar -zxvf mk-dashboard.tar.gz -C /home/ec2-user/projects/mk-dashboard
```
