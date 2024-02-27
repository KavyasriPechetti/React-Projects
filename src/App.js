import './App.css';
import { useFormik } from 'formik';

function App() {
  var userForm=useFormik({
    initialValues:{fn:"", ln:"", age:""},
    onSubmit:(fv)=>{console.log(fv)}
  })
  // console.log(userForm);
  return (
    <div className="App">
     <h1>Form Handling</h1>
     <form onSubmit={userForm.handleSubmit}>
      <input type='text' name="fn" placeholder='firstname' onChange={userForm.handleChange}/> <br/> <br/>
      <input type='text' name='ln' placeholder='lastname' onChange={userForm.handleChange}/> <br/> <br/>
      <input type='text' name='age' placeholder='age' onChange={userForm.handleChange}/> <br/> <br/>
      <button type='submit'>Save</button>

     </form>
    </div>
  );
}

export default App;
