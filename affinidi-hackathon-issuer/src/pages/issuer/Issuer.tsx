import React, { useState, useEffect } from 'react';
import 'pages/issuer/Issuer.scss';
import firebase from 'utils/firebase/firebase';
import AdminList from 'components/admin/AdminList';

const Issuer: React.FC = (): React.ReactElement => {
  const [pendingApproval, setPendingApproval] = useState<any>([]);
  const [approved, setApproved] = useState<any>([]);

  useEffect(() => {
    const fetchDataHelper = async (table: string) => {
      try {
        const db = firebase.firestore();
        const fetch = await db.collection(table).get();
        const information = fetch.docs.map((doc) => {
          return { ...doc.data(), docID: doc.id };
        });
        return information;
      } catch (error) {
        console.log(error);
        return [];
      }
    };

    const fetchData = async () => {
      const pendingApprovalData = await fetchDataHelper('id-waiting-approval');
      setPendingApproval(pendingApprovalData);
      const approvedData = await fetchDataHelper('id-approved');
      setApproved(approvedData);
    };
    fetchData();
  }, []);

  return (
    <div className='tutorial'>
      <div className='tutorial__step'>
        <h3>
          <strong>Pending Approval</strong>
        </h3>
        {pendingApproval.length !== 0 ? (
          pendingApproval.map((x: any) => (
            <div key={x.docID}>
              <AdminList data={x} />
            </div>
          ))
        ) : (
          <p>No Pending Approvals</p>
        )}

        <h3>
          <strong>Approved Applications</strong>
        </h3>
        {approved.length !== 0 ? (
          approved.map((x: any) => (
            <div key={x.docID}>
              <AdminList data={x} />
            </div>
          ))
        ) : (
          <p>No Approved Applications</p>
        )}
      </div>
    </div>
  );
};

export default Issuer;
