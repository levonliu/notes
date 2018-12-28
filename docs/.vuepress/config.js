module.exports = {
    title      : 'Notes',
    themeConfig: {
        search : false,
        home    :  {title: 'Home', link: '/', icon: 'icon-i-home'},
        sidebar: [
            {
                title   : 'Notes',
                icon    : 'icon-notes',
                children: [
                    {title: 'Server', link: '/notes/server/', icon: 'icon-server'},
                    {title: 'PHP', link: '/notes/php/', icon: 'icon-php'},
                    {title: 'JavaScript', link: '/notes/javaScript/', icon: 'icon-JavaScript'},
                ]
            },
        ]
    },
    markdown   : {
        lineNumbers: true
    }
}