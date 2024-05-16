import {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import '../styles/HorizontalList.css'



export const HorizontalList = ({maxItems, rotate, children}) => {

    const [items, setItems] = useState(children.slice(0, maxItems))
    const [nextItem, setNextItem] = useState(maxItems)

    useEffect(() => {
        setItems(children.slice(0, maxItems))
    }, [children]);

    const rotateLeft = (array) => {
        let newArray = array;
        newArray.push(newArray.shift())
        return newArray;
    }

    const rotateRight = (array) => {
        let newArray = array;
        newArray.unshift(newArray.pop())
        return newArray;
    }

    const forward = () => {
        if (rotate){
            setItems(rotateLeft(children).slice(0, maxItems))
        }
        else{
            if (nextItem < children.length){
                setItems(children.slice(nextItem - maxItems + 1, nextItem + 1))
                setNextItem(nextItem + 1)
            }
        }

    };

    const backward = () => {
        if (rotate){
            setItems(rotateRight(children).slice(0, maxItems))
        }
        else{
            if (nextItem > maxItems){
                setItems(children.slice(nextItem - maxItems - 1, nextItem - 1))
                setNextItem(nextItem - 1)
            }
        }
    }

    return (
        <div className='rotating-list'>
            <div className='rotating-list__icon'>
                { children.length > maxItems && (rotate || (nextItem > maxItems)) ?
                    <FontAwesomeIcon onClick={() => backward()} className='icon--arrow' icon={faCircleArrowLeft}/>
                    : ''
                }
            </div>
            { items.map((item) => (
                item
            ))}
            <div className='rotating-list__icon'>
                { children.length > maxItems && (rotate || (nextItem < children.length)) ?
                    <FontAwesomeIcon onClick={() => forward()} className='icon--arrow' icon={faCircleArrowRight}/>
                    : ''
                }
            </div>
        </div>
    )
}