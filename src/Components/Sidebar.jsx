import React, { useState } from 'react';


// Define SideBar component
export const Sidebar = ({setSelectedCategory, setSelectedSort, setSelectedPrice}) => {

  // Define styles for different parts of the sidebar
  const stylediv = {
    textAlign: 'left',
    padding: '40px',
    marginTop: '-50px',
    fontSize: '15px'
  };
  const top = {
    marginTop: '20px',
    textAlign: 'left',
    padding: '40px',
    fontSize: '15px',
  };
  const stylediv2 = {
    backgroundColor: '#F6F3F9',
    height: '70px',
    textAlign: 'center',
    borderRadius: '20px 20px 0px 0px',
    padding: '20px',
  };
  const checkBox= {
    marginRight: '20px',
     width: '15px',
  };
  const textType = {
    fontSize: '15px',
    fontWeight: 'bolder',
  };

 

  // Define state and handlers for price ranges checkboxes
  const [priceRanges, setPriceRanges] = useState([
    { range: '₹5,001 - ₹10,000', checked: false },
    { range: '₹10,001 - ₹15,000', checked: false },
    { range: '₹15,001 - ₹20,000', checked: false },
    { range: '₹20,001 - ₹30,000', checked: false },
    { range: '₹30,001 - ₹40,000', checked: false },
    { range: '₹40,001 - ₹50,000', checked: false },
    { range: '₹50,001 - ₹75,000', checked: false },
    { range: '₹75,001 - ₹1,00,000', checked: false },
    { range: '₹1,00,001 - ₹1,50,000', checked: false },
    { range: '₹1,50,001 - ₹2,00,000', checked: false },
    { range: '₹2,00,001 - ₹2,50,000', checked: false },
    { range: 'Over ₹2,50,000', checked: false },
  ]);
  const handleCheckboxChange = (index) => {
    const newPriceRanges = [...priceRanges];
    newPriceRanges[index].checked = !newPriceRanges[index].checked;
    setPriceRanges(newPriceRanges);
  };

  // Define state and handlers for product type checkboxes
  const [categories, setCategories] = useState([
    { name: 'Earrings', checked: false },
    { name: 'Rings', checked: false },
    { name: 'Bracelets', checked: false },
    { name: 'Mangalsutra', checked: false },
    { name: 'Nose pin', checked: false },
    { name: 'Adjustable Rings', checked: false },
    { name: 'Charm Builders', checked: false },
    { name: 'Baby Bangles', checked: false },
  ]);
  const handleCheckbox = (index) => {
    const newCategories = [...categories];
    newCategories[index].checked = !newCategories[index].checked;
    setCategories(newCategories);
  };

  
  function onChangeValue(event) {
  
    console.log("inside onchangevalue", event.target.value);
    setSelectedCategory(event.target.value)
  }


  function onChangeValueSort(event) {
    console.log("inside onchangevalueSort", event.target.value);
    setSelectedSort(event.target.value)
  }

  function priceFilterChange(event) {
    // +arr[0].trim().slice(1,100).replace(',','')
    console.log("inside pricefilter", event.target.value);
    // let val = event.target.value
    // let arr = val.split('-')
    setSelectedPrice(event.target.value)
  }
       
   return (
     <div style={{
        marginTop:"115px",
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
        height: "100%",
        width:'auto',
        position: "fixed",
        zIndex: "1",
        top: "0",
        overflowX: "hidden",
        paddingTop: "20px"
     }}>
       <div style={stylediv2}>
         
         <h3 style={textType}>Sort By</h3>
         <div onChange={onChangeValueSort}>
         <div><input type="radio" value="asc" name="sort"/> Low to High</div>
         <div><input type="radio" value="desc" name="sort"/> High to Low</div>
         </div>
        </div>
        <br />
        <div style={stylediv2}>
        <h3 style={textType}>Filter By</h3>
        </div>
        <br />

        <div style={stylediv}>
         <h1 style={textType}>Price</h1>
         <div onChange={priceFilterChange}>
      {priceRanges.map((range, index) => (
        <div key={index}>
          <input style={checkBox} type="radio" name="button2" value={range.range} checked={range.checked} onChange={(e) => {
            handleCheckboxChange(index)}} />
          {range.range}
        </div>
      ))}
           </div>
    </div>
    
    <hr />

    <div style={top} onChange={onChangeValue}>
      <h1 style={textType}>Product Type</h1>

      {categories.map((category, index) => (
        <div key={index}>
          <input style={checkBox} type="radio" name="button1" value={category.name} checked={category.checked} onChange={() => handleCheckbox(index)} />
          {category.name}
        </div>
      ))}
    </div>

<hr />
    

     </div>
   )
 }
 
