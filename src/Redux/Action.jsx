
export const Logindata=(item)=>{

    return{
      type:"Userdata",
      payload:item

    };
}


export const Signupdata=(payload)=>{
    return{
        type:"Sign",
        payload:payload
    }
}

export const WatchView=(data)=>{
    return{
      type:"View",
      payload:data,
    }
};

export  const Modelstore=(value)=>{
  return{
    type:"Model",
    payload:value,
  }
};

export const LogoutUser = () => {
  return {
    type: "LOGOUT"
  };
};

export const Purchase=(amount)=>{

  return{
    type:"BUY",
    payload:amount,
  }
}

export const LogoutPurchase=()=>{
  return{
    type:"LOGOUTBUY"
  }
}

export const  YouTubeVideo=(video)=>{
  return{
    type:"YouTube",
    payload:video,
  }
}

export const BuycardVideos=(item)=>{
  return{
    type:"Price",
    payload:item
  }

}

export const Viewcarddata=(item)=>{
  return{
    type:"ViewDetail",
    payload:item
  }


}

export const Addressdata=(item)=>{
  return{
    type:"AddressStore",
    payload:item
  }
}

export const LogoutAdders=(index)=>{
  return{
    type:"LOGOUTAdd",
    payload:index,
  }
}

export const Editaddressdata=(item, index)=>{
  return{
    type:"EDIT_ADDRESS",
    payload: {
      updatedData: item,
      index: index
    }

  }
}

export const Addtocartdata=(item)=>{
return{
  type:"Addcart",
  payload:item
}
}

export const Removecartdata=(id)=>{
  return{
    
    type:"Remove",
    payload:id,

  }
}

export const Idstore=(id)=>{
  return{
    type:"particulerid",
    payload:id
  }
}

export  const Viewdetailsby=(item)=>{
  return{
    type:"Viewcards",
    payload:item

  }
}

export  const buyall=(item)=>{
  return{
    type:"Buy_all",
    payload:item
  }
}

export const commentdata=(sendid,inputdata ,rating)=>{
  return{
    type:"commentType",
    payload:{sendid, inputdata, rating}
  }
}

export  const magazinedata=(item)=>{
  return{
    type:"magazineType",
    payload:item
  }
}

export const  magazineid=(item)=>{
  return{
    type:"magaId",
    payload:item,
  }
}

export const datapdf=(item)=>{
  return{
    type:"PDFID",
    payload:item
  }
}

export  const myorderdata=(item)=>{
  return{
    type:"Order",
    payload:item
  }
}

export const Bookmart=(item)=>{
  return{
    type:'Bookmartdata',
    payload:item

  }
}

export const Bookid=(id)=>{
  return{
    type:"BOOK_ID",
    payload:id
  }
}

export const bookmarkiddelete=(id)=>{
  return{
    type:"BOOK_Delete",
    payload:id
  }
}

// export const Watchdata=()=>{
//     return{

//         type:"watch",
//         payload:item
//     }
// }
