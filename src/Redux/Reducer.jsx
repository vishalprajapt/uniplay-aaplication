
 import { combineReducers } from "redux";
import Address from "../FrantPage/Buy";
import { magazinedata } from "./Action";


const initialState={
    user:null,
}

const UserReducer=(state=initialState, action)=>{
    switch(action.type){
        case "Userdata":
        return{
            ...state,
            user:action.payload,
        };
        case "Sign":
            return{
                ...state,
                user:action.payload,
            };
            case "View":
                return{
                    ...state,
                    user:action.payload,
                };
                case "Model":
                    return{
                        ...state,
                        user:action.payload,
                    }
                    case "LOGOUT":
                        return{
                            user:null
                   };
        default:
       return state; 
    }

}

const Mulvalue={
    buycart:{
        keyid:[]
    }
}

const Mulreducer=(state=Mulvalue,action)=>{
    switch(action.type){
        case "BUY":
        return{
            ...state,
            buycart: {
                ...state.buycart,
                keyid: [...state.buycart.keyid, action.payload] 
              }
        };
        case "LOGOUTBUY":
            return{
                buycart: {
                    keyid: []
                  }
            }
        default:
            return state;

    }
}

const YouTubeWatch={
    YouTubedata:null,
}


const YouTubeReducer=(state=YouTubeWatch, action)=>{
    switch(action.type){
        case "YouTube":
            return{
                ...state,
                YouTubedata:action.payload,
            }
            default:
                return state;
    }
}

const Pricedata={
    Pricecards:[],
}

 const PriceReducer=(state=Pricedata, action)=>{
    switch(action.type){
        case "Price":
            if (Array.isArray(action.payload)) {
                // Multiple objects
                return {
                  ...state,
                  Pricecards: [...action.payload],
                };
              } else if (action.payload && typeof action.payload === "object") {
                // Single object
                return {
                  ...state,
                  Pricecards: [action.payload], // Convert to array for consistency
                };
              } else {
                // Invalid payload (null, string, etc.)
                return {
                  ...state,
                  Pricecards: [],
                };
              }
        
            
        default:
            return  state;
    }
 }

 const ViewDetailcard={
    viewcontent:[]
 }

 const ViewReducer=(state=ViewDetailcard, action)=>{
    switch(action.type){
        case "ViewDetail":
            return{
                ...state,
                viewcontent: Array.isArray(action.payload) ? action.payload : [action.payload],
            }
            default:
                return state;
        
    }

 }

 const Addresscard={
    Addressdetail:[]
 }

 const addressreducer=(state=Addresscard,action)=>{
    switch(action.type){
        case "AddressStore":
        return{
            ...state,
            Addressdetail:[...state.Addressdetail, action.payload],
        }
        case "LOGOUTAdd":
            return {
              ...state,
              Addressdetail: state.Addressdetail.filter((item) => item !== action.payload)
            };
            case "EDIT_ADDRESS":
             
                    const updatedAddresses = [...state.Addressdetail];
                    updatedAddresses[action.payload.index] = action.payload.updatedData;           
                    return {
                        ...state,
                        Addressdetail: updatedAddresses
                      };
        default:
        return state;
    }
 }

 const Addcartdetails={
    cartarray:[],
 }

 const Addcartreducer=(state=Addcartdetails,action)=>{
    switch(action.type){
        case"Addcart":
        return{
            ...state,
            cartarray:[...state.cartarray,action.payload]
        };
        case"Remove":
        return{
            ...state,
           
            cartarray: Array.isArray(action.payload)? state.cartarray.filter(
                (item) => !action.payload.includes(item.id)
              ): state.cartarray.filter(
                (item) => item.id !==action.payload
              )
        }
        default:
            return state;
    }
 }

 const Idcart={
    Cartid:null
 }

 const  IdcartReducer=(state=Idcart, action)=>{
    switch(action.type){
        case "particulerid":
            return{
                ...state,
                Cartid:action.payload
            }
            default:
                return state;
    }
 }
  
 const  Viewcarddetalis={
    cartViewDetails:null
    
}
 
const DetailsReducer=(state=Viewcarddetalis, action)=>{
    switch(action.type){
        case "Viewcards":
            return{
                ...state,
                cartViewDetails:action.payload
            }
            default:
                return state;

    }
}

const Buydatastorage={
    Buystoragecart:[],
    Commentcart:[],
    Magazinecart:null,
    magazinedataid:[],
    Pdfreducer:null,
    Ordereducer:[]
}

const Buyallreducer=(state=Buydatastorage,action)=>{
   
    //    const videoId = action.payload.sendid;
    //   const comment = action.payload.inputdata;

    switch(action.type){
        case "Buy_all":
            return{
                ...state,
                Buystoragecart:[...state.Buystoragecart,  action.payload]
            }
            case "commentType":
                return{
                    ...state,
                    Commentcart:[...state.Commentcart, {'videoId': action.payload.sendid, 'comment': action.payload.inputdata,'rating':action.payload.rating}]
                }
                case "magazineType":
                    return{
                        ...state,
                        Magazinecart:action.payload
                    }
                    case "magaId":
                    return {
                        ...state,
                        magazinedataid:[...state.magazinedataid, action.payload]
                    }
                    case "PDFID":
                        return{
                            ...state,
                            Pdfreducer:action.payload
                        }
                        case "Order":
                        return{
                           ...state,
                           Ordereducer:[...state.Ordereducer, action.payload]
                        }         
                   default:
                return state;
    }
   

}
 

const rootreducer=combineReducers({

    Add:UserReducer,
    MUL:Mulreducer,
    VideoValue:YouTubeReducer,
    CardPrice:PriceReducer,
    ViewCheck:ViewReducer,
    CostumerAdd:addressreducer,
    Addreducer:Addcartreducer,
    AddID:IdcartReducer,
    AddView:DetailsReducer,
    AddBuyall:Buyallreducer,
})



export default rootreducer;


