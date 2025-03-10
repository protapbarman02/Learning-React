function Random(){
  const r=Math.round((Math.random()*255)).toString();
  const g=Math.round((Math.random()*255)).toString();
  const b=Math.round((Math.random()*255)).toString();
  
  return (
    <h4 style={{color:'rgb('+r+','+g+','+b+')'}}>Random Color Code is : rgb({r},{g},{b})</h4>
  );
}

export default Random;