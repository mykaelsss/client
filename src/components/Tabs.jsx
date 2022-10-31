import React, {useState} from 'react'

const Tabs = () => {
    const tablist = [
        {
            tabname: "tab1",
            tabcontent: "Hey you're looking at tab 1"
        },
        {
            tabname: "tab2",
            tabcontent: "Hey you're looking at tab 2"
        },
        {
            tabname: "tab3",
            tabcontent: "Hey you're looking at tab 3"
        }
]
    const [selectedTab, setSelectedTab] = useState(0)

    return (
        <div className='p-5'>
            {
                tablist.map((item,idx) => {
                    const setTab =() => {
                        setSelectedTab(idx)
                    }
                    const changediv = ( change ) => {
                        if(idx === 0){
                            change = document.getElementById('change');
                            change.style.width = "350px"
                            change.style.transform = "rotate(360deg)"
                        }
                        else if( idx === 1){
                            change = document.getElementById('change');
                            change.style.width = "400px"
                        }
                        else{
                            change = document.getElementById('change');
                            change.style.width = "450px"
                        }
                    }
                    return(
                        <button key={idx} className='btn btn-outline-dark mx-1'  id={`${tablist.tabname === item.tabname ? 'active' : ''}`} onClick={ () =>{ setTab(); changediv()}}>{item.tabname}</button>
                        )})
                    }
            <div id="change" className='border border-2 border-dark p-2 my-3 rounded-2'>{tablist[selectedTab].tabcontent}</div>
        </div>
    )
}

export default Tabs
