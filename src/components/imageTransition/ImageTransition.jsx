import React, { useState, Suspense } from "react"
import { Transition } from 'react-transition-group'

const duration = 700
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

export function ImageTransition({ url }) {
    const [currentUrl, setCurrentUrl] = useState(url)

    console.log(url)

    return (
        <Transition in={url === currentUrl} timeout={duration} onExited={() => setCurrentUrl(url)}>
            {(state) => (
                <figure className="figure-image" style={{ backgroundImage: `url('${currentUrl}')`, ...defaultStyles, ...transitionStyles[state]}} />
            )}
        </Transition>
    )
}

