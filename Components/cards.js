import React from 'react';
import Styled from 'styled-components';
import 'babel-polyfill';

let Feed            = Styled.div `display:flex;justify-content:center;margin:2em 0px;flex-wrap:wrap;`
let Card            = Styled.div ` margin-bottom:20px; margin:50px 10px 10px 20px; width:100%;max-width:32em;background-color:#eaedef;border-radius:8px;position:relative;border:1px solid #eaedef;padding-right:1em;`
let BookPic         = Styled.img `height:12em;width:8em;margin-left: 1em;margin-top:-2em;position:absolute;box-shadow:0px 0px 20px rgba(0, 0, 0, 0.2);`
let Data            = Styled.div `margin-left:10em;margin-top:1.6em;`
let Name            = Styled.span `text-transform:capitalize;font-size:1em;font-family: 'Noto Sans', sans-serif;`
let Auther          = Styled.span `font-size:0.8em;font-family: 'Noto Sans', sans-serif;display:block;`
let Description     = Styled.span `display:block;padding:0.8em 0px;`

class FeedList extends React.Component{
    constructor(){
        super();
        this.state ={
            data : [require(`../assets/book/book1.png`),require(`../assets/book/book3.png`),require(`../assets/book/book5.png`),require(`../assets/book/book2.png`),require(`../assets/book/book4.png`),require(`../assets/book/book5.png`),require(`../assets/book/book4.png`),require(`../assets/book/book3.png`),require(`../assets/book/book2.png`),require(`../assets/book/book1.png`),require(`../assets/book/book5.png`)]
        }
    }
    render(){
        return(
            <Feed>
                {this.state.data.map((Img,i)=>{
                    return(
                        <Card key={i}>
                            <BookPic src="https://source.unsplash.com/1600x900/?bookcover" alt="book" />
                            <Data>
                                <Name>BIG MAGIC : Creative Liv ...</Name>
                                <Auther>by Elizabeth Giibret</Auther>
                                <Description>There are a number of features that make RandomText a little different from other Lorem Ipsum dummy text generators ...</Description>
                            </Data>                          
                        </Card>
                    )
                })}
            </Feed>
        )
    }
}

export default FeedList;