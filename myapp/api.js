const API = 'http://192.168.1.72:3000/tasks'

export const getTasks = async () => {
    const res = await fetch(API, {
      method: "GET",
    });
  
    return await res.json();
  };

  export const saveTask = async (newTask)=>{
     const res =await fetch(API, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(newTask)
  
    });
  return await res.json()
  }