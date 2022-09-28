<template>
    <div class="body">
        <div class="top">
            <p class="text-1">QUALITY CONTENT</p>
        </div>
        <div class="info">
            <div class="left">
                <p class="title">Dont't waste your time on</p><br>
                <p class="title">anything.</p><br>
                <p class="text-1">We are a company that seeks to provide or recomended quality dermatologist</p><br>
                <p class="text-1">professionals so you do not have to waste time in lines or schedule your</p><br>
            </div>
            <div class="rigth">
                <img src="https://www.w3schools.com/images/lamp.jpg" width="320" height="320"/>
            </div>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
br { 
    display: block;
    margin: 0px 0;
    line-height:22px;
    content: " ";
}
    
.body {
    background-color:cornflowerblue;  
    padding: 1%;
}

.top {
    padding-top: 50px;
    padding-right: 30px;
    padding-bottom: 10px;
    padding-left: 20px;
}

.title {
    color: white;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    margin: 0px;
    font-size: 46px;
    font-weight:bolder;
}
.text-1 {
    text-align: left;
    color:black;
    font-size: 24px;
    font-family:sans-serif;
    font-weight:lighter;
}
.left {
    align-content: left;
    text-align: left;
    padding-left: 20px;
}

.rigth {
    align-content: rigth;
    text-align: rigth;
}

.info {
    justify-content: space-around;
}

</style>