import React, { useState } from 'react'

const ListMap = ({name,id , placeholder, save, deleteItem}) => {

    const [item, setItem] = useState(name);
    const [disabled, setDisabled] = useState(true);
    const [showSuccessIcon, setShowSuccessicon] = useState(false);

    const onSave = () => {
        if(disabled)
            return

        console.log(name)
        if(name == undefined){
            console.log('test')
            save(item)
        } else {
            save(id,item)
            setShowSuccessicon(true)
        }
    }
    const handlerChange = (e) =>{
        if(showSuccessIcon)
            setShowSuccessicon(false)

        setItem(e.target.value)
        setDisabled(false)    
    }

    return (
        <div className="input-group" >
            <input type="text" className="form-control" value={item} onChange={handlerChange} placeholder={placeholder}  />
            <div className="input-group-prepend">
                {
                    showSuccessIcon?
                    <span className="input-group-text box_form_success">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-check fa-w-16 fa-2x"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" className=""></path></svg>
                    </span> :
                    <span className={`input-group-text box_form_save ${disabled && 'disabled'}`}   onClick={onSave} >
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="save" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-save fa-w-14 fa-2x"><path fill="currentColor" d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z" ></path></svg>
                    </span>
                }
                
                <span className="input-group-text box_form_remove" onClick={()=>deleteItem(id)}>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-trash fa-w-14 fa-2x"><path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z" ></path></svg>
                </span>
            </div>
        </div>

    )
}

export default ListMap