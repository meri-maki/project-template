import { memo, useCallback, useEffect, useRef, useState } from "react"

import cls from "./Modal.module.scss"

import { useTransition, a } from "@react-spring/web"

import { Portal } from "shared/utils/Portal/Portal"
import { classNames } from "shared/lib/classNames/classNames"

/* function openModal() {
    document.body.classList.add("body-no-scroll")
}

function closeModal() {
    document.body.classList.remove("body-no-scroll")
} */

export function Cross({ onClick }) {
    return (
        <div className={cls.cross} onClick={onClick} data-modal-cross data-pointer>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <g clipPath="url(#clip0_6187_51678)">
                    <path
                        d="M13.1464 11.8506C13.6461 12.3503 13.4175 13.2035 12.7349 13.3864C12.4182 13.4712 12.0802 13.3807 11.8483 13.1488L7.00016 8.29911L2.1505 13.1472C1.65085 13.6469 0.797678 13.4183 0.614795 12.7358C0.529917 12.419 0.620479 12.081 0.852369 11.8491L5.70203 7.00099L0.853894 2.15132C0.354247 1.65167 0.582848 0.798501 1.26539 0.615613C1.58215 0.53074 1.92014 0.621302 2.15203 0.853187L7.00016 5.70285L11.8498 0.852425C12.3495 0.352773 13.2026 0.581379 13.3855 1.26392C13.4704 1.58068 13.3798 1.91867 13.148 2.15056L8.29829 7.00099L13.1464 11.8506Z"
                        fill="#FAFAFA"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_6187_51678">
                        <rect width="14" height="14" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    )
}

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

export const Modal = memo((props: ModalProps) => {
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
    const [startY, setStartY] = useState(0)
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
    }

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
            expires: true,
            config: {
                duration: 300
            }
        }
    })

    return transition((style, isOpen) =>
        !isOpen ? null : (
            <Portal>
                <a.div
                    className={classNames(cls.overlayColor, mods, [[classnameOverlay]])}
                    style={{ opacity: style.opacity }}
                    data-fixed
                />
                <a.div className={classNames(cls.Modal, mods, [className, "modal"])} style={style} data-fixed>
                    <div className={cls.overlay} onClick={disableCloseOverlay ? undefined : closeHandler}>
                        <div
                            data-modal-wrapper
                            className={cls.wrapper}
                            ref={contentRef}
                            onTouchStart={disableCloseOverlay ? undefined : handleTouchStart}
                            onTouchMove={disableCloseOverlay ? undefined : handleTouchMove}
                            onTouchEnd={disableCloseOverlay ? undefined : handleTouchEnd}
                        >
                            <Cross onClick={closeHandler} />
                            <div data-column className={cls.content} onClick={onContentClick} data-modal-content>
                                {children}
                            </div>
                        </div>
                    </div>
                </a.div>
            </Portal>
        )
    )
})
