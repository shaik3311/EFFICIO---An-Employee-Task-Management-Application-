import React, { useEffect, useState } from 'react'
import {createContext} from 'react'

export const DataContext = createContext();

const DataProvider = ({children}) => {

    const[employees,setEmployees] = useState([]);
    const[admins,setAdmins] = useState([]);
    const[allTasks,setAllTasks] = useState([]);
    const[allEmployeeNames,setAllEmployeeNames] = useState([]);
    const[loggedInUser,setLoggedInUser] = useState({});



    useEffect(() => {
        try {
            const storedEmployees = localStorage.getItem('employees');
            const storedAdmins = localStorage.getItem('admins');
            const storedTasks = localStorage.getItem('tasks');

            setEmployees(
                storedEmployees && storedEmployees !== "undefined"
                    ? JSON.parse(storedEmployees)
                    : []
            );

            setAdmins(
                storedAdmins && storedAdmins !== "undefined"
                    ? JSON.parse(storedAdmins)
                    : []
            );
            setAllTasks(
                storedTasks && storedTasks !== "undefined"
                    ? JSON.parse(storedTasks)
                    : []
            );
        } catch (error) {
            console.error("LocalStorage parse error:", error);
            setEmployees([]);
            setAdmins([]);
            setAllTasks([])
        }
    }, []);

    useEffect(()=>{
        localStorage.setItem('employees',JSON.stringify(employees));
        localStorage.setItem('admins',JSON.stringify(admins));
        localStorage.setItem('tasks',JSON.stringify(allTasks));
        localStorage.setItem('loggedInUser',JSON.stringify(loggedInUser));
    },[employees,admins,allTasks,loggedInUser]);

    // storing all employee names in a state 
    useEffect(()=>{
        let empNames = [];
        for(let i=0;i<employees.length;i++){
            empNames.push(employees[i].userName);
        }
        setAllEmployeeNames(empNames);
    },[employees]);

    // Adding a new Admin 
    const addAdmin = (admin)=>{
        const newAdmins = [...admins];
        newAdmins.push(admin);
        setAdmins(newAdmins);
    };
    // Adding a new employee 
    const addEmployee = (employee)=>{
        const newEmployees = [...employees];
        newEmployees.push(employee);
        setEmployees(newEmployees);
    };
    // Remove a employee 
    const removeEmployee = (userName) => {
        const updatedEmployees = employees.filter((emp) => emp.userName !== userName);
        setEmployees(updatedEmployees);
    };
    // setting current logged user 
    const setLoggedUser = (user)=>{
        setLoggedInUser(user);
    };
    // Removing current logged user  
    const removeLoggedUser = ()=>{
        setLoggedInUser({});
    };
    // adding a new task 
    const addTask = (task)=>{
        const newTasks = [...allTasks];
        newTasks.push(task);
        setAllTasks(newTasks);
    };
    // removing a task 
    const removeTask = (task_id) => {
        const updatedTasks = allTasks.filter(task => task.task_id != task_id);
        setAllTasks(updatedTasks);
    };
    // replace a task
    const replaceTask = (task_id, newTask) => {
        const updatedTasks = allTasks.map(task =>
            task.task_id === task_id ? { ...task, ...newTask } : task
        );
        setAllTasks(updatedTasks);
    };

    

    
  return (
    <div>
        <DataContext.Provider value={{
            employees,
            admins,
            allTasks,
            loggedInUser,
            allEmployeeNames,
            addAdmin,
            addEmployee,
            removeEmployee,
            setLoggedUser,
            removeLoggedUser,
            addTask,
            removeTask,
            replaceTask
        }}>
            {children}
        </DataContext.Provider>
    </div>
  )
}

export default DataProvider