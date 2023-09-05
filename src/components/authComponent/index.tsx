import Button from '@mui/material/Button';
import CustomButton from '../customButtonComponent';

export default function AuthComponent() {
  return (
    <div className="px-5 py-10 rounded-xl text-center w-max-200">
      <h3 className="font-medium text-4xl text-white">
        Collabration Through Conversation
      </h3>
      <div className="flex justify-center mt-5">
        <a className="btn btn-secondary btn-xl w-3/4" href="/signup">
          <CustomButton props={{className:"",name:"Sign Up"}} />
        {/* <Button variant="contained" className="w-3/4 mt-10 bg-primary">Sign Up</Button> */}
        </a>
      </div>
      <div className="flex justify-center mt-5">
        <a className="btn btn-secondary btn-xl  w-3/4" href="/signin">
        <CustomButton props={{className:"",name:"Log In"}} />
        {/* <Button variant="contained" className="w-3/4 mt-10 bg-primary">Log In</Button> */}
        </a>
      </div>
    </div>
  );
}
