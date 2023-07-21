import axios from "axios"
import { application, urlencoded } from "express"
import { HOST, PAYPAL_API, PAYPAL_API_CLIENT, PAYPAL_API_SECRET_KEY } from "../config.js"
import { token } from "morgan";

export const crearOrden = async (req, res) => {
    try {
        // const { monto } = req.body;
        // console.log(monto);
        const order = {
            intent: "CAPTURE",
            purchase_units: [
                {
                amount:{
                    currency_code: "USD",
                    value: 10.00
                },
                description: "Reporte técnico de la inspección del vehículo",
                },
            ],
            application_context:{
                brand_name: "chekea.com",
                landing_page: "LOGIN",
                user_action: "PAY_NOW",
                return_url: `${HOST}/capturar-orden`, 
                cancel_url: `${HOST}/cancelar-orden`, 
    
            },
    
        };
    
        const params = new URLSearchParams()
        params.append("grant_type", "client_credentials")
    
        const { data: {access_token} } = await axios.post('https://api-m.sandbox.paypal.com/v1/oauth2/token', params, {
            headers:{
                "Content-Type": 'application/x-www-form-urlencoded',
            },
            auth:{
                username: PAYPAL_API_CLIENT,
                password: PAYPAL_API_SECRET_KEY,
            },
        });
    
        console.log(access_token)
            
       const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders`, order, {
            headers:{
                Authorization: `Bearer ${access_token}`
            },
        });
    
        //console.log(response.data);
    
        res.json(response.data); 
        
    } catch (error) {
        console.log(error);
        return res.status(500).send('Se ha registrado un error');
        
    }
};

export const capturarOrden = async (req, res) => {

    const {token} = req.query

    const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`,{},
    {
        auth:{
            username: PAYPAL_API_CLIENT,
            password: PAYPAL_API_SECRET_KEY,
        }
    })

    console.log(response.data);
    
    return res.redirect('/')
};

export const cancelarOrden = (req, res) => {
    return res.redirect('/')
};
