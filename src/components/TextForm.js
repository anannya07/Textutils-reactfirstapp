import React ,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState("Enter text here");
    /*whenever u want to upgrade the text u have to call it like .....  setText("The text u want to upgrade");*/
    const Upclick = ()=>{
       // console.log("Upper case was clicked" +text);
        let newText = text.toUpperCase();     
        setText(newText);
       if(newText.length!==0 && newText.charAt(0)!==' '){
         props.showAlert("Converted to upper Case","success");
       }
        else{
          props.showAlert("please enter any text","danger");
        }
    }
    const loclick = ()=>{
      // console.log("Upper case was clicked" +text);
       let newText = text.toLowerCase();     
       setText(newText);
       if(newText.length!==0 && newText.charAt(0)!==' '){
       props.showAlert("Converted to lower Case","success");
      }
      else{
        props.showAlert("please enter any text","danger");
      }
   }
   const handelclear = ()=>{
    // console.log("Upper case was clicked" +text);
     let newText = "";     
     setText(newText);
     if(newText.length!==0){
     props.showAlert("Text area cleared","secondary");
     }
     else{
      props.showAlert("Nothing to clear","warning");
    }

 }
 const handleCopy =() =>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
     props.showAlert("Copied to clipboard","success");
      }

 
 const handleExtraSpace =() =>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra space removed","success");
}
    const  handleOnChange = (event)=>{
     //   console.log("Upper case was clicked");
        setText(event.target.value);
    }
    {/*function GrammarCheckComponent() {
      const [inputText, setInputText] = useState('');
      const [grammarCheckResult, setGrammarCheckResult] = useState('');
    
      const handleInputChange = (event) => {
        setInputText(event.target.value);
      };
    
      const performGrammarCheck = () => {
        const grammarlyResult = grammarly.check(inputText);
        setGrammarCheckResult(grammarlyResult);
      };*/}
  return (
    <>
  <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
    <h1>{props.heading}</h1>
  <div className="mb-3">

  <textarea className="form-control" value={text} onChange={handleOnChange}style={{backgroundColor: props.mode==='light'?'white':'#13466e',color: props.mode==='light'?'black':'white'}}id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={Upclick}style={{padding:'10px',boxShadow:'1px 1px 0.07',border:'1px solid' }}>Convert to upper case</button>
<button className="btn btn-primary mx-1 my-1" onClick={loclick}style={{padding:'10px',boxShadow:'1px 1px 0.07',border:'1px solid' }}>Convert to lower case</button>
<button className="btn btn-primary mx-1 my-1" onClick={handelclear} style={{padding:'10px',boxShadow:'1px 1px 0.07',border:'1px solid' }}>Clear Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} style={{padding:'10px',boxShadow:'1px 1px 0.07',border:'1px solid' }}>Copy</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace} style={{padding:'10px',boxShadow:'1px 1px 0.07',border:'1px solid' }}>Remove Extraspace</button>


</div>
<div className="container my-2"  style={{color: props.mode==='light'?'black':'white'}}>
  <h1>Your Text summary</h1>
  <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words,{text.length} characters</p>
  <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read the above text</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
</div>
</>
  )
}
