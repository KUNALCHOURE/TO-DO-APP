import {createContext, useContext } from "react";

export const todocontext=createContext({
 todos:[
    { }
 ],
 addtodo:(todo)=>{},
 updatetodo:(id,todo)=>{},
 deletetodo:(id)=>{},
 togglecomplete:(id)=>{}
});

export const Todocontextprovider=todocontext.Provider;

//custom hook for using themecontext default function members

export default function usetodo(){
    return useContext(todocontext);
}