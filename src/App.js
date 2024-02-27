import './App.css';
import { Formik } from 'formik';

function App() {
  return (
    <div className="App">
     <h1>Welcome to Formik second method</h1>
     <Formik 
     initialValues={{"fn":"", "ln":"", "age":""}}
     onSubmit={(fv)=>{console.log(fv)}}
     >
      {
        (uf)=>{
          return (
            <form onSubmit={uf.handleSubmit}>
              <input type='text' placeholder='firstname' name='fn' onChange={uf.handleChange}/><br/><br/>
              <input type='text' placeholder='lastname' name='ln' onChange={uf.handleChange}/><br/><br/>
              <input type='text' placeholder='age' name='age' onChange={uf.handleChange}/><br/><br/>
              <button type='submit'>Save</button>
            </form>
          )
        }
      }

     </Formik>
    </div>
  );
}

export default App;
