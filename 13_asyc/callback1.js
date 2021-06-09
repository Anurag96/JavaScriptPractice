const fetchData = (userId,callback)=>{
    setTimeout(()=>{
    const fakeData = {
        id: userId,
        name:'George'
    } ;  
      callback(fakeData);
    }, 50);
  };
const cb = data => {
    console.log("Here's your data:", data);
  };
  
  fetchData(5, cb);