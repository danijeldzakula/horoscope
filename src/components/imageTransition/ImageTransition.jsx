import React, { useState } from "react"
import { Transition } from 'react-transition-group'

const duration = 1000
const defaultStyles = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0
}
const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 }
}

export function ImageTransition({ url }) {
    const [currentUrl, setCurrentUrl] = useState(url)

    console.log(currentUrl)
    console.log(url)

    return (
        <Transition in={url === currentUrl} timeout={duration} onExited={() => setCurrentUrl(url)}>
            {(state) => (
                <figure className="figure-image" style={{ backgroundImage: `url('${currentUrl}')`, ...defaultStyles, ...transitionStyles[state]}}></figure>
            )}
        </Transition>
    )
}