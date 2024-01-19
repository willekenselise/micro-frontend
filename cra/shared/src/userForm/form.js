const Form = () => <form>
   <label>Name :
      <input type="text" name="name"/>
   </label>
   <label>Email :
      <input type="text" name="email"/>
   </label>
   <label>Password :
      <input type="text" name="psword"/>
   </label>
   <input type='submit' value='Envoyer'></input>
</form>;
export default Form;