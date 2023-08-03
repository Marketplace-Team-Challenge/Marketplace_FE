import { useState } from "react";

export const useTogglePassword = () => {
    const [isShowPassword, setShowPassword] = useState(false);
    const [typePassword, setTypePassword] = useState('password');

    const togglePassInput = () => {
		if (typePassword === 'password') {
			setTypePassword('text');
			setShowPassword(true);
		} else {
			setTypePassword('password');
			setShowPassword(false);
		}
	};

    const iconStyleAuthPassword = {
        content: '""',
        position: "absolute",
        top: "50%",
        right: "15px",
        transform: "translateY(-50%)",
        width: "24px",
        height: "24px",
        backgroundImage: 
        isShowPassword ?
        `url("data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2234%22%20height%3D%2234%22%20viewBox%3D%220%200%2034%2034%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20cx%3D%2217%22%20cy%3D%2217%22%20r%3D%2217%22%20fill%3D%22white%22%2F%3E%3Cpath%20d%3D%22M26.257%2015.962C26.731%2016.582%2026.731%2017.419%2026.257%2018.038C24.764%2019.987%2021.182%2024%2017%2024C12.818%2024%209.23601%2019.987%207.74301%2018.038C7.51239%2017.7411%207.38721%2017.3759%207.38721%2017C7.38721%2016.6241%207.51239%2016.2589%207.74301%2015.962C9.23601%2014.013%2012.818%2010%2017%2010C21.182%2010%2024.764%2014.013%2026.257%2015.962V15.962Z%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3Cpath%20d%3D%22M17%2020C18.6569%2020%2020%2018.6569%2020%2017C20%2015.3431%2018.6569%2014%2017%2014C15.3431%2014%2014%2015.3431%2014%2017C14%2018.6569%2015.3431%2020%2017%2020Z%22%20stroke%3D%22black%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E")`
        :
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M16.7933%2013.6001C16.9848%2013.0885%2017.0819%2012.5464%2017.08%2012.0001C17.08%2010.7872%2016.5981%209.62392%2015.7405%208.76626C14.8828%207.90859%2013.7196%207.42676%2012.5066%207.42676C11.9671%207.42739%2011.432%207.52447%2010.9266%207.71342L12%208.82009C12.1631%208.79399%2012.3281%208.78061%2012.4933%208.78009C13.3509%208.7783%2014.1744%209.11592%2014.784%209.71922C15.3935%2010.3225%2015.7396%2011.1425%2015.7466%2012.0001C15.7461%2012.1653%2015.7327%2012.3303%2015.7066%2012.4934L16.7933%2013.6001Z%22%20fill%3D%22%23161616%22%2F%3E%3Cpath%20d%3D%22M22.86%2011.6867C20.6133%207.53335%2016.6733%205.02002%2012.3133%205.02002C11.1262%205.02281%209.94712%205.21408%208.82001%205.58669L9.89334%206.66669C10.6839%206.46237%2011.4968%206.35712%2012.3133%206.35335C16.0667%206.35335%2019.48%208.44669%2021.5133%2011.9734C20.7674%2013.2818%2019.7786%2014.4357%2018.6%2015.3734L19.5467%2016.32C20.9107%2015.2196%2022.0436%2013.8601%2022.88%2012.32L23.0533%2012L22.86%2011.6867Z%22%20fill%3D%22%23161616%22%2F%3E%3Cpath%20d%3D%22M3.24667%203.85344L6.22%206.82677C4.34062%208.03685%202.8046%209.71062%201.76%2011.6868L1.58667%2012.0001L1.76%2012.3201C4.00667%2016.4734%207.94667%2018.9868%2012.3067%2018.9868C14.0084%2018.9864%2015.6881%2018.6013%2017.22%2017.8601L20.5533%2021.1934L21.72%2020.1934L4.38667%202.86011L3.24667%203.85344ZM9.74667%2010.3534L14.18%2014.7868C13.6791%2015.0968%2013.1024%2015.2629%2012.5133%2015.2668C12.0853%2015.2668%2011.6615%2015.1821%2011.2663%2015.0177C10.871%2014.8533%2010.5122%2014.6124%2010.2105%2014.3088C9.90875%2014.0052%209.67002%2013.6449%209.50804%2013.2487C9.34606%2012.8525%209.26403%2012.4281%209.26667%2012.0001C9.27418%2011.4178%209.44012%2010.8486%209.74667%2010.3534ZM8.78%209.38677C8.15629%2010.2664%207.86395%2011.3383%207.95475%2012.4128C8.04554%2013.4872%208.51361%2014.4949%209.27607%2015.2574C10.0385%2016.0198%2011.0462%2016.4879%2012.1207%2016.5787C13.1951%2016.6695%2014.2671%2016.3772%2015.1467%2015.7534L16.2133%2016.8201C14.9785%2017.3479%2013.6496%2017.6201%2012.3067%2017.6201C8.55333%2017.6201%205.14%2015.5268%203.10667%2012.0001C4.08247%2010.2723%205.48782%208.82557%207.18667%207.80011L8.78%209.38677Z%22%20fill%3D%22%23161616%22%2F%3E%3C/svg%3E\")",
        backgroundSize: "cover",
        cursor: 'pointer',
      };

    return {
        iconStyleAuthPassword,
        isShowPassword,
        typePassword,
        togglePassInput,
    };
}