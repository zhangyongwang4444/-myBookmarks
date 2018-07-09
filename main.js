//1.初始化数据

var hashA = init();
var keys = hashA['keys'];
var hash = hashA['hash'];

//2.生成键盘

generateKeyboard(keys, hash);


//3.监听用户动作

listenUser(hash);



//4.下面是工具函数函数

function getFromlLocalStorage(name) {
	return JSON.parse(localStorage.getItem(name) || 'null')
}

function tag(tagName, attributes) {
	var element = document.createElement(tagName);
	for (key in attributes) {
		element[key] = attributes[key] //key 为 className  id  ...
	}
	return element
}

function init() {
	var keys = {
		0: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
		1: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
		2: ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
		length: 3
	}
	var hash = {
		q: 'qq.com',
		w: 'weibo.com',
		e: 'ele.me',
		r: 'renren.com',
		t: 'tianya.com',
		y: 'youtube.com',
		u: 'uc.com',
		i: 'iqiyi.com',
		o: 'opera.com',
		p: undefined,
		a: 'acfun.tv',
		s: 'sohu.com',
		z: 'zhihu.com',
		m: 'www.mcdonalds.com.cn'
	}
	//取出 localStorage 中的 zzz 对应的 hash
	var hashInLocalStorage = getFromlLocalStorage('zzz');
	if (hashInLocalStorage) {
		hash = hashInLocalStorage
	}
	return {
		"keys": keys,
		"hash": hash
	}
}

function generateKeyboard(keys, hash) {

	for (var index = 0; index < keys['length']; index = index + 1) {

		var div = tag('div', {
			className: 'row'
		});
		// div.className = 'row';

		main.appendChild(div);

		var row = keys[index]; //第一个数组 第二个数组 第三个数组 
		console.log(row);


		for (var index2 = 0; index2 < row.length; index2 = index2 + 1) {

			var span = tag('span', {
				className: 'text',
				textContent: row[index2]
			});
			// span.textContent =  row[index2]; // 0-9 0-8 0-6 
			// span.className = 'text';
			// kbd.appendChild(span);
			// kbd.textContent = row[index2]; 
			// kbd.className = 'key';

			var button = tag('button', {
				id: row[index2],
				textContent: '编辑'
			});
			// button.textContent = '编辑';
			// button.id = row[index2];
			button.onclick = function(xzkjcnxlkcjlk) {
				//xzkjcnxlkcjlk.target 就是用户点击的元素
				var button2 = xzkjcnxlkcjlk.target;
				var img2 = (button2.nextSibling);
				var key = button2.id; // q w e r t 
				var x = prompt('给我一个网址'); // www.baidu.com
				hash[key] = x; // hash 变更
				img2.src = 'http://' + x + '/favicon.ico';
				img2.onerror = function(xxx) {
					xxx.target.src = 'icon.jpg'
				}
				localStorage.setItem('zzz', JSON.stringify(hash));
				console.log(hash);
			}

			var img = tag('img');
			if (hash[row[index2]]) {
				img.src = 'http://' + hash[row[index2]] + '/favicon.ico';
			} else {
				img.src = 'icon.jpg';
			}
			img.onerror = function(xxx) {
				xxx.target.src = 'icon.jpg'
			}

			var kbd = tag('kbd', {
				className: 'key'
			});
			kbd.appendChild(span);
			kbd.appendChild(button);
			kbd.appendChild(img);

			div.appendChild(kbd);
		}
	}
}

function listenUser(hash) {
	document.onkeypress = function(xzkjcnxlkcjlk) {
		var key = xzkjcnxlkcjlk['key'];
		var website = hash[key];
		//location.href = 'http://' + website;
		window.open('http://' + website, '_blank');
	}
}
