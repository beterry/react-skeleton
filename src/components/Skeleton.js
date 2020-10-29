import React from 'react'
import Shimmer from './Shimmer'

export default function Skeleton() {
    return (
        <div className="card">
            <div className="skel-line skel-img"/>
            <div>
                <div className="skel-line skel-title" />
                <div className="meta">
                    <div className="skel-meta skel-data"/>
                    <div className="skel-meta skel-cat"/>
                </div>
                <div className="skel-line skel-p" />
                <div className="skel-line skel-p" />
                <div className="skel-line skel-p" />
                <div className="skel-line skel-p skel-last" />
            </div>
            <Shimmer />
        </div>
    )
}