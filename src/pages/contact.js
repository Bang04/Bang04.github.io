import React from "react";
import Layout from "../components/layout/Layout"
import 'bulma/css/bulma.min.css';
function Conteact({data, location, pageContext}){
  const siteTitle =  `Conteact`

    return(
        <Layout location={location} title={siteTitle}>
            <form method="post"action="https://getform.io/{your-unique-getform-endpoint}">
                <div className="card">
                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                            <input type="text" name="name" id="name" />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input type="email" name="email" id="email" />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Message</label>
                        <div class="control">
                        <textarea name="message" id="message" rows="5" />
                        </div>
                    </div>
                    <div class="control">
                        <button class="button is-primary">Send</button>
                        <input class="button" type="reset" value="Clear" />
                    </div>
                </div>
            </form>
        </Layout>
    )
}

export default Conteact;