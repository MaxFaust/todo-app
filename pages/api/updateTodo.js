import { table, getMinifiedRecord } from './utils/Airtable';
import auth0 from './utils/auth0';
import OwnsRecord from './middleware/OwnsRecord';

export default OwnsRecord(async (req, res) => {
    const { id, fields } = req.body;
  try{
    const updatedRecords = await table.update([
        { id, fields },
    ]);
    console.log('updateTodo:', req.body)
    res.statusCode = 200;
    res.json(getMinifiedRecord(updatedRecords[0]));
  }catch(err){
      console.log(err);
    res.statusCode = 500;
    res.json({ msg: 'Something went wrong'});
  }
}
);