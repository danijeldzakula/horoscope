import React, { useState, Suspense } from "react"
import { Transition } from 'react-transition-group'


export function ImageTransition({ image, speed }) {
    const [currentUrl, setCurrentUrl] = useState(image)

    const duration = speed || 500

    const defaultStyles = {
        transition: `background-image ${duration}ms ease-in-out`,
        opacity: 1
    }
    
    const transitionStyles = {
        entering: { opacity: 1 },
        entered: { opacity: 1 },
        exiting: { opacity: 1 },
        exited: { opacity: 1 }
    }
    

    return (
        <Transition in={image === currentUrl} timeout={duration} onExited={() => setCurrentUrl(image)}>
            {(state) => (
                <figure className="figure-image" style={{ backgroundImage: `url('${currentUrl}')`, ...defaultStyles, ...transitionStyles[state]}} />
            )}
        </Transition>
    )
}

