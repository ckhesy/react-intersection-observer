#### 业务场景： 曝光埋点
#### 实现方案：
传统的实现方法是，监听到scroll事件后，调用目标元素的getBoundingClientRect()方法，得到它对应于视口左上角的坐标，再判断是否在视口之内。这种方法的缺点是，由于scroll事件密集发生，计算量很大，容易造成性能问题。



目前有一个 IntersectionObserver API，可以自动"观察"元素是否可见，直接翻译就是交叉观察器。

### API 使用方法
首先要new一个实例对象，我们会在这个实例对象上进行操作
```
 var io = new IntersectionObserver(callback, option);
```
IntersectionObserver是浏览器原生提供的构造函数，接受两个参数：callback是可见性变化时的回调函数，option是配置对象（该参数可选）。

```
// 开始观察
io.observe(document.getElementById('example'));

// 停止观察
io.unobserve(element);

// 关闭观察器
io.disconnect();
```

如果想要观察多个dom节点，就多次调用observe方法

```
io.observe(elementA);
io.observe(elementB);
```

#### callback 参数的使用
callback一般会触发两次。一次是目标元素刚刚进入视口（开始可见），另一次是完全离开视口（开始不可见）。

```
var io = new IntersectionObserver(
  entries => {
    console.log(entries);
  }
);
```
以上entries是一个数组，每个成员都是一个IntersectionObserverEntry对象，，如果同时有两个被观察的对象的可见性发生变化，entries数组就会有两个成员。

[IntersectionObserverEntry](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry)

#### IntersectionObserverEntry 对象

IntersectionObserverEntry对象提供目标元素的信息，一共有六个属性。
```

{
  time: 3893.92,
  rootBounds: ClientRect {
    bottom: 920,
    height: 1024,
    left: 0,
    right: 1024,
    top: 0,
    width: 920
  },
  boundingClientRect: ClientRect {
     // ...
  },
  intersectionRect: ClientRect {
    // ...
  },
  intersectionRatio: 0.54,
  target: element
}
```

- time：可见性发生变化的时间，是一个高精度时间戳，单位为毫秒
- target：被观察的目标元素，是一个 DOM 节点对象
- rootBounds：根元素的矩形区域的信息，getBoundingClientRect()方法的返回值，如果没有根元素（即直接相对于视口滚动），则返回null
- boundingClientRect：目标元素的矩形区域的信息
- intersectionRect：目标元素与视口（或根元素）的交叉区域的信息
- intersectionRatio：目标元素的可见比例，即intersectionRect占boundingClientRect的比例，完全可见时为1，完全不可见时小于等于0

#### 进阶  react-intersection-observer

test