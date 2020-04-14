import axios from "axios"
import {
    members,
    partners
} from "./sampledata"

axios.defaults.headers.post['Content-Type'] = 'application/json';

// class API {
//     getMembers() {
//         return axios.post("/actors/team/list_members")
//     }

//     getPartners() {
//         return axios.post("/actors/community/list_partners")

//     }

// }
class API {
    getMembers(projects, contribution_types) {
        if (!window.process.env.dev) {
            return axios.post("/web/gedis/http/team/list_members", {
                args: {
                    projects: projects,
                    contribution_types: contribution_types
                }
            })
        } else {
            let newRes = {
                data: [...members]
            };
            // DON'T CHANGE THIS PART FOR DEEP COPYING
            // ASK @abom first.
            return new Promise(function (resolve, reject) {
                resolve(JSON.parse(JSON.stringify(newRes)))
            });
        }
    }

    getPartners() {
        if (!window.process.env.dev) {
            return axios.post("/web/gedis/http/community/list_partners")
        } else {
            console.log("dev")

            return new Promise(function (resolve, reject) {
                resolve({
                    data: partners
                })
            });
        }
    }

}
export let api = new API()
