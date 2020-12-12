import { table, getMinifiedRecord } from './utils/Airtable';
import auth0 from './utils/auth0';
import OwnsRecord from './middleware/OwnsRecord';

export default OwnsRecord(async (req, res) => {
    const { id } = req.body;
    const { user } = await auth0.getSession(req);

  try{
    const deletedRecords = await table.destroy([id]);
    res.statusCode = 200;
    res.json(getMinifiedRecord(deletedRecords[0]));
  }catch(err){
    res.statusCode = 500;
    res.json({ msg: 'Something went wrong'});
  }
}
);