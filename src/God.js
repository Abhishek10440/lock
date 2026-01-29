function God() {
  const [data,setData]=useState(null)
  function getData(val)
  {
    console.log(val.target.value)
    setData(val.target.value)
  }
  return (
    <div className="App">
      <h1>{data}</h1>
      <input type="text" onChange={getData}/>
      <button></button>
    </div>
  );
}
export default God