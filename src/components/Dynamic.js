import React from 'react';

class Dynamic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageContent: "<p><a href=\"https://globallifequotes.blogspot.com/2017/07/somewhere-we-have-need.html\">https://globallifequotes.blogspot.com/2017/07/somewhere-we-have-need.html</a></p>\n" +
                "\n" +
                "<p><strong>Somewhere we have need in the world</strong></p>\n" +
                "\n" +
                "<p><strong>God has not tried hard work, Let&#39;s make us.</strong></p>\n" +
                "\n" +
                "<p><strong><img alt=\"\" src=\"https://2.bp.blogspot.com/-BFf4NAo3eIY/W4uCF6YNV0I/AAAAAAAABF4/uoDlMnKdMLca160r1nLo8huF8ydOGefcQCLcBGAs/s1600/Somewhere%2Bwe%2Bhave%2Bneed.jpg\" style=\"height:338px; width:600px\" /></strong></p>\n" +
                "\n" +
                "<ol>\n" +
                "\t<li>\n" +
                "\t<h1>best prayer&nbsp;<a href=\"https://youtu.be/K9PsKXnS-b4\">https://youtu.be/K9PsKXnS-b4</a></h1>\n" +
                "\t</li>\n" +
                "</ol>\n" +
                "\n" +
                "<blockquote>\n" +
                "<p>हे परमपिता परमात्मा मुझसे जाने या अनजाने में कोई भी&nbsp;<br />\n" +
                "गलती हो गयी हो तो हो सके तो मुझे माफ़ कर देना.</p>\n" +
                "\n" +
                "<p>और आज मेरी सिर्फ एक ही प्रार्थना का स्वीकार करना की मैं जहां भी जाऊ सभी दिशा में&nbsp;<br />\n" +
                "५१ किलोमीटर के विस्तार के अंदर कोई भी लोग प्रवेश करे औ एक-दूसरे के लिए जीवन जीने लगे&nbsp;<br />\n" +
                "और एक ऐसी परिस्थिति का निर्माण करना की किसी &nbsp;को पता ही ना चले की दुःख क्या है.</p>\n" +
                "\n" +
                "<p>हे &nbsp;परमात्मा इस ५१ किलोमीटर के विस्तार के अंदर&nbsp;<br />\n" +
                "कोई भी दुःखी लोग आये तो उसका दुःख दूर हो जाये,<br />\n" +
                "कोई भूखा आये तो उसकी भूख मिट जाये,<br />\n" +
                "कोई प्यासा आये तो उसकी प्यास मिट जाये,<br />\n" +
                "कोई रोगी आये तो रोग मुक्त हो जाये,<br />\n" +
                "कोई अंधा आये तो वो देखता हो जाये,<br />\n" +
                "कोई अज्ञानी आये तो वो ज्ञानी हो जाये,<br />\n" +
                "कोई लूटने आये तो वो कुछ देके जाये,<br />\n" +
                "कोई क्रोधी आये तो वो &nbsp;शांत हो जाये,<br />\n" +
                "कोई आलसी हो तो &nbsp;मेहनती हो जाये ,<br />\n" +
                "कोई मारने आये तो वो लोगो को बचाके जाये,&nbsp;<br />\n" +
                "कृपा करके ऐसी परिस्थिति का निर्माण करना.</p>\n" +
                "\n" +
                "<p>हे परमपिता परमात्मा इस शरीर के अंदर जो भी दुर्गुणों हो जेसे के &nbsp;काम, क्रोध, लोभ,&nbsp;<br />\n" +
                "मोह, अहंकार, घृणा, ईर्ष्या, आलस जेसे सभी दुर्गुणों को हो सके तो नष्ट कर देना।&nbsp;</p>\n" +
                "\n" +
                "<p>हे परमपिता परमात्मा अब हो सके तो इस शरीर से और मन से कोई ऐसा काम ही ना करवाना जो माफी के लायक ही ना हो.</p>\n" +
                "</blockquote>\n" +
                "\n" +
                "<p>&nbsp;</p>\n"
        }
    };

    componentWillMount() {
        let headerPage = this.props.match && this.props.match.params && this.props.match.params.page;
        this.gitHeaderInfo(headerPage)
    }

    componentWillUpdate(nextProps, nextState) {
        let headerPage = nextProps.match && nextProps.match.params && nextProps.match.params.page;
        this.gitHeaderInfo(headerPage)
    }

    gitHeaderInfo = (hider) =>{
        console.log("sidebar", hider)
    }

    createMarkup = () => {
        return {__html: this.state.pageContent};
    }

    render() {
        return (
            <div className="container">
                <h1>main header {window.location.pathname}</h1>
                <div dangerouslySetInnerHTML={this.createMarkup()}/>
                {this.createMarkup}
            </div>
        );
    }
}

export default Dynamic;