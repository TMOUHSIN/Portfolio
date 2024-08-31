import python from './assets/Python.png'
import java from './assets/java.webp'
import javascript from './assets/Javascript.png'
import typescript from './assets/typscript.png'
import c from './assets/c.png'
import dart from './assets/dart.png'
import php from './assets/php.png'

import html from './assets/html.png'
import css from './assets/css.svg'
import react from './assets/react1.png'
import flutter from './assets/flutter.png'
import nestjs from './assets/nestjs.svg'
import mysql from './assets/mysql.png'
import pgsql from './assets/pgsql.png'




function Skills(){
    return(
        <>
        <div className="skills-title">
            <h1>Skills</h1>
        </div>
        <div className="skills">
            <SkillsCard img={python} name="Python"/>
            <SkillsCard img={java} name="Java"/>
            <SkillsCard img={javascript} name="Javascript"/>
            <SkillsCard img={typescript} name="Typescript"/>
            <SkillsCard img={dart} name="Dart"/>
            <SkillsCard img={c} name="C"/>
            <SkillsCard img={php} name="PHP"/>
            <SkillsCard img={html} name="HTML"/>
            <SkillsCard img={css} name="CSS"/>
            <SkillsCard img={react} name="React"/>
            <SkillsCard img={flutter} name="Flutter"/>
            <SkillsCard img={nestjs} name="Nestjs"/>
            <SkillsCard img={mysql} name="Mysql"/>
            <SkillsCard img={pgsql} name="PGSQL"/>
            
        </div>
        {/* <div className="skills">

            
        </div> */}
        </>
    )
}

function SkillsCard(props){

    return(
        <>
        <div className="skill">
            <div className="skill-card">
                <img src={props.img} alt="" />

                
            </div>
            <h2>{props.name}</h2>
        </div>
        </>
    )

}
export default Skills