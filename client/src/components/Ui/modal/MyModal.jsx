import classes from './MyModal.module.css'

export default function MyModal({modalActiv, setModalActiv, children}) {
    const rootClasses = [classes.modal];
    if(modalActiv){
        rootClasses.push(classes.activ);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={()=>setModalActiv(false)}>
            <div className={classes.modalWindow} onClick={(e)=> e.stopPropagation()}>{children}</div>
        </div>
    )
}