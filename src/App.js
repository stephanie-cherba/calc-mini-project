import {useState } from 'react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  topRow: {
    display: 'flex',
    width: '415px'
  },
  clear: {
    backgroundColor: '#f75252',
    display: 'flex',
    justifyContent: 'center',
    borderBottom: '1px solid #58585B',
    borderRight: '1px solid #58585B',
    color: 'white',
    fontSize: '42px',
    margin:'-2px'
  },
  screen: {
    backgroundColor: '#58585B',
    width: '500px',
    height: '46px',
    display: 'flex',
    paddingRight: '15px',
    justifyContent: 'flex-end',
    color: 'white',
    fontSize: '42px'
  },
  row: {
    display: 'flex'
  },
  numbers: {
    backgroundColor: '#808080',
    border: '1px solid #58585B',
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
    fontSize: '45px',
    margin: '-2px',
  },
  operations: {
    backgroundColor: '#54b754',
    border: '1px solid #58585B',
    justifyContent: 'center',
    color: 'white',
    margin: '-2px',
    fontSize: '30px'
  },
  divide: {
    fontSize: '30px'
  },
  multiply: {
    fontSize: '30px'
  },
  subtract: {
    fontSize:'33px'
  },
  add: {
    fontSize: '30px'
  },
  equals: {
    fontSize:'44px'
  },
  period: {
    fontSize:'51px'
  },
  '@media (min-width: 510px)': {
    clear: {
      
    },
    screen: {
      height: '49px',
      width: '183px'
    },
    numbers: {
      margin: '',
      fontSize: '60px',
      padding: '5px 15px'

    },
    divide: {
      marginTop: '',
      fontSize: '45px',
      padding: '5px 15px'
    },
    operations: {
      margin: '',
      fontSize: '45px',
    },
    multiply: {
      fontSize: '50px',
      padding: '5px 13px'
    },
    subtract: {
      fontSize: '55px',
      padding: '5px 19px'    
    },
    add: {
      fontSize: '50px',
      padding: '5px 13px'    
    },
    equals: {
      fontSize: '50px',
      padding: '5px 17px'    
    },
    period: {
      fontSize: '50px',
      padding: '5px 25px'    
    }
  }
})

export const App = () => {
  const [currentValue, setCurrentValue] = useState('')
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [isDone, setIsDone] = useState(false)
  const [operation, setOperation] = useState('')
  const arr = []
  const classes = useStyles()

  const handleClick = (e) => {
    e.preventDefault()
    const name = e.target.name    
    if(isDone ==='true'){
      setCurrentValue('')
      setNum1('')
      setOperation('')
    }
    if(name === 'C' ){
      setCurrentValue('')
      
    } else if(name === '+' || name === '-' || name === '/' || name === '*'){
      setNum1(currentValue)
      arr.push('currentValue')
      setOperation(name)
      arr.push(name)
      setCurrentValue('')
    } else if(name === '='){
      setNum2(currentValue)
      arr.push(currentValue)
      if(operation === '+'){
        const newNumber = parseInt(num1) + parseInt(currentValue)
        setCurrentValue(newNumber)
      } else if( operation === '-'){
        const newNumber = parseInt(num1) - parseInt(currentValue)
        setCurrentValue(newNumber)
      }else if(operation === '/'){
        const newNumber = parseInt(num1)/+ parseInt(currentValue)
        setCurrentValue(newNumber)
      }else if(operation === '*'){
        const newNumber = parseInt(num1) * parseInt(currentValue)
        setCurrentValue(newNumber)
      }
      setIsDone(true)
    }else{
      setCurrentValue((currentValue && isDone === false) ? currentValue + name : name)
    }
  }
  return (
    <div>
      <div className={classes.topRow}>
        <button 
          className={classes.clear} 
          name='C' 
          onClick={e => {handleClick(e)}}
          >
            C
          </button>
          {console.log(num1, operation, num2, currentValue)}
        <div className={classes.screen}>
          {
            num1 
            ? 
              isDone 
              ?
                num1 + operation + num2 + '=' + currentValue
              :
                num1 + operation + currentValue
            : 
              currentValue
          }
          </div>
      </div>
      <div className={classes.row}>
        <button 
          className={classes.numbers} 
          name={7} 
          onClick={e => handleClick(e)}
        >
          7
        </button>
        <button 
          className={classes.numbers} 
          name={8} 
          onClick={e => handleClick(e)}
        >
          8
        </button>
        <button 
          className={classes.numbers} 
          name={9}
          onClick={e => handleClick(e)}
        >
          9
        </button>
        <button 
          className={`${classes.operations} ${classes.divide}`} 
          name='/' 
          onClick={e => handleClick(e)}
        >
          ÷
        </button>
      </div>
      <div className={classes.row}>
        <button 
          className={classes.numbers} 
          name={4} 
          onClick={e => handleClick(e)}
        >
          4
        </button>
        <button 
          className={classes.numbers} 
          name={5}
          onClick={e => handleClick(e)}
        >
          5
        </button>
        <button 
          className={classes.numbers} 
          name={6}
          onClick={e => handleClick(e)}
        >
          6
        </button>
        <button 
          className={`${classes.operations} ${classes.multiply}`} 
          name='*' 
          onClick={e => handleClick(e)}
        >
          ×
        </button>
      </div>
      <div className={classes.row}>
        <button 
          className={classes.numbers} 
          name={1}
          onClick={e => handleClick(e)}
        >
          1
        </button>
        <button 
          className={classes.numbers} 
          name={2}
          onClick={e => handleClick(e)}
        >
          2
        </button>
        <button 
          className={classes.numbers} 
          name={3}
          onClick={e => handleClick(e)}
        >
          3
        </button>
        <button 
          className={`${classes.operations} ${classes.subtract}`} 
          name='-' 
          onClick={e => handleClick(e)}
        >
          -
        </button>
      </div>
      <div className={classes.row}>
        <button 
          className={classes.numbers} 
          name={0}
          onClick={e => handleClick(e)}
        >
          0
        </button>
        <button 
          className={`${classes.operations} ${classes.period}`} 
          name='.' 
          onClick={e => handleClick(e)}
        >
          .
        </button>
        <button 
          className={`${classes.operations} ${classes.equals}`} 
          name='=' 
          onClick={e => {handleClick(e); setIsDone(true)}}
        >
          =
        </button>
        <button 
          className={`${classes.operations} ${classes.add}`} 
          name='+' 
          onClick={e => handleClick(e)}
        >
          +
        </button>
      </div>
    </div>
  )
}