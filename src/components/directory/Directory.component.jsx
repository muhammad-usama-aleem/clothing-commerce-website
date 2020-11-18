import React, { Component } from 'react';
import MenuItem from '../menu-items/Menu-items.component.jsx';
import './directory.component.scss';
 
export default class Directory extends Component {
    constructor(){
        super();

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: '/images/hats.png',
                    linkUrl: 'hats',
                    id: 1
                },
                {
                    title: 'jackets',
                    imageUrl: '/images/jackets.png',
                    linkUrl: '',
                    id: 2
                },
                {
                    title: 'sneakers',
                    imageUrl: '/images/sneakers.png',
                    linkUrl: '',
                    id: 3
                },
                {
                    title: 'womens',
                    imageUrl: '/images/womens.png',
                    linkUrl: '',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'mens',
                    imageUrl: '/images/men.png',
                    linkUrl: '',
                    size: 'large',
                    id: 5
                }
            ]
        }

    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({ id, ...othersectionsprops}) => (
                    <MenuItem key={id} {...othersectionsprops} />
                ))}
            </div>
        )
    }
}
