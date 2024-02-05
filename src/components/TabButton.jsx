export default function TabButton({ children, onSelect , isSelcted}) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li>
      <button className={isSelcted ? 'active' : undefined} onClick={onSelect}>{children}</button>
    </li>
  );
}


   
    
   