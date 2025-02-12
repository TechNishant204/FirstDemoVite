
//first letter of the Component should be in capital
/*
Key Points:
Embedding Dynamic Content: You can insert JavaScript expressions inside JSX using curly braces {}.
One Parent Element Rule: JSX elements must have one parent wrapper (like a div, <>, or React.Fragment).
Attributes in JSX: Use camelCase for attributes like className, onClick, etc.
JSX is not HTML: Some HTML attributes (like class or for) have different names in JSX (className and htmlFor).
Style Objects in JSX: You can use style objects to set styles in JSX.
*/
export default function LandingPage() {
    const name="Nishant";
    const email =  "nishant@zoho.com";
    const company = "Zoho";
    const isEmployee = false;
    const today = new Date().toLocaleDateString();

    const style={
        color:"blue",
        backgroundColor:"#F2F2F2",
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center",
        padding:"10px",
        borderRadius:"20px"
    };

  return (
    
    <>
     <h1 style={style}>Zoho Employee</h1>
     <p>Name: {name}</p>
     <p>Email:{email}</p>
     <p>Company: {company}</p>
     <p>Today Date: {today}</p>
     <p>{isEmployee? "Keep Hustling, you are doing great":"Join us to hustle!"}</p>
    </>
        
    
  )
}

