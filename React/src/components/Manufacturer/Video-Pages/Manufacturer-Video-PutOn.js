import React from 'react'
import { FaPlus } from "react-icons/fa"
import ReactPlayer from 'react-player'




class VideoPutOn extends React.Component{
    constructor(){
        super()
        this.state = {
            value : "",
            // videofile :"",
        }
        
    }
    handlechange(event){
        const v = event.target.value
        console.log(v)
    }

    handleUploadimage = e =>{
         //抓取上傳檔案按鈕元素
         const uploadfile = document.querySelector('.video-puton-file-i'); 
         //抓取預覽圖片元素
         const preview = document.querySelector('.video-puton-i-preview') 
         //建立file obj 
         const filereader = new FileReader() 
         // 抓取預覽圖片的父元素及裡面的子元素
        //  const del = document.querySelector('.ins-puton-add')
         const h3 = document.querySelector('.video-puton-file-i-text')
         const div = document.querySelector('.video-puton-i-div')
 
         // 追蹤上傳按鈕事件
         uploadfile.addEventListener('change', e => {
             // 抓到值放入 變數file
             const file = e.target.files[0]
             // 轉成base46碼
             filereader.readAsDataURL(file)
             // 刪除預覽圖片的子元素
 
             h3.style.display = 'none'
             div.style.display = 'none'
         })
         // 追蹤事件載入
         filereader.addEventListener('load',function(){
             // 把base46碼放入變數 dataURL
             const dataURL = filereader.result
             console.log(dataURL)
             // 把值傳入預覽圖片元素顯示
             preview.src = dataURL;
             alert('上傳成功')
         })
    }

    handleUploadvideo = e => {
        const uploadfile = document.querySelector('.video-puton-file-v')
        const preview = document.querySelector('.video-puton-v-preview')
        const filereader = new FileReader()

        const h3 = document.querySelector('.video-puton-file-v-text')
        const div = document.querySelector('.video-puton-v-div')

        uploadfile.addEventListener('change', e => {
            const file = e.target.files[0]

            filereader.readAsDataURL(file)
            preview.style.display = 'block'
            h3.style.display = 'none'
            div.style.display = 'none'
            
        })

        filereader.addEventListener('load',function(){
            const dataURL = filereader.result
            console.log(dataURL)
            preview.src = dataURL;
            alert('上傳成功')
        })
        // uploadfile.addEventListener('change' , e =>{
        //     const file = e.target.files[0]
        //     console.log(file)

        //     const videofile = URL.createObjectURL(file)
        //     console.log(videofile)
        //     preview.src = videofile
        //     preview.style.display = 'block'
        //     h3.style.display = 'none'
        //     div.style.display = 'none'
        // })

    }

    render(){
    return(
        <div className="video-puton-page">
        <h3 className="font-size-142rem">新增影片</h3>
        <form className="video-puton-form">
        <div className="video-puton-all-file">
            <div className="video-puton-file-v">
                <div className="video-puton-add" >
                    <h3 className="video-puton-file-v-text font-size-142rem">影片預覽</h3>
                    <div className="video-puton-v-div">
                        <FaPlus className="video-puton-icon-v"/>
                    </div>
                    <video className="video-puton-v-preview" width={480} height={320} controls></video>
                </div>
                <div className="video-puton-file-v-div">
                <label className="video-puton-new-btn" htmlFor="v-file" onClick={this.handleUploadvideo}>選擇影片</label>
                <input type="file" className="video-puton-file-v" id="v-file" accept="video/*"/>
                </div>
            </div>
            <div className="video-puton-file-i">
                <div className="video-puton-add-img">
                    <h3 className="video-puton-file-i-text font-size-142rem">圖片預覽</h3>
                    <div className="video-puton-i-div">
                        <FaPlus className="video-puton-icon-i"/>
                    </div>
                    <img className="video-puton-i-preview"></img>
                </div>
                <div className="video-puton-file-i-div">
                <label htmlFor="i-file" onClick={this.handleUploadimage}>選擇圖片</label>
                <input type="file" id="i-file" className="video-puton-file-i"/>
                </div>
            </div>
        </div>
            <div className="video-puton-content">
                <label htmlFor="videoname" className="video-puton-label font-size-1rem">名稱<input id="videoname" type="text" className="font-size-114rem"/></label>
                <label className="video-puton-label font-size-1rem" htmlFor="option">類別
                    <select className="video-value font-size-114rem" id="option" onChange={this.handlechange}>
                        <option value=""></option>
                        <option value="小提琴">小提琴</option>
                        <option value="中提琴">中提琴</option>
                        <option value="薩克斯風">薩克斯風</option>
                        <option value="鋼琴">鋼琴</option>
                        <option value="電子琴">電子琴</option>
                        <option value="爵士鼓">爵士鼓</option>
                        <option value="吉他">吉他</option>
                        <option value="烏克莉莉">烏克莉莉</option>
                        <option value="長笛">長笛</option>
                    </select>
                </label>
                <label htmlFor="videotime" className="video-puton-label font-size-1rem">長度<input id="videotime" type="text" className="font-size-114rem"/></label>
                <label htmlFor="videoprice" className="video-puton-label font-size-1rem">價格<input id="videoprice" type="text" className="font-size-114rem"/></label>
                <label htmlFor="videotext1" className="video-puton-label font-size-1rem">簡介<input id="videotext1" type="text" className="font-size-114rem"/></label>
                <label htmlFor="videotext2" className="video-puton-content-text font-size-1rem">介紹<textarea id="videotext2" className="font-size-114rem"></textarea></label>
                <button type="submit" className="video-puton-add-btn">確認</button>
            </div>
        </form>
        </div>
    )
    }
   
}

export default VideoPutOn