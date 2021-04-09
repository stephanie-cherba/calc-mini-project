import {useState } from 'react'
import {createUseStyles} from 'react-jss'
import {Dialog} from '@material-ui/core'


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
  dialogContent: {
    padding: '20px',
    borderBottom: '1px #d8d8d8 solid',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  cancel: {
    backgroundColor: '#eef0ef',
    borderRadius: '25px',
    width:'200px',
    margin:'5px',
    padding:'5px 10px',
    fontSize: '20px',
    border: '1px #9e9e9e solid'
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
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const classes = useStyles()

  const handleOpenDialog = () => setIsDialogOpen(true)
  const handleCloseDialog = () => setIsDialogOpen(false)
  const handleClick = (e) => {
    e.preventDefault()
    const name = e.target.name    
    if(isDone && name !== 'C'){
      handleOpenDialog()
      return
    }
    if(name === 'C' ){
      setCurrentValue('')
      setNum1('')
      setNum2('')
      setIsDone(false)
      setOperation('')
    } else if(name === '+' || name === '-' || name === '/' || name === '*'){
      setNum1(currentValue)
      setOperation(name)
      setCurrentValue('')
    } else if(name === '='){
      setNum2(currentValue)
      setIsDone(true)
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
    }else{
      setCurrentValue((currentValue && isDone === false) ? currentValue + name : name)
    }
  }
  return (
    <>
      <div>
        <div className={classes.topRow}>
          <button 
            className={classes.clear} 
            name='C' 
            onClick={e => {handleClick(e)}}
            >
              C
            </button>
          <div className={classes.screen}>
            {
              num1 
              ? 
                isDone && operation == '/'
                ?
                  num1 + '÷' + num2 + '=' + currentValue
                :
                  isDone && operation == '*'
                  ?
                    num1 + '×' + num2 + '=' + currentValue
                  :
                    isDone
                    ?
                      num1 + operation + num2 + '=' + currentValue
                    :
                      operation == '/' 
                      ?
                        num1 + '÷' + currentValue
                      :
                        operation == '*'
                        ?
                          num1 + '×' + currentValue
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
      <Dialog open={isDialogOpen} >
        <div className={classes.dialogContent}>You must press clear before starting a new problem</div>
        <div className={classes.buttonContainer}>
          <button className={classes.cancel} onClick={handleCloseDialog}>OK</button>
        </div>
      </Dialog>
    </>
  )
}