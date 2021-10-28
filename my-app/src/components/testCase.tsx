import React, { useRef, useState, useCallback, useMemo } from 'react';
// https://note.youdao.com/ynoteshare/index.html?id=a3c1ef11f18a210d8fe929183cf049dc&type=note&_time=1635326278458
const Child = (props: any) => {
  const {name:{text = '111' ,color = 'red'} = {}, onClick} = props;
  console.log('子组件update')
  return (
    <>
    <div style={{ color: color }}>{text}</div>
    <button onClick={onClick.bind(null, '新的子组件name')}>改变name</button>
    </>
  );
}
const ChildMemo = React.memo(Child)
function areEqual(prevProps: any, nextProps: any) {
  /*
  如果把 nextProps 传入 render 方法的返回结果与
  将 prevProps 传入 render 方法的返回结果一致则返回 true，
  否则返回 false
  */
  console.log(prevProps, nextProps)
  return true;
}
const Page = (props:any) => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('xiaoming')
  return (
    <React.Fragment>
      <button onClick={(e) => { setCount(count + 1) }}>加1</button>
      <p>count:{count}</p>
      <button onClick={(e) => { setName(name + '1') }}>name 加 1</button>
      <ChildMemo name={useMemo(() => ({ text: name, color: 'green' }), [name])} onClick={  useCallback((newName) => setName(newName), [])}/>
    </React.Fragment>
  )
}
export default Page