
import React, { useState } from "react";
import { Inter } from "next/font/google";
import DatePicker from "react-datepicker";
import { registerLocale} from  "react-datepicker";
const inter = Inter({ subsets: ["latin"] });
import "react-datepicker/dist/react-datepicker.css";
import ru from 'date-fns/locale/ru';
registerLocale('ru', ru)

export default function Home() {
  const [selected, setSelected] = useState(new Date());
  const onChange = val => {
    setSelected(val);
    window.Telegram.WebApp.sendData(JSON.stringify(val));
  }
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
       <DatePicker
      selected={selected}
      onChange={onChange}
      open={true}
      showTimeSelect
      dateFormat="dd-MMM-yyyy HH:mm"
      locale={ru}      
    />    
    </main>
  );
}
