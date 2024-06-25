import { Button, Result } from "antd";
 import { useContext, useEffect } from "react";
 import { Link } from "react-router-dom";
 import { CartContext } from "../components/context/cartProvider";

 const Success = () => {
   const { setCartItems } = useContext(CartContext);

   useEffect(() => {
     setCartItems([]);
   }, [setCartItems]);

   return (
     <div className="success-page">
       <div className="container">
         <Result
           status="success"
           title="Ödeme Başarılı!"
           subTitle="Siparişiniz başarıyla tamamlandı"
           extra={[
             <Link to={"/"} key="home">
               <Button type="primary">Home</Button>,
             </Link>,

             <Button key="buy">My Orders</Button>,
           ]}
         />
       </div>
     </div>
   );
 };

 export default Success;