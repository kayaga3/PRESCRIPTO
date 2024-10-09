import { createContext, useState } from "react";
import {doctors} from "../assets/assets"



export const AppContext = createContext();

const AppContextProvider = (props) => {

  const currencySymbol = '$'
  const [bookedAppointments, setBookedAppointments] = useState([])

  


  const value = {
    doctors, currencySymbol, bookedAppointments, setBookedAppointments,
  }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider