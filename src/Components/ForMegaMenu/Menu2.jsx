import React, {forwardRef} from 'react'

const Menu2 = forwardRef<HTMLElement>((props, ref) => {
  return (
    <>
     <div ref={ref} className='flex gap-12'>
          <div>
               <h2>Header</h2>
               <ul>
                    <li>List1</li>
                    <li>List2</li>
                    <li>List3</li>
                    <li>List4</li>
                    <li>List5</li>
               </ul>
          </div>
          <div>
               <h2>Header</h2>
               <ul>
                    <li>List1</li>
                    <li>List2</li>
                    <li>List3</li>
                    <li>List4</li>
                    <li>List5</li>
               </ul>
          </div>
     </div>
    </>
  )
})

export default Menu2;