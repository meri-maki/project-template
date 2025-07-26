import { memo, useCallback, useEffect, useRef, useState } from "react"

import cls from "./NewModal.module.scss"

import { useTransition, a } from "@react-spring/web"

import { Portal } from "shared/utils/Portal/Portal"
import { classNames } from "shared/lib/classNames/classNames"

/* function openModal() {
    document.body.classList.add("body-no-scroll")
}

function closeModal() {
    document.body.classList.remove("body-no-scroll")
} */

interface ModalProps {
    className?: string
    children: React.ReactNode
    isOpen: boolean
    classnameOverlay: string
    onClose?: (() => void) | undefined | (() => Promise<void>)
    overflow?: boolean
    small?: boolean
    disableScrollFix?: boolean
    disableCloseOverlay?: boolean
    isTransBack?: boolean
}

export const NewModal = memo((props: ModalProps) => {
    const {
        className = "",
        children,
        isOpen,
        onClose,
        overflow,
        classnameOverlay,
        small,
        disableScrollFix,
        disableCloseOverlay,
        isTransBack = false
    } = props

    const [isDragging, setIsDragging] = useState(false)
    /* const [startY, setStartY] = useState(0)
    const [currentY, setCurrentY] = useState(0)
    const contentRef = useRef<HTMLDivElement>(null)
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setIsDragging(true)
        setStartY(e.touches[0].clientY)
        setCurrentY(e.touches[0].clientY)
    }

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (isDragging) {
            setCurrentY(e.touches[0].clientY)
        }
    }

    const handleTouchEnd = () => {
        if (isDragging) {
            const dragDistance = currentY - startY
            if (dragDistance > 100) {
                closeHandler()
            }
            setIsDragging(false)
            setStartY(0)
            setCurrentY(0)
        }
    } */

    const closeHandler = useCallback(() => {
        if (onClose) {
            onClose()
        }
    }, [onClose])
    const onKeyDown = useCallback(
        (e) => {
            if (e.key === "Escape") {
                closeHandler()
            }
        },
        [closeHandler]
    )

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown)
        }

        // Cleanup function
        return () => {
            window.removeEventListener("keydown", onKeyDown)
        }
    }, [disableScrollFix, isOpen, onKeyDown])

    const onContentClick = (e) => {
        e.stopPropagation()
    }

    const mods = {
        [cls.opened]: isOpen,
        [cls.isTransBack]: isTransBack,
        [cls.overflow]: overflow,
        [cls.small]: small,
        //   [cls.animate]: animate,
        [cls.isDragging]: isDragging
    }

    const transition = useTransition(isOpen, {
        from: {
            y: "100%",
            opacity: 0
        },
        enter: {
            y: "0",
            opacity: 1,
            config: {
                duration: 300
            }
        },
        leave: {
            y: "100%",
            opacity: 0,
            //expires: true,
            config: {
                duration: 300
            }
        }
    })

    return transition((style, isOpen) =>
        isOpen ? (
            <Portal>
                <a.div
                    className={classNames(cls.overlayColor, mods, [[classnameOverlay]])}
                    style={{ opacity: style.opacity, transform: style.y }}
                    data-fixed
                />
                <a.div className={classNames(cls.NewModal, mods, [className, "modal"])} style={style} data-fixed>
                    <div className={cls.overlay} onClick={disableCloseOverlay ? undefined : closeHandler}>
                        <div
                            data-modal-wrapper
                            className={cls.wrapper}
                            //ref={contentRef}
                            //onTouchStart={disableCloseOverlay ? undefined : handleTouchStart}
                            //onTouchMove={disableCloseOverlay ? undefined : handleTouchMove}
                            //onTouchEnd={disableCloseOverlay ? undefined : handleTouchEnd}
                        >
                            <div data-column className={cls.content} onClick={onContentClick} data-modal-content>
                                {children}
                            </div>
                        </div>
                        {/* <Cross onClick={closeHandler} /> */}
                    </div>
                </a.div>
            </Portal>
        ) : null
    )
})
