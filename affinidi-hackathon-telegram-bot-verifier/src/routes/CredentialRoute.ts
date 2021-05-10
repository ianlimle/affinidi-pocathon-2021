import express, { Request, Response } from 'express';
import randomstring from 'randomstring';
import firebase from '../utils/firebase';

const router = express.Router({
  strict: true,
});

// @route   POST /save_res_token
// @desc    To store response token in firebase and return a documentID
router.post(
  '/save_res_token',
  async (req: Request, res: Response): Promise<any> => {
    try {
      const docID = randomstring.generate(10);
      const db = firebase.firestore();
      await db.collection('token').doc(docID).set({ token: req.body.token });
      const return_url: string = `http://localhost:4000/api/credential/get_res_token?docID=${docID}`;
      return res.json({ return_url });
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
);

// @route   GET /get_res_token
// @desc    To get response from firebase
router.get(
  '/get_res_token',
  async (req: Request, res: Response): Promise<any> => {
    try {
      const docID: any = req.query.docID || '';
      if (docID) {
        const db = firebase.firestore();
        const doc = await db.collection('token').doc(docID).get();
        const data: any = doc.data();
        const token = data.token;
        return res.json({ token });
      }
      return res.status(400).json({ message: 'Something wrong' });
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
);

export default router;
