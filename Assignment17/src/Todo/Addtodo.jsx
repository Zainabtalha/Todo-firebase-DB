import { useEffect, useState } from 'react'
import {database} from '../config/firebase'
import { collection,addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { Button, Input, Typography } from '@mui/material'
import { MdEdit } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";


const Addtodo = () => {
  const [item,SetITem] = useState('')
  const [userData, setUserData] = useState([]); 
  const [refresh, setRefresh] = useState(false);

  const addData = async () => {
    try {
        let userObj = {item};
        const postData = await addDoc(collection(database, "users"), userObj);
        console.log("postData", postData);
        setUserData([...userData, { item, id: postData.id }]);
        SetITem('');
    } 
    catch (error) {
        console.log("error", error);
      }
    };

    const getData = async () => {
        try {
          const arr = [];
          const getData = await getDocs(collection(database, "users"));
    
          getData.forEach((doc) => {
            arr.push({ ...doc.data(), id: doc.id });
          });
    
          setUserData(arr);
        } catch (error) {
          console.log(error);
        }
      };

    useEffect(() => {
        getData();
      }, [refresh]);

      const EditData = async (id) => {
        console.log("id", id);
    
        let updateVal = prompt("Enter edit value");
    
        let updateObj = {
          item: updateVal,
        };
    
        const updateData = await updateDoc(doc(database, "users", id), updateObj);
        console.log("updateData", updateData);
        setRefresh(!refresh);
        
      };

      const DeleteData = async (id) => {
        const deleteUser = await deleteDoc(doc(database, "users", id));
        console.log(deleteUser)
    
        setRefresh(!refresh);
      };
    
         
    return (
    <form>
      <Typography align='center' mt={10}>
         <Input style={{alignItems:'center',
          textAlign:'center'}}
        type='text' 
        placeholder='Enter todo...'
        value={item}
        onChange={(e) => SetITem(e.target.value)}  
        />
    
      <Button onClick={addData}>ADD</Button>
      </Typography>
      { userData.map((e,i)=>{
            return(
                <Typography variant='h5' color={'green'} align='center' key={i} border={"2px solid lightblue"} mt={3}>
                    {e.item} 
                    <MdEdit style={{
                        marginLeft:15,marginRight:5,color:'yellowgreen'}} onClick={()=>EditData(e.id)} />
                    <MdOutlineDeleteOutline style={{
                      color:"red"}}  onClick={()=>DeleteData(e.id)}/>
                </Typography>
            )
        })
      }
    </form>
  )
}

export default Addtodo