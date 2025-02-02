import React from 'react'
import Button from '../button/Button'
import './blog-styles.scss'

export default function Join() {
    return (
        <div className="join-us">
            <h3>Join the community!</h3>
            <span>Join our Discord community to share knowledge, network and get feedback on your startup</span>
            <a href="https://discord.gg/r3j7Byh" target="_blank" rel="noopener noreferrer"><Button white width="12rem">Join Us</Button></a>
        </div>
    )
}
