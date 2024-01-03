import React from "react";
import CardMetric from "./card";


const Home =() =>{
    return(
        <div className="container grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 caret-transparent ">
        <CardMetric  title="Total Company Instances" count = {1234}/>
        <CardMetric  title="Total Teams" count = {2001}/>
        <CardMetric  title="Total users" count = {701}/>
        <CardMetric  title="Total SignedUp wailtlist users" count = {138}/>
        <CardMetric  title="Total Self-created Audiences" count = {303}/>
        <CardMetric  title="Badges Earned" count = {30}/>
        <CardMetric  title="Content Downloads" count = {144}/>
        <CardMetric  title="Certificates Received" count = {11}/>
        <CardMetric  title="Total Donation Amount" count = {80}/>
        <CardMetric  title="Features Introduced" count = {8}/>
        <CardMetric  title="Trends of the Month" count = {15}/>

        </div>
    )
}

export default Home