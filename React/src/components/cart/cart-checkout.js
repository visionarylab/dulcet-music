import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartDeliverInfo from './cart-deliverInfo.js';
import CartItem from './cart-cartItem.js';

function CartCheckout (props) {

  const { cart, setCart, user, setUser, number, setNumber, totalPrice, checkstate, setcheckstate, checkcallback, ReceivingName, setReceivingName, ReceivingAddress, setReceivingAddress, ReceivingPhone, setReceivingPhone,  ReceivingEmail, setReceivingEmail } = props.allProps;  
  
  // const [number, setNumber] = useState(cart[0].cartNumber)
  // let stock = cart[0].PQty;   
  const coupon = 1500;
  let itemPrice = 0;
  {cart.map((data, index)=>{
    itemPrice = cart[index].PPrice;
  })}
  // let num = 2;
  // const totalPrice = 0;  
  // const orderPrice = totalPrice - coupon;
  
  // console.log(user)
  // console.log(cart[0])
  // console.log(number)
  // console.log(cart[0]["PQty"]);
  // console.log(stock)

  // setNumber(cart[0].cartNumber)
  // stock = cart[0].PQty;
  // itemPrice = cart[0].PPrice;

  // let index = 0;  
  // let arr =[2,1,3]
  // const [testArr,setTestArr]=useState(arr)

  const minusCartNumber = (e) =>{
    if (number == 0) {
      setNumber(0)
    } else {
      setNumber(number - 1)
      setCart({
        ...cart,
        0:{
          ...cart[0],
          number: number       
        } 
      })
    }
  }

  const plusCartNumber = (e) =>{
    // let cart = cart[0]
    // console.log(cart[0].cartNumber)
    // let index=e
    // arr=testArr
    // console.log(index);    
    // console.log(arr[index]+1)
    // console.log(testArr)
    // arr[index]=arr[index]+1
    // arr[index]=parseInt(arr[index])+1
    // setTestArr(arr)

    const stock =5
    if (number == stock) {
      setNumber(stock) 
      alert('庫存不足')
    } else {
      setNumber(number + 1)
      setCart({
        ...cart,
        0:{
          ...cart[0],
          number: number       
        } 
      })
    }
  }

  const deleteCartItem = (e) => {
    alert('是否確認刪除?')
    // console.log( e.target.parentElement.closest(".cart-product") )
    setCart([])
  }

    return (
      <>
          <div className="cart-table">
              <ul className='cart-thead'>
                <li>選取</li>
                <li>商品圖片</li>
                <li>商品名稱</li>
                <li>商品單價</li>
                <li className="cart-rwd-noneed">數量</li>
                <li className="cart-rwd-noneed">商品小計</li>
                <li className="cart-rwd-noneed">刪除</li>
              </ul>
              <ul className="cart-order-category">
                <li colSpan="7">購買清單－課程</li>
              </ul>   
              <CartItem
                allProps={{
                  cart,
                  setCart,
                  totalPrice,
                  minusCartNumber,
                  plusCartNumber,
                  deleteCartItem,
              }}
              />
          </div>

          <div>
            <form className="cart-form" action="/cart/2" method="post" encType="multipart/form-data">
              <CartDeliverInfo 
                allProps={{
                  user,
                  setUser,
                  checkstate, 
                  setcheckstate,
                  checkcallback,
                  ReceivingName, 
                  setReceivingName, 
                  ReceivingAddress, 
                  setReceivingAddress, 
                  ReceivingPhone, 
                  setReceivingPhone, 
                  ReceivingEmail, 
                  setReceivingEmail
              }}
              />
              <div className="cart-invoice">
                  <h2>統一發票</h2>
                  <fieldset>
                    <div>
                      <label><input type="radio" name="invoice" id=""/> 會員載具</label>
                      <span>中獎時我們會將發票寄送至您的收件地址</span>
                    </div>
                    <div>
                      <label><input type="radio" name="invoice" id=""/> 手機條碼載具</label>
                      <div className="cart-input1">
                        <label htmlFor="einvoice">載具號碼</label>
                        <input id="einvoice" type="text"/>
                      </div>
                    </div>
                    <div style={{padding:'0 0 20px 0'}}>
                      <label><input type="radio" name="invoice" id=""/> 捐贈發票</label>
                      <span>提醒您，捐贈發票後無法變更成開立或索取紙本發票。</span>
                      <select>
                        <option value="台灣流浪兔保護協會">台灣流浪兔保護協會</option>
                        <option value="社團法人台灣愛兔協會">社團法人台灣愛兔協會</option>
                        <option value="財團法人陽光社會福利基金會">財團法人陽光社會福利基金會</option>
                      </select>
                    </div>
                    <div>
                      <label><input type="radio" name="invoice" id=""/> 公司戶</label>
                      <span>提醒您，公司戶發票一旦開立，不得任意更改或改為個人戶發票。</span>
                      <div className="cart-input1">
                        <label htmlFor="einvoice">統一編號</label>
                        <input className="" id="einvoice" type="text"/>
                      </div>
                      <div className="cart-input1">
                        <label htmlFor="einvoice">發票抬頭</label>
                        <input className="" id="einvoice" type="text"/>
                      </div>
                    </div>
                </fieldset>
              </div>
            </form>
          </div>

          <div className="cart-total">
            <div className="cart-discount">
              <label htmlFor="discount">折扣碼</label>
              <input className="" id="discount" type="text"/>
            </div>
            <div className="cart-total-right">
              <div>
                <span className="cart-total-title">合計</span>
                <span className="cart-total-number cart-english-font">$ {}</span>
              </div>
              <div style={{color:'var(--main-colorfb2)'}}>
                <span className="cart-total-title">折扣</span>
                <span className="cart-total-number cart-english-font">- $ {}</span>
              </div>
              <div>
                <span className="cart-total-title">總計</span>
                <span className="cart-total-number cart-english-font">$ {}</span>
              </div>
            </div>
          </div>
          <div className="cart-checkout-btn">
            <button type="button"
              onClick={()=>{
                window.history.back()
              }}
            >
              繼續購物   
            </button>
            <button type="button">
              <Link to='/cart/2'>下一步</Link>
            </button>
          </div>

      </>
    );
}


export default CartCheckout;
