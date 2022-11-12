
# You draw I guess
This is a HTML5 games you draw I guess

## The pages
There are pages:
- gameroom  Used for players together play this game.
- main  Used for game introduction, log and register. 
- gamehall Used for create and find groups.  

## Components in different pages / Routes control
### gameroom
- Body
 - Container
    - LeftRank
    - GameArea
        - CanvasBoard 
            - ToolBar
        - AnswerBaord
# Login and register
- LoginForm
- RegisterForm


## User info data structure
user{
    id:string[8];
    name:string[8];
    password:string[16];
}


## The relative module I used:
- style-components  split to write the style of each component
- antd  UI framework for react
