const API = 'http://192.168.1.72:3000/tasks'

export const getTasks = async () => {
    const res = await fetch(API, {
      method: "GET",
    });
  
    return await res.json();
  };

  export const getTask = async (id) =>{
    const res = await fetch(`${API}/${id}`) ;
    return await res.json();
  }

  export const saveTask = async (newTask) => {
    const res = await fetch(API, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    return await res.json();
  };

  export const deleteTask = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });
    
  }

  export const updateTask = async (id, newTask) =>{
    const res = await fetch(`${API}/${id}`,{
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
    return res;
  }