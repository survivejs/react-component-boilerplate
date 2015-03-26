'use strict';

var React = require('react');
var Fork = require('react-ghfork');

var readme = require('../README.md');
var pkgInfo = require('../package.json');


module.exports = React.createClass({
    displayName: 'App',

    render() {
        return (
            <div className='pure-g'>
                <Fork className='right' project={pkgInfo.user + '/' + pkgInfo.name} />
                <header className='pure-u-1'>
                    <h1>{pkgInfo.name}</h1>

                    <div className='description'>{pkgInfo.description}</div>
                </header>
                <article className='pure-u-1'>
                    <section className='demonstration'>
                        <div className='description'>
                            <h2>Demonstration</h2>

                            <p>Just demonstrating the awesomeness of this boilerplate here.</p>
                        </div>

                        <div>...</div>
                    </section>
                    <section className='documentation'>
                        <h2>README</h2>

                        <div dangerouslySetInnerHTML={{__html: readme}}></div>
                    </section>
                </article>
            </div>
        );
    },
});
