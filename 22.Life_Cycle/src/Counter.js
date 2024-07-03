import React, { useState } from 'react'
import Counter1 from './Counter1'
import Counter2 from './Counter2'

const Counter = () => {
    const [cnt1,setCnt1] = useState(0)
    const [cnt2,setCnt2] = useState(0)

    const increment1 = () => {
        setCnt1(cnt1 + 1)
    }
    const increment2 = () => {
        setCnt2(cnt2 + 1)
    }

    return (
    <div>
        <div>
            <Counter1 value={cnt1} onClick={increment1} />
        </div>
        <div>
            <Counter2 value={cnt2}  onClick={increment2}/>
        </div>
    </div>
  )
}

export default Counter