var keys = {
			0:['q','w','e','r','t','y','u','i','o','p'],
			1:['a','s','d','f','g','h','j','k','l'],
			2:['z','x','c','v','b','n','m'],
			length:3
	}
var hash = {
			q:'qq.com',
			w:'weibo.com',
			e:'ele.me',
			r:'renren.com',
			t:'tianya.com',
			y:'youtube.com',
			u:'uc.com',
			i:'iqiyi.com',
			o:'opera.com',
			p:undefined,
			a:'acfun.tv',
			s:'sohu.com',
			z:'zhihu.com',
			m:'www.mcdonalds.com.cn'
	}
	//取出 localStorage 中的 zzz 对应的 hash
	var hashInLocalStorage = JSON.parse(localStorage.getItem('zzz') || 'null');
	if (hashInLocalStorage) {
		hash = hashInLocalStorage
	}
	// 遍历 keys 生成 kbd 标签
index = 0;
while(index < keys['length']){ // 0 1 2 
			x = document.createElement('div');
			mainXXX.appendChild(x);
			row = keys[index]; //第一个数组 第二个数组 第三个数组 
			console.log(row);
			index2 = 0;
			while(index2 < row.length){
				z = document.createElement('kbd');
				z.textContent = row[index2]; // 0-9 0-8 0-6 
				buttonX = document.createElement('button');
				buttonX.textContent = '编辑';
				buttonX.id = row[index2];
				buttonX.onclick = function(xzkjcnxlkcjlk){
					//xzkjcnxlkcjlk.target 就是用户点击的元素
					key = xzkjcnxlkcjlk.target.id; // q w e r t 
					x = prompt('给我一个网址');   // www.baidu.com
					hash[key] = x; // hash 变更
					localStorage.setItem('zzz',JSON.stringify(hash));
					console.log(hash);
				}
				z.appendChild(buttonX);
				x.appendChild(z);
				index2 = index2 + 1;
			}
			index = index + 1;
	}

document.onkeypress = function(xzkjcnxlkcjlk){
	key = xzkjcnxlkcjlk['key'];
	website = hash[key];
	//location.href = 'http://' + website;
	window.open('http://' + website,'_blank');
}