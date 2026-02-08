import React, { useEffect, useState } from 'react'
import {createContext} from 'react'

export const DataContext = createContext();

const DataProvider = ({children}) => {

    const[employees,setEmployees] = useState([]);
    const[admins,setAdmins] = useState([]);
    const[loggedInUser,setLoggedInUser] = useState({});



    useEffect(() => {
        try {
            const storedEmployees = localStorage.getItem('employees');
            const storedAdmins = localStorage.getItem('admins');

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
        } catch (error) {
            console.error("LocalStorage parse error:", error);
            setEmployees([]);
            setAdmins([]);
        }
    }, []);

    useEffect(()=>{
        localStorage.setItem('employees',JSON.stringify(employees));
        localStorage.setItem('admins',JSON.stringify(admins));
        localStorage.setItem('loggedInUser',JSON.stringify(loggedInUser));
    },[employees,admins,loggedInUser]);

    const addAdmin = (admin)=>{
        const newAdmins = [...admins];
        newAdmins.push(admin);
        setAdmins(newAdmins);
    };
    const addEmployee = (employee)=>{
        const newEmployees = [...employees];
        newEmployees.push(employee);
        setEmployees(newEmployees);
    };
    const setLoggedUser = (user)=>{
        setLoggedInUser(user);
    };
    const removeLoggedUser = ()=>{
        setLoggedInUser({});
    }

    
  return (
    <div>
        <DataContext.Provider value={{
            employees,
            admins,
            addAdmin,
            addEmployee,
            setLoggedUser,
            removeLoggedUser
        }}>
            {children}
        </DataContext.Provider>
    </div>
  )
}

export default DataProvider