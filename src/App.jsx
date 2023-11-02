import { useState } from 'react';

function App() {
    //원본배열
    const initialState = ['banana', 'apple', 'cherry', 'date', 'elderberry'];

    //리액트에서 화면이 변화 : state가 변경되어야 랜더링 다시 됨.
    const [array, setArray] = useState(initialState);
    const [result, setResult] = useState('');
    const [query, setQuery] = useState(''); // input을 위한 value

    //1.forEach
    //하나하나 순회하면서 출력가능
    const handleForEach = function () {
        let temp = '';
        array.forEach(function (item, index) {
            temp += `${index}: ${item} / `;
        });
        setResult(temp);
    };

    //2.filter
    //검색어에 포함한 값이 출력
    const handleFilter = function () {
        const filtered = array.filter((item, index) => item.includes(query));
        setResult(filtered.join(', '));
    };

    //3.map
    //하나하나 순회하면서 대문자로 가공 후 반환
    const handleMap = () => {
        const mapped = array.map((value) => value.toUpperCase(array));
        setResult(mapped.join(', '));
    };

    //4.reduce
    //누적, 배열의 모든 합구하기에 사용
    const handleReduce = () => {
        const reduced = array.reduce((prev, curr) => `${prev} + ${curr}`);
        setResult(reduced);
    };

    //5.push
    //배열 뒤에 추가
    const handlePush = () => {
        if (query.length <= 0) {
            alert('추가하려는 값을 입력하세요.');
            return false;
        }
        const newArray = [...array, query];
        setArray(newArray);
        setResult(newArray.join(', '));
    };

    //6.pop
    //배열 뒤에서 삭제
    const handlePop = () => {
        const newArray = [...array];
        newArray.pop();
        setArray(newArray);
        setResult(newArray.join(', '));
    };

    //7.slice
    //원본배열유지 + 새로운 배열 반환
    const handleSlice = () => {
        const sliced = array.slice(query);
        setResult(sliced.join(', '));
    };

    //8.splice
    //원본배열 같이 수정됨
    const handleSplice = () => {
        const spliced = array.slice(query);
        setResult(spliced.join(', '));
    };

    //9.indexOf
    //몇 번째 인덱스에 있는지 & 찾는 요소가 없으면 -1
    const handleIndexOf = () => {
        const indexOfValue = array.indexOf(query);
        setResult(indexOfValue);
    };

    //10.includes
    //포함되어있으면 true&false 반환
    const handleIncludes = () => {
        const includesValue = array.includes(query);
        //console.log(typeof includesValue); //boolean
        setResult(includesValue.toString());
    };

    //11.find
    //해당하는 첫번째 요소만 반환
    const handleFind = () => {
        const finded = array.find((item) => item.includes(query));
        console.log(finded);
        setResult(finded === undefined ? 'Not found' : finded);
    };

    //12.some
    //특정조건이 하나라도 있니?
    const handleSome = () => {
        const SomeValue = array.some((item) => item === query);
        //console.log(SomeValue);
        setResult(SomeValue.toString());
    };

    //13.every
    //콜백함수 내부에 들어가는 조건이 모두 만족하는지?
    //각 요소가 모두 2글자 이상의 길이를 가진 경우 true를 반환
    const handleEvery = () => {
        const everylength = array.every((item) => item.length >= 2);
        setResult(everylength.toString());
    };

    //14.sort
    //정렬
    const handleSort = () => {
        const newArr = [...array];
        const sorted = newArr.sort();
        setResult(sorted.join(', '));
    };

    //15.join
    //특정 구분값으로 텍스트로 합칠때
    const handleJoin = () => {
        const joined = array.join(', ');
        setResult(joined);
    };

    const stylesDiv = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px',
    };

    const styleOriginDiv = {
        border: '1px solid',
        margin: '10px',
        padding: '10px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30px',
    };

    const styleRsultDiv = {
        border: '1px solid red',
        margin: '10px',
        padding: '10px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30px',
    };

    return (
        <div style={stylesDiv}>
            <h1>Standard반 배열 API 테스트</h1>
            <input
                value={query}
                onChange={function (e) {
                    setQuery(e.target.value);
                }}
            />
            <div styles={stylesDiv}>
                <button onClick={handleForEach}>forEach</button>
                <button onClick={handleFilter}>filter</button>
                <button onClick={handleMap}>map</button>
                <button onClick={handleReduce}>reduce</button>
                <button onClick={handlePush}>push</button>
                <button onClick={handlePop}>pop</button>
                <button onClick={handleSlice}>slice</button>
                <button onClick={handleSplice}>splice</button>
                <button onClick={handleIndexOf}>indexOf</button>
                <button onClick={handleIncludes}>includes</button>
                <button onClick={handleFind}>find</button>
                <button onClick={handleSome}>some</button>
                <button onClick={handleEvery}>every</button>
                <button onClick={handleSort}>sort</button>
                <button onClick={handleJoin}>join</button>
            </div>
            <div style={styleOriginDiv}>
                <h3>원본배열: </h3>
                <p>{array.join(', ')}</p>
            </div>
            <div style={styleRsultDiv}>
                <h3>결과물:</h3>
                <p> {result}</p>
            </div>
        </div>
    );
}
export default App;
