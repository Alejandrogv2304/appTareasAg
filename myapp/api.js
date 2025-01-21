const API = 'http://192.168.1.72:3000/tasks'

export const getTasks = async () => {
    const res = await fetch(API, {
      method: "GET",
    });
  
    return await res.json();
  };