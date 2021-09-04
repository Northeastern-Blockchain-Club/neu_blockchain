import React, { Component } from 'react'
import { Typography } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"


const CardWithContent = ({title, content}) => {
    return(
        <>
        <Card className="card" variant="outlined"  component="h2">
           <CardContent>
                <Typography variant="h5">
                   {title}
                </Typography>
                {content}
           </CardContent>
       </Card>
        </>
    )
}


export default CardWithContent
