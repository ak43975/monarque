const ContactUs = (props : {id : string}) => {
    return (
        <div {...props} className="w-[100%] py-[3%]">
            <div className="w-[90%] mx-auto border bg-[#3C0B04] rounded-lg px-[6%] py-[4%] flex justify-between items-center">
                <div className="w-[35%] text-[44px] font-[600] text-white flex flex-col gap-[35px]">
                    <div>
                        Are You Interested? Let’s Talk...
                    </div>

                    <div className="flex flex-col gap-[5px]">
                        <div className="bg-white rounded-xl h-[5px] w-[15%]"></div>
                        <div className="bg-white rounded-xl h-[5px] w-[25%]"></div>
                    </div>

                    <div className="text-[18px] font-[400]">
                        <table>
                            <tr>
                                <td className="p-2">Phone:</td>
                                <td className="p-2">+91 701159733</td>
                            </tr>

                            <tr>
                                <td className="p-2">Email:</td>
                                <td className="p-2">luxaryperfumes@gmail.com</td>
                            </tr>
                        </table>

                    </div>
                </div>

                <div className="w-[40%] border">

                    <div className="bg-white py-[10%] rounded-lg">
                        <div className="text-[#3C0B04] flex flex-col items-center">
                            <span className="text-[18px] font-[400]">STAY IN CONTACT</span>
                            <span className="text-[55px] font-[400]">CONTACT US</span>
                        </div>
                        <div>
                            <form className="flex flex-col gap-[15px]">
                                <input type="text" name="name" id="" placeholder="NAME" className="border border-black/20 w-[90%] h-[40px] mx-auto px-[2%] rounded-sm" required/>

                                <input type="text" name="" id="" placeholder="MOBILE" className="border border-black/20 w-[90%] h-[40px] mx-auto px-[2%] rounded-sm" required/>

                                <input type="email" name="" id="" placeholder="EMAIL" className="border border-black/20 w-[90%] h-[40px] mx-auto px-[2%] rounded-sm" required/>

                                <textarea name="" id="" placeholder="MESSAGE" className="border border-black/20 w-[90%] mx-auto px-[2%] rounded-sm min-h-[100px] py-[1%]"></textarea>

                                <button className="bg-[#3C0B04] text-white w-[90%] mx-auto text-[23px] font-[600] py-[0.5%] cursor-pointer">SUBMIT</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs