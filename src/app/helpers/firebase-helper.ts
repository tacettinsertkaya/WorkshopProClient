export const snapshotToArray = (snapshot: any) => {
    const returnArr = [];
  
    snapshot.forEach((childSnapshot: any) => {
        const item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });
  
    return returnArr;
  };