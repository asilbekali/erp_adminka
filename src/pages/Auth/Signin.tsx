import SigninForm from "../../components/SigninForm"



const Signin = () => {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="w-[360px] mx-auto flex flex-col gap-[40px] ">
        <div className="flex pl-[35px] items-center gap-[20px]">
          <img width={100} src="src/assets/icons/logo.svg" alt="logo" />
          <p className="font-medium text-[25px]" >Admin panel</p>
        </div>
       <SigninForm/>
      </div>
    </div>
  )
}

export default Signin