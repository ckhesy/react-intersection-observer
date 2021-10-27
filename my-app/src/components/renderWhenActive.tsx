// import React, { useRef } from 'react';


// // 得到组件 active 状态 -> 阻塞非 active 组件的重渲染。

// class RenderWhenActive extends React.Component {
//   public shouldComponentUpdate(nextProps:any) {
//     return nextProps.active;
//   }

//   public render() {
//     return this.props.children
//   }
// }


// const ComponentLoader = (props:any) => {
//   // const active = useActive();
//   return null
//   // return <RenderWhenActive active={active}>{props.children}</RenderWhenActive>;
// };


// // const Component = (props: any) => {
// //   return <ComponentLoader>
// //     <SubComponent />
// //   </ComponentLoader>
// // }
// export default ComponentLoader;



// export function useActive(domId: string, rootId:string) {
//   // 所有元素默认 unActive
//   const [active, setActive] = React.useState<boolean|undefined>(false);

//   React.useEffect(() => {
//     const visibleObserve = new VisibleObserve(domId, rootId, setActive);

//     visibleObserve.observe();

//     return () => visibleObserve.unobserve();
//   }, [domId]);

//   return active;
// }

// class AVisibleObserve {
//   /**
//    * 监听元素的 DOM ID
//    */
//    protected targetDomId: string;

//    /**
//     * 可见范围根节点 DOM ID
//     */
//    protected rootDomId: string;
  
//    /**
//     * Active 变化回调
//     */
//    protected onActiveChange: (active?: boolean) => void;
//    actualVisibleObserve: () => void;
//    constructor(targetDomId: string, rootDomId: string, onActiveChange: (active?: boolean) => void) {
//     this.targetDomId = targetDomId;
//     this.rootDomId = rootDomId;
//     this.onActiveChange = onActiveChange;
//     this.actualVisibleObserve = new IntersectionVisibleObserve(targetDomId, rootDomId, onActiveChange);
//   }
//   /**
//    * 开始监听
//    */
//    observe(){
     
//    }
//    unobserve(){
     
//    }
// }



// class VisibleObserve extends AVisibleObserve {
//   /**
//    * 实际 VisibleObserve 类
//    */
//   private actualVisibleObserve: AVisibleObserve = null;

//   constructor(targetDomId: string, rootDomId: string, onActiveChange: (active?: boolean) => void) {
//     super(targetDomId, rootDomId, onActiveChange);

//     // 根据浏览器 API 兼容程度选用不同 Observe 方案
//     if ('IntersectionObserver' in window) {
//       // 最新 IntersectionObserve 方案
//       this.actualVisibleObserve = new IntersectionVisibleObserve(targetDomId, rootDomId, onActiveChange);
//     }
//   }

//   observe() {
//     this.actualVisibleObserve.observe();
//   }

//   unobserve() {
//     this.actualVisibleObserve.unobserve();
//   }
// }


// class IntersectionVisibleObserve extends AVisibleObserve {
//   /**
//    * IntersectionObserver 实例
//    */
//   private intersectionObserver: IntersectionObserver;

//   constructor(targetDomId: string, rootDomId: string, onActiveChange: (active?: boolean) => void) {
//     super(targetDomId, rootDomId, onActiveChange);

//     this.intersectionObserver = new IntersectionObserver(
//       changes => {
//         if (changes[0].intersectionRatio > 0) {
//           onActiveChange(true);
//         } else {
//           onActiveChange(false);

//           // 因为虚拟 dom 更新导致实际 dom 更新，也会在此触发，判断 dom 丢失则重新监听
//           if (!document.body.contains(changes[0].target)) {
//             this.intersectionObserver.unobserve(changes[0].target);
//             this.intersectionObserver.observe(document.getElementById(this.targetDomId));
//           }
//         }
//       },
//       {
//         root: document.getElementById(rootDomId),
//       },
//     );
//   }

//   observe() {
//     if (document.getElementById(this.targetDomId)) {
//       this.intersectionObserver.observe(document.getElementById(this.targetDomId));
//     }
//   }

//   unobserve() {
//     this.intersectionObserver.disconnect();
//   }
// }

export {}