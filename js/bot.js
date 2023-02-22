
function submitLoginForm(event){
        event.preventDefault();

        let name = event.target['name'].value
        let phone_number = event.target['phone'].value
        if (name.length >= 3 && phone_number.length == 13 && phone_number.startsWith("+998")){
            let message = `Name:${name} ----\n Phone Number:${phone_number}`;
      
            let chat_id  = 6130899998
            let token = "6104539927:AAG0pHxV_FGUUGwEw_xG4vOk84DcT61-dKs"
    
            let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}&parse_mode=HTML`;
    
            var oReq = new XMLHttpRequest();
            oReq.open("GET", url, true);
            oReq.send();

            event.target['name'].value = ''
            event.target['phone'].value = ''
        }

    }