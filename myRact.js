
(function() {

  function Element(tagName, props, children) {
    this.tagName = tagName;
    this.props = props;
    this.children = children;
  }

  Element.prototype.render = function () {
    // 创建真实dom
    var el = document.createElement(this.tagName);
    // 属性
    var props = this.props;

    // 为标签添加属性
    for (let propName in props) {
      propValue = props[propName];
      el.setAttribute(propName, propValue);
    }

    this.children.length && this.children.forEach(function (child) {
      var childEl;
      //还是对象，继续递归
      if (child && child instanceof Object) {
        child = new Element(child.tagName, child.props, child.children);
        childEl = child.render();
      } else {
        childEl = document.createTextNode(child);
      }
      el.appendChild(childEl);
    });

    return el;
  }

  var ul = new Element('ul', {
    id: 'list'
  }, [{
      tagName: 'li',
      props: {
        class: 'item'
      },
      children: ["Item 1"]
    },
    {
      tagName: 'li',
      props: {
        class: 'item'
      },
      children: ["Item 2"]
    },
    {
      tagName: 'li',
      props: {
        class: 'item'
      },
      children: ["Item 3"]
    }
  ]);

  let ulRoot = ul.render();
  let el = document.getElementById('root');
  el.appendChild(ulRoot);
})()
// function ReactComponent(props, context, updater) {
//   this.props = props;
//   this.context = context;
//   this.updater = updater;
// }

// var React = {
//   createElement: createElement,
// };

// function Element(tagName, props, children) {
//   this.tagName = tagName;
//   this.props = props;
//   this.children = children;
// }

// Element.prototype.render = function () {
//   // 创建真实dom
//   var el = document.createElement(this.tagName);
//   // 属性
//   var props = this.props;

//   // 为标签添加属性
//   for (let prop in props) {
//     propValue = props.prop;
//     el.setAttribute(propName, propValue)
//   }

//   this.children.forEach((child) => {
//     var childEl = (child instanceof Element) ?
//       child.render() :
//       document.createTextNode(child)
//     el.appendChild(childEl)
//   })
//   return el;
// }


