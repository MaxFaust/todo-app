import auth0 from '../utils/auth0';
import {table} from '../utils/Airtable';

const ownsRecord = (handler) => auth0.requireAuthentication(async (rec, res) => {
    const { user } = await auth0.getSession(req);
    const { id } = req.body;

    try {
        const existingRecord = await table.find(id);

        if (!existingRecord || user.sub !== existingRecord.fields.userId) {
            res.statusCode = 404;
            return res.json({msg: 'Record not found'})
        }
        req.record = existingRecord;
        return handler(req, res);
    } catch (error) {
        console.log(error);
        res.statusCode({msg: 'something went wrong'})
        
    }
}
);

export default ownsRecord;