（1）实现React.js对于属性ref的支持：

function SearchForm({ onSearch }) {
    let input;
    return (
        <div>
            <input
                ref={node => input = node}
                type="text"
            />
            <button
                onClick={() => onSearch(input.value)}
                type="button"
            >
                Search
            </button>
        </div>
    );
}
ReactDOM.render(SearchForm, document.getElementById('root'));


具体可以参考
https://www.robinwieruch.de/react-ref-attribute-dom-node/