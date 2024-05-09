import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    
    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md bg-black'  data-bs-theme="dark">
                        <div>
                            <h1 className='navbar-brand'>Student Management App</h1>
                        </div>

                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;