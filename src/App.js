import logo from './logo.svg';
import './App.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

function App() {
	const initialValues = {
		name: "",
		email: "",
		city: "",
		country: "",
		mobile: "",
		identity: "",
		frequency: "",
		birthday: "",
		suggestions: "",
		annversary: "",
		socialmedia: "",
		gender: "",
		join: "",
	  };
  
	  const onSubmit = (data) => {
		console.log(data);
	  }
  
	  const validationSchema = Yup.object().shape({
  
   
		name: Yup.string().required('This field is required').matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
		email: Yup.string().email('Must be a valid email').max(255).required('This field is required'),
		city: Yup.string().required('This field is required').matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
		country: Yup.string().required('This field is required').matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
		mobile: Yup.string().required("This field is Required").matches(
		  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
		  "Phone number is not valid"),
		frequency: Yup.string().required('This field is required'),
		birthday: Yup.date().required('This field is required'),
		suggestions: Yup.string().required('This field is required'),
		join: Yup.string().required('This field is required'),
	  });
  
	return (
<div className=' flex items-center justify-center min-h-screen  from-teal-100 via-teal-300 to-teal-500 bg-gradient-to-br'>
      <div className='w-full max-w-lg px-6 py-8 mx-auto  bg-white rounded-lg shadow-xl '>
        <div className='max-w-md mx-auto space-y-6'>
          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form action="">
              <h2 className="text-2xl font-bold ">Join The Movement - TreeAndHumanKnot</h2>
              <p className="my-4 opacity-70 ">TreeAndHumanKnot termed from the eternal bond between Nature & mankind. Idea was conceived in April 2019 turned into a Movement with Pre-Launch in August 2020 to strategically plant trees around home, societies, offices, parks, and public places which will have tremendous environmental benefits to reinforce Sustainable Living on Planet Earth. <br />
                <br />

                Hope you are excited to Join the Movement as we are to share about our innovative Intrapreneurial projects! <br />
                <br />

                Simple: One Plant at a time - Take One Seed/sapling, mix with mud/manure, and add little love with water.
                Innovative: TAHK's Intrapreneurial Projects <br />
                <br />
                Sustainable: Ambition to build self-sustained societies and restore ecological balance</p>
              <hr className="my-6" />

              {/* NAME */}
              <label className="uppercase text-sm font-bold opacity-80">Name</label>
              <p><ErrorMessage name="name" component="span" className="my-4 opacity-70 text-red-600"/></p>
              <Field type="text" className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none" name='name' />

              {/* EMAIL */}
              <label className="uppercase text-sm font-bold opacity-80">Email</label>
              <p><ErrorMessage name="email" component="span" className="my-4 opacity-70 text-red-600"/></p>
              <Field type="text" className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded" name='email' />

              {/* CITY */}
              <label className="uppercase text-sm font-bold opacity-80">City</label>
              <p><ErrorMessage name="city" component="span" className="my-4 opacity-70 text-red-600"/></p>
              <Field type="text" className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none" name='city'/>

              {/* COUNTRY */}
              <label className="uppercase text-sm font-bold opacity-80">Country</label>
              <p><ErrorMessage name="country" component="span" className="my-4 opacity-70 text-red-600"/></p>
              <p className="my-4 opacity-70 ">
                TAHK movement has began from India in August 2020 and in November reached Italy. If you are from a third Country, we would be delighted to share our strategic plan and bring your Nation together for Mother Nature</p>
              <Field type="text" className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none" name='country'/>

              {/* MOBILE NUMBER */}
              <label className="uppercase text-sm font-bold opacity-80">You can be reached at</label>
              <p><ErrorMessage name="mobile" component="span" className="my-4 opacity-70 text-red-600"/></p>
              <p className="my-4 opacity-70 ">
                Please mention your mobile number with country code</p>
              <Field type="text" className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none" name='mobile'/>

              {/* IDENTITY */}
              <label className="uppercase text-sm font-bold opacity-80">Your Best Identity to join as Nature Lover is:</label>
              <p className="my-4 opacity-70 ">Certification is available on evaluation of your selfless service to Mother Earth</p>
              <select className="w-full p-3 mt-2 mb-4 bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none" name='identity'>
                <option selected="true" disabled="disabled">--Choose an option--</option>
                <option value="individual">Individual</option>
                <option value="corporate">Corporate Business House</option>
                <option value="institution">Institution:Govt authority, Educational body etc</option>
              </select>

              {/* FREQUENCY */}
              <label className="uppercase text-sm font-bold opacity-80">Frequency at which you pledge to tie a TreeAndHumanKnot:</label>
              <p><ErrorMessage name="frequency" component="span" className="my-4 opacity-70 text-red-600"/></p>
              <p className="my-4 opacity-70 ">
                Nature will love you for each plant but do make a realist goal. We generally recommend to Tie one TAHK every month to celebrate your dear one's happy moments like Birthdays, Anniversaries, new job, promotion, business etc</p>
              <select className="w-full p-3 mt-2 mb-4 bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none" name='frequency'>
                <option selected="true" disabled="disabled">--Choose an option--</option>
                <option value="fortnightly">Fortnightly</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="annually">Annually</option>
              </select>

              {/* BIRTHDAY */}
              <label className="uppercase text-sm font-bold opacity-80">We can wish you "Green Birthday" on:</label>
              <p><ErrorMessage name="birthday" component="span" className="my-4 opacity-70 text-red-600"/></p>
              <p className="my-4 opacity-70 ">Let us celebrate with baby steps and would like to make a Green Celebration for you</p>
              <Field type="date" className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none" name='birthday'/>

              {/* SUGGESTIONS */}
              <label className="uppercase text-sm font-bold opacity-80">Your best suggestion as Nature Lover:</label>
              <p><ErrorMessage name="suggestions" component="span" className="my-4 opacity-70 text-red-600"/></p>
              <Field type="textarea" className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none" name='suggestions'/>

              {/* ANNIVERSARY */}
              <label className="uppercase text-sm font-bold opacity-80">We can wish you "Green Anniversary" on:</label>
              <p className="my-4 opacity-70 ">Mention your wedding date</p>
              <Field type="date" className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none" name='anniversary'/>

              {/* SOCIAL ACCOUNT */}
              <label className="uppercase text-sm font-bold opacity-80">Social Account ID:</label>
              <p className="my-4 opacity-70 ">Please share your on the go social media platform and please acknowledge about your registration with #TreeAndHumanKnot or tag. We shall be happy to reflect gratitude by tagging you for our monthly brief publication.</p>
              <Field type="textarea" className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none" name='socialmedia'/>

              {/* GENDER */}
              <label className="uppercase text-sm font-bold opacity-80">Gender:</label>
              <select className="w-full p-3 mt-2 mb-4 bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none" name='gender'>
                <option selected="true" disabled="disabled">--Choose an option--</option>
                <option value="men">Responsible Man</option>
                <option value="women">Proud Woman</option>
                <option value="others">Prefer not to say</option>
              </select>

              {/* JOIN THE MOVEMENT */}
              <label className="uppercase text-sm font-bold opacity-80">Join the movement as:</label>
              <p><ErrorMessage name="join" component="span" className="my-4 opacity-70 text-red-600"/></p>
              <p className="my-4 opacity-70 ">If you have beautiful friends, society, or peer group whom you can inspire to join the much-needed movement please join leadership as it takes as less as an hour per week to contribute. Take these baby steps to nurture the tree together and wait for Nature's fruit as we encourage Couple to plant a long lasting fruit tree together</p>
              <select className="w-full p-3 mt-2 mb-4 bg-slate-200 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none" name='join'>
                <option  selected="true" disabled="disabled">--Choose an option--</option>
                <option value="single">Volunteer as Single</option>
                <option value="couple">Volunteer as Couple</option>
                <option value="leadership">Volunteer and Join Leadership</option>
              </select>


              <div className="my-2 font-medium opacity-70">
                <p className="my-4 opacity-70 ">
                  Pledge to keep surrounding clean, green and inspire others around towards Sustainable Living. Non - Disclosure Agreement- We trust you are looking for a selfless opportunity to serve Planet Earth and will adhere to Vision, Mission & values. You also understand the sensitivity of unique Ideas under our Intrapreneurial Projects. Hence, you will abide by Non-Disclosure terms (NDA) that you will not share or use any of our unique Ideas which you learn while submitting the form or during the discussion through any mode of communication for profit and/or otherwise than serving Mother Earth * <br />
                  <b>Mutual Respect:</b> As you agree for NDA that you will not use any info from this form or any mode of communication for profit or gain, we also comply with Data Privacy norms that your information will be secured with us</p>
                <Field type="checkbox" />
                 &nbsp; &nbsp; Agree
              </div>
              <button type="submit" className="py-3 px-6 my-2 bg-emerald-500 text-white font-medium rounded hover:bg-emerald-400 cursor-pointer ease-in-out duration-300" value="Send">Submit</button>
            </Form>
          </Formik>

        </div>
      </div>
    </div>

	);
}

export default App;
