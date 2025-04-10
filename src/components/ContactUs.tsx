import { useState } from "react";

const ContactUs = (props: { id: string }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
    perfume: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log(formData);
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwv0tn5GK5g53h0nY9QVGaGs_hN1c29NCEpt6thpbGT7v17ZZWmgy2PrKSi7aKL82_j/exec",
        {
          redirect: "follow",
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log("Error sending message. Check your internet connection.");
    }

    setFormData({
      name: "",
      mobile: "",
      email: "",
      message: "",
      perfume: "",
    });
  };

  return (
    <div {...props} className="w-[100%] py-[3%]">
      <div className="w-[90%] mx-auto border bg-[#3C0B04] rounded-lg px-[6%] py-[4%] flex justify-between items-center">
        <div className="w-[35%] text-[44px] font-[600] text-white flex flex-col gap-[35px]">
          <div>Are You Interested? Let’s Talk...</div>

          <div className="flex flex-col gap-[5px]">
            <div className="bg-white rounded-xl h-[5px] w-[15%]"></div>
            <div className="bg-white rounded-xl h-[5px] w-[25%]"></div>
          </div>

          <div className="text-[18px] font-[400]">
            <table>
              <tbody>
                <tr>
                  <td className="p-2">Phone:</td>
                  <td className="p-2">+91 8800207169</td>
                </tr>
                <tr>
                  <td className="p-2">Email:</td>
                  <td className="p-2">abhinavkapoor221@gmail.com</td>
                </tr>
              </tbody>
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
              <form onSubmit={handleSubmit} className="flex flex-col gap-[15px]">
                <input
                  type="text"
                  name="name"
                  placeholder="NAME"
                  value={formData.name}
                  onChange={handleChange}
                  className="border border-black/20 w-[90%] h-[40px] mx-auto px-[2%] rounded-sm"
                  required
                />
                <input
                  type="text"
                  name="mobile"
                  placeholder="MOBILE"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="border border-black/20 w-[90%] h-[40px] mx-auto px-[2%] rounded-sm"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  value={formData.email}
                  onChange={handleChange}
                  className="border border-black/20 w-[90%] h-[40px] mx-auto px-[2%] rounded-sm"
                  required
                />
                <select
                  name="perfume"
                  value={formData.perfume}
                  onChange={handleChange}
                  className="border border-black/20 w-[90%] h-[40px] mx-auto px-[2%] rounded-sm text-neutral-400"
                  required
                >
                  <option value="" className="text-[#3C0B04] ">SELECT PERFUME</option>
                  <option value="Oud Eclipse" className="text-[#3C0B04]">Oud Eclipse</option>
                  <option value="Cedar Bloom" className="text-[#3C0B04]">Cedar Bloom</option>
                  <option value="Ocean Noir" className="text-[#3C0B04]">Ocean Noir</option>
                  <option value="Pistachio Caramel" className="text-[#3C0B04]">Pistachio Caramel</option>
                </select>
                <textarea
                  name="message"
                  placeholder="MESSAGE (max 300 characters)"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={300}
                  className="border border-black/20 w-[90%] mx-auto px-[2%] rounded-sm min-h-[100px] py-[1%]"
                />
                <button
                  type="submit"
                  className="bg-[#3C0B04] text-white w-[90%] mx-auto text-[23px] font-[600] py-[0.5%] cursor-pointer"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
