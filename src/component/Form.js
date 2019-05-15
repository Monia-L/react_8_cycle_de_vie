import React from 'react'

class Form extends React.Component{
    state = {
        title: "",
        globalTitle: "",
    }
   
  titleUpdate = e => {                
      this.setState({
          title: e.target.value, 

        })           
        }

  titleDisplay= e => {
      e.preventDefault();
      const titre = `Mon formulaire ${this.state.title}`
      console.log(titre);
       this.setState({
            globalTitle : titre,
            // globalTitle: this.state.title
       })
  }
        
  
  componentDidUpdate(prevProps, prevState){
      // console.log("prevProps", prevProps)
      // console.log("prevState", prevState)
      if(this.state.globalTitle !== prevState.globalTitle) {
          console.log('Titre changé')
          
        } else {console.log('mise à jour non')}
    }
    
    componentDidMount(){
        console.log('Formulaire rendu');
    }
    render(){
        return(
            <>
            <div className="FormEmployee">
 <h1>{this.state.globalTitle}</h1>

 <form onSubmit={this.titleDisplay}>
   <fieldset>
       <label htmlFor="lastname">Titre</label>
       <input
         type="text"
         name="title"
        //  value={this.state.title}
         onChange={this.titleUpdate}
       />
 
       <input 
       type="submit" 
       value="Envoyer" 
       />
 
   </fieldset>
 </form>
</div>
        </>
        );
    }
}
export default Form