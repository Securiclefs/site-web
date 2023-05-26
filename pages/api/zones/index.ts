import { log } from "console"
import { NextApiRequest, NextApiResponse} from "next"
import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
    keyFile: './config/client_secret_800531644339-lgaa358sag0bdfe2r1fs71ea050i56iu.apps.googleusercontent.com.json',
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

export default async function  zonesSheets(req: NextApiRequest, res: NextApiResponse) {

    try{
        const client = await auth.getClient();

        console.log("test1");
        

        const sheets = google.sheets('v4');

        const spreadsheetId = '1ghU12ULh3yWDnmZEz47Gt77R5lKpzw-bTHo_KEhr-vs';
        const range = 'Sheet1!A3:A125';

        const response = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range,
        });


        console.log("test2");

        const data = response.data.values;

        res.json({
            data: data
        })

    } catch(error){
        console.log(error);
        
        res.json({
            message: "Une erreur est survenue"
        })
    }
}


