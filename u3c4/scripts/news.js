// Ude Import export (MANDATORY)
import{navbar} from "../components/navbar.js";

let n=document.getElementById("navbar");
n.innerHTML=navbar();

import{searchNews,append,search} from './fetch.js';


document.getElementById("search_input").addEventListener("keydown",search)